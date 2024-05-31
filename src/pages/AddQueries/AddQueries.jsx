import { useContext, useEffect } from "react";
import { BsFillPatchQuestionFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const AddQueries = () => {

    useEffect(() => {
        document.title = 'AddQueries';
    }, []);

    useEffect(() => {
        document.title = 'Add Craft Item';
    }, []);

    const navigate = useNavigate();
    const currentDate = new Date().toISOString().split('T')[0];

    const { user } = useContext(AuthContext);
    const user_name = user?.displayName;
    const user_email = user?.email;
    const user_image = user?.photoURL;
    const recommendation_Count = 0;


    const handleAddItem = e => {
        e.preventDefault();
        const product_name = e.target.product_name.value;
        const product_brand = e.target.product_brand.value;
        const query_title = e.target.query_title.value;
        const image_url = e.target.image_url.value;
        const boycotting_reason = e.target.boycotting_reason.value;

     
        const newItems = {
            product_name,
            product_brand,
            query_title,
            image_url,
            currentDate,
            user_name,
            user_email,
            user_image,
            recommendation_Count,
            boycotting_reason
        }

        // send data to the server
        fetch(`${import.meta.env.VITE_API_URL}/userAddqueries`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItems)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    console.log('Add Item successfully')
                    Swal.fire({
                        title: 'Success!',
                        text: 'Item Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    e.target.reset();
                    navigate('/myqueries')
                }
            })
    }


    return (
        <div className="pb-14">
            <form onSubmit={handleAddItem} className="mx-5 lg:mx-auto my-10 lg:w-[800px] bg-gray-300 rounded-lg shadow-lg p-6">

                <h1 className="flex items-center gap-3 text-2xl pb-2 font-bold border-b border-[#958d8d]">
                    <BsFillPatchQuestionFill /> <span>Queries Information</span></h1>

                {/* Row 1 */}
                <div className="flex flex-col lg:flex-row gap-5 mt-4">
                    <div className="w-full">
                        <p className="font-semibold pb-1">Product Name</p>
                        <input required name="product_name" type="text" placeholder="Enter Product Name" className="bg-white p-1 w-full border input-info rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold pb-1">Product Brand Name</p>
                        <input required name="product_brand" type="text" placeholder="Enter Product Brand Name" className="bg-white p-1 w-full border input-info rounded-lg" />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="flex flex-col lg:flex-row gap-5 mt-4">
                    <div className="w-full">
                        <p className="font-semibold pb-1">Query Title</p>
                        <input required name="query_title" type="text" placeholder="Enter Query Title" className="bg-white p-1 w-full border input-info rounded-lg" />
                    </div>
                    <div className="w-full">
                        <p className="font-semibold pb-1">Product Image-URL</p>
                        <input required name="image_url" type="text" placeholder="Enter Product Image-URL" className="bg-white p-1 w-full border input-info rounded-lg" />
                    </div>
                </div>



                {/* Row 5 */}
                <div className="mt-5">
                    <p className="font-semibold pb-2">Boycotting Reason Details</p>
                    <textarea required name="boycotting_reason" className="bg-white w-full border input-info rounded-lg" placeholder="Write here" rows="5"></textarea>
                </div>


                <div className="text-center mt-8 mb-4">
                    <input className="btn btn-success px-6 text-white" type="submit" name="" id="" value='AddQuery' />
                </div>

            </form>
        </div>
    );
};

export default AddQueries;