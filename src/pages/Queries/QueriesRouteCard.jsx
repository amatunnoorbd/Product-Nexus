import { Link } from "react-router-dom";

const QueriesRouteCard = ({ query }) => {

    const { _id, product_name, product_brand, query_title, image_url } = query;


    return (
        <div className="rounded-t-xl flex flex-col lg:w-96 bg-base-100 shadow-xl border border-[#463e3e]">
            <figure><img  src={image_url} alt="Image comming" className="rounded-t-xl h-72 w-full" /></figure>
            <div className="card-body mr-4 lg:mr-0">
                <h2 className="text-2xl font-semibold">Name : {product_name}</h2>
                <p className='pb-3 text-base font-semibold'><span className="font-bold">Brand:</span> {product_brand}</p>

                <div className='w-full'>
                    <p className="text-base font-semibold"><span className="font-bold">QueryTitle:</span>  {query_title}</p>
                </div>
            </div>

            <div className="w-ful  ">
                <Link to={`/details/${_id}`} className="rounded-none btn w-full btn-primary">Details</Link>
            </div>
        </div>
    );
};


export default QueriesRouteCard;