import { useLoaderData } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";

const Details = () => {

    
    useEffect(() => {
        document.title = 'Details';
    }, []);

    const query = useLoaderData();
    const {_id, product_name, product_brand, query_title, image_url, boycotting_reason, currentDate, recommendation_Count, user_email, user_image, user_name } = query;
    const {user} = useContext(AuthContext);
    const recommender_email = user?.email;
    const recommender_name = user?.displayName;
    const currentTime = new Date().toISOString().split('T')[0];
    


    const handleAddRecommendation = e => {
        e.preventDefault();
        const recommendation_title = e.target.recommendation_title.value;
        const recommendedProduct_name = e.target.recommendedProduct_name.value;
        const recommendedProduct_image = e.target.recommendedProduct_image.value;
        const recommendation_reason = e.target.recommendation_reason.value;
        const queryId = _id;
    

        const recommededQuery = {
            recommendation_title,
            product_name,
            recommendedProduct_image,
            recommendation_reason,
            queryId,
            query_title,
            user_email,
            user_name,
            recommender_email,
            recommender_name,
            recommendedProduct_name,
            currentTime  
        }

        // send data to the server
        fetch(`${import.meta.env.VITE_API_URL}/recommendedQueries`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(recommededQuery)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                     // for recommendation_Count
                     const value = 1;
                     axios.patch(`${import.meta.env.VITE_API_URL}/userAddqueries/${queryId}`,{value})
                     .then(response => {
                         console.log('recommendation_Count updated successfully:', response.data);
                     })
                     .catch(error => {
                         console.error('Error updating recommendation_Count:', error);
                     });

        
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    e.target.reset();
                }
            })

    }


    return (
        <div className="px-5 lg:px-20 mt-20 lg:my-20">

            {/* main part */}
            <div className="flex flex-col lg:flex-row gap-16">
                <img className="lg:w-1/2" src={image_url} alt="" />
                <div>
                    <div className="pb-5 space-y-3 border-b-2 border-dashed border-[#857a7a]">
                        <h1 className="text-xl"><span className="font-bold text-2xl">Product Name: </span> {product_name}</h1>
                        <h1 className="text-xl"><span className="font-bold text-2xl">Brand Name: </span> {product_brand}</h1>
                    </div>

                    <div className="mt-5 pb-6 space-y-2">
                        <h1 className="text-xl"><span className="font-bold text-2xl ">Query Title: </span> {query_title}</h1>
                        <h1 className="text-lg"><p className="pb-1 font-bold text-2xl">Alternation Reason: </p> {boycotting_reason}</h1>
                    </div>

                    <div className="pb-5 space-y-2 border-b-2 border-dashed border-[#857a7a]">
                        <h1 className="text-xl"><span className="font-bold">Posted Date: </span> {currentDate}</h1>
                        <h1 className="text-xl"> <span className="font-bold">Recommendation: </span> {recommendation_Count}</h1>
                    </div>

                    <div className="mt-4">
                        <h1 className="text-3xl font-semibold">User Information</h1>

                        <div className="mt-4 flex items-center gap-4">
                            <div className="avatar">
                                <div className="w-14 rounded-full">
                                    <img src={user_image} />
                                </div>
                            </div>

                            <div className="font-bold">
                                <h1>{user_name}</h1>
                                <h1>{user_email}</h1>
                            </div>

                        </div>
                    </div>

                </div>

            </div>

            {/*  */}
            <div>
                <h1 className="text-4xl mt-20 text-center font-semibold">Add A Recommendation</h1>

                <form onSubmit={handleAddRecommendation} className="mt-8 lg:w-2/3 mx-auto bg-gray-300 rounded-lg shadow-lg p-6">

                    <h1 className="flex items-center gap-3 text-2xl pb-2 font-bold border-b border-[#958d8d]">
                        <span>Recommended Information</span></h1>

                    {/* Row 1 */}
                    <div className="flex flex-col lg:flex-row gap-5 mt-4">
                        <div className="w-full">
                            <p className="font-semibold pb-1">Recommendation Title</p>
                            <input required name="recommendation_title" type="text" placeholder="Enter Recommendation Title" className="bg-white p-1 w-full border input-info rounded-lg" />
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col lg:flex-row gap-5 mt-4">
                        <div className="w-full">
                            <p className="font-semibold pb-1">Recommended product Name</p>
                            <input required name="recommendedProduct_name" type="text" placeholder="Recommended product Name" className="bg-white p-1 w-full border input-info rounded-lg" />
                        </div>
                        <div className="w-full">
                            <p className="font-semibold pb-1">Recommended Product Image</p>
                            <input required name="recommendedProduct_image" type="text" placeholder="Enter Recommended Product Image" className="bg-white p-1 w-full border input-info rounded-lg" />
                        </div>
                    </div>

                    {/* Row 5 */}
                    <div className="mt-5">
                        <p className="font-semibold pb-2">Recommendation Reason</p>
                        <textarea required name="recommendation_reason" className="bg-white w-full border input-info rounded-lg" placeholder="Write here" rows="5"></textarea>
                    </div>


                    <div className="text-center mt-8 mb-4">
                        <input required className="btn btn-success px-6 text-white" type="submit" name="" id="" value='Add Recommendation' />
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Details;