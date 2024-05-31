import { Link } from "react-router-dom";

const MyQueriesCard = ({ query , handleDelete}) => {

    const {_id, product_name, product_brand, query_title ,image_url } = query;


    return (
        <div className="card lg:w-96 bg-base-100 shadow-xl border border-[#463e3e]">
            <figure><img className="h-72 w-full" src={image_url} alt="Image comming" /></figure>
            <div className="card-body mr-4 lg:mr-0">
                <h2 className="text-2xl font-semibold">Name : {product_name}</h2>
                <p className='pb-3 text-base font-semibold'><span className="font-bold">Brand:</span> {product_brand}</p>

                <div className='w-full'>
                    <p className="text-base font-semibold"><span className="font-bold">QueryTitle:</span>  {query_title}</p>
                </div>

                <div className="w-ful flex justify-between mt-6 ">
                    <Link to={`/details/${_id}`} className="btn btn-primary">Details</Link>
                    <Link to={`/updateQueries/${_id}`} className="btn btn-success">Update</Link>
                    <button onClick={() => handleDelete(_id)} className="btn btn-warning">Delete</button>
                </div>

            </div>
        </div>
    );
};


export default MyQueriesCard;