import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import axios from "axios";

const Feedback = () => {
    const [feedback, setFeedback] = useState([]);

    useEffect(() =>{
        axios(`${import.meta.env.VITE_API_URL}/feedback`)
        .then(res =>{
            setFeedback(res.data);
        })
    },[])

    const handleSubmit = e => {
        e.preventDefault();
        const ratings = e.target.ratings.value;
        const comment = e.target.comment.value;
        const info ={
            ratings,
            comment
        }
        axios.post(`${import.meta.env.VITE_API_URL}/feedback`,info)
        setFeedback([...feedback, { ratings, comment }]);
        e.target.reset();
    }

    return (
        <div className=" max-w-7xl mx-auto mb-20 ">
            <div className="bg-base-300 mx-5 p-10">
                <h1 className="text-center text-5xl font-semibold mb-10">User Feedback</h1>

                <div className="flex gap-10 mx-20">
                    {/* col1 */}
                    <div className="w-2/3">
                        {feedback.map((fb, index) => (
                            <div key={index} className="flex items-center gap-4 bg-white p-5 rounded-lg mb-4">
                                <div className="avatar">
                                    <div className="w-12 rounded-full">
                                        <img src="https://i.ibb.co/FbjVmqc/3237472.png" alt="User Avatar" />
                                    </div>
                                </div>

                                <div>
                                    <Rating
                                        style={{ maxWidth: 110 }}
                                        value={Number(fb.ratings)}
                                        readOnly
                                    />
                                    <p>{fb.comment}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* col2 */}
                    <div className="w-1/3">
                        <div className=" bg-white p-2 pt-5 rounded-md">
                            <h1 className="text-2xl font-semibold text-center pb-4">Add a feedback</h1>

                            <form onSubmit={handleSubmit} className="mx-5 my-5">
                                <select name="ratings" className="select select-bordered select-sm w-full max-w-xs font-bold mb-4" required>
                                    <option disabled selected>Give Ratings</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>

                                <p className="font-semibold text-lg pb-2">Comment</p>
                                <textarea name="comment" placeholder="Type Here" className="textarea textarea-bordered textarea-lg w-full max-w-xs" required></textarea>

                                <button className="btn w-full btn-success font-semibold text-lg text-white mt-4">Add</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
