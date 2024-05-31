import axios from "axios";
import { useEffect, useState } from "react";
import QueriesRouteCard from "./QueriesRouteCard";

const Queries = () => {

    useEffect(() => {
        document.title = 'Queries';
    }, []);

    const [queries, setQueries] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [gridLayout, setGridLayout] = useState('grid-cols-3'); // Set default layout to 3 columns

    useEffect(() => {
        axios(`${import.meta.env.VITE_API_URL}/userAddqueries`)
            .then(res => setQueries(res.data))
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const targetValue = e.target.title.value;
        setSearchValue(targetValue);
    }

    const filteredJobs = queries.filter(query =>
        query.product_name.toLowerCase().includes(searchValue.toLowerCase())
    );

    const handleGridLayoutToggle = (layout) => {
        setGridLayout(layout);
    };

    return (
        <div className="mb-20">
            <h1 className="text-slate-600 py-2 mt-6 text-5xl text-center font-bold">All Queries Here</h1>

            <div className="flex justify-center mt-5">
                <form className="flex gap-2" onSubmit={handleSubmit}>
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" name="title" className="grow" placeholder="Enter Job Title" />
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                    </label>
                    <input type="submit" className="btn btn-success text-lg text-white" value='Search' />
                </form>
            </div>

            <div className="flex items-center justify-center mt-5">
                <h1 className="text-2xl mr-5 font-semibold">Change Layout : </h1>
                <div className="flex justify-center mt-3 space-x-2">
                    <button className="btn btn-primary" onClick={() => handleGridLayoutToggle('grid-cols-1')}>1 Column</button>
                    <button className="btn btn-primary" onClick={() => handleGridLayoutToggle('grid-cols-2')}>2 Columns</button>
                    <button className="btn btn-primary" onClick={() => handleGridLayoutToggle('grid-cols-3')}>3 Columns</button>
                </div>
            </div>

            <div className={`lg:w-[1250px] mx-auto mt-12 grid ${gridLayout} gap-y-7 justify-start`}>
                {
                    filteredJobs.map(query => <QueriesRouteCard
                        key={query._id}
                        query={query}
                    ></QueriesRouteCard>)
                }
            </div>
        </div>
    );
};

export default Queries;
