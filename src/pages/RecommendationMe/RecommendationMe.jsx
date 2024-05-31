import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import RecommendationMeTable from "./RecommendationMeTable";

const RecommendationMe = () => {

    useEffect(() => {
        document.title = 'Recommendation Me';
    }, []);

    const [recommendation , setRecommendation] = useState([]);
    const {user} = useContext(AuthContext);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/recommendedQueries?user_email=${user.email}`)
            .then(res => setRecommendation(res.data))
    }, [])


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
                            
                        </tr>
                    </thead>

                    <tbody>
                        {
                            recommendation.map((recommend, idx) =>
                                <RecommendationMeTable
                                    key={idx}
                                    recommend={recommend}
                                    idx={idx + 1}                           
                                ></RecommendationMeTable>)
                        }
                    </tbody>

                </table>

            </div>
        </div>
    );

};


export default RecommendationMe;