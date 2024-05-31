import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RecommendTable from "./RecommendTable";
import Swal from "sweetalert2";

const MyRecommendation = () => {

    useEffect(() => {
        document.title = 'My Recommendation';
    }, []);

    const [recommendation, setRecommendation] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/recommendedQueries?recommender_email=${user.email}`)
            .then(res => setRecommendation(res.data))
    }, [])



    // delete item functionality
    const handleDelete = (id, queryId) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/recommendedQueries/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {


                            // for recommendation_Count
                            const value = -1;
                            axios.patch(`${import.meta.env.VITE_API_URL}/userAddqueries/${queryId}`, { value })
                                .then(response => {
                                    console.log('recommendation_Count updated successfully:', response.data);
                                })
                                .catch(error => {
                                    console.error('Error updating recommendation_Count:', error);
                                });


                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                            const remaining = recommendation.filter(recommend => recommend._id !== id);
                            setRecommendation(remaining);
                        }
                    })
            }
        })
    }



    return (
        <div>

            <div className="text-center pb-10 pt-8">
                <h1 className="text-4xl font-bold">My Recommendation</h1>
            </div>


            <div className="overflow-x-auto pt-5 pb-16">
                <table className="border-b-2 border-[#c9c2c2] table max-w-7xl mx-auto text-lg border-2 pl-5">
                    <thead className="text-black text-2xl bg-[#90EE90] border-b-2 border-[#c9c2c2]">
                        <tr>
                            <th></th>
                            <th></th>
                            <th>Product_name</th>
                            <th>Recommendation_title</th>
                            <th>RecommendedProduct_image</th>
                            <th>RecommendedProduct_name</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            recommendation.map((recommend, idx) =>
                                <RecommendTable
                                    key={idx}
                                    recommend={recommend}
                                    idx={idx + 1}
                                    handleDelete={handleDelete}
                                ></RecommendTable>)
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );

};

export default MyRecommendation;