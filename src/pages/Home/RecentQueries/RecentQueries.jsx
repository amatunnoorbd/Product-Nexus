import axios from "axios";
import { useEffect, useState } from "react";
import QueriesCard from "./QueriesCard";

const RecentQueries = () => {
    const [queries, setQueries] = useState([]);

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/recentqueries`)
            .then(res => setQueries(res.data))
    }, [])

    console.log(queries);


    return (
        <div className="py-20 lg:w-[1250px] mx-5 lg:mx-auto">
            <div className="pb-16 text-5xl font-bold text-center">All Recent Queries Here</div>

            <div className="md:gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:ml-7 gap-y-7">
                {
                    queries.map(query => <QueriesCard
                        key={query._id}
                        query={query}
                    ></QueriesCard>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;