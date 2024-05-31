import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import MyQueriesCard from "./MyQueriesCard";
import Swal from "sweetalert2";

const MyQueries = () => {

    useEffect(() => {
        document.title = 'MyQueries';
    }, []);

    const backgroundImageUrl1 = "https://i.ibb.co/0QVWLXX/queries.png";
    const backgroud1 = {
        backgroundImage: `url(${backgroundImageUrl1})`,
    };

    const { user } = useContext(AuthContext);
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/userAddqueries?user_email=${user.email}`)
            .then(res => {
                // Sort queries in descending order based on Timestamp
                const sortedQueries = res.data.sort((a, b) => new Date(b.Timestamp) - new Date(a.Timestamp));
                setQueries(sortedQueries);
            });
    }, []);

    // delete item functionality
    const handleDelete = id => {
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
                fetch(`${import.meta.env.VITE_API_URL}/userAddqueries/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Item has been deleted.',
                                'success'
                            )
                            const remaining = queries.filter(job => job._id !== id);
                            setQueries(remaining);
                        }
                    })
            }
        })
    }

    return (
        <div className="mb-24">
            <div className="flex flex-col justify-center items-center h-[400px] bg-no-repeat bg-cover bg-center" style={backgroud1} >
                <h1 className="text-4xl lg:text-6xl font-bold pb-10 text-cyan-500">My Queries Page</h1>
                <Link to='/addqueries' className="btn btn-primary">Add Queries</Link>
            </div>

            {queries.length > 0 ? (
                <div className="lg:w-[1250px] mx-auto mt-12">
                    <div className="md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-7 gap-y-7">
                        {queries.map(query => (
                            <MyQueriesCard
                                key={query._id}
                                query={query}
                                handleDelete={handleDelete}
                            />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="text-center mt-10 space-y-3 ">
                    <h1 className="text-3xl lg:text-5xl font-bold">No Data Found...!</h1>
                    <p className="text-lg">To add any queries click add queries button</p>
                    <Link to='/addqueries' className="btn btn-primary">Add Quries</Link>
                </div>
            )}
        </div>
    );
};

export default MyQueries;
