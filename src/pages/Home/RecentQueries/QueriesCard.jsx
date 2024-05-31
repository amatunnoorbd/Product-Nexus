

const QueriesCard = ({ query }) => {

    const { ProductImage, ProductName, BrandName, QueryTitle, AlternationReason, DatePosted, UserInfo } = query;


    return (
        <div data-aos="zoom-in" data-aos-duration="1000" className="card lg:w-96 bg-base-100 shadow-xl border border-[#463e3e]">
            <figure><img className="h-72 w-full" src={ProductImage} alt="Image comming" /></figure>
            <div className="card-body mr-4 lg:mr-0">
                <h2 className="text-2xl font-semibold">Name : {ProductName}</h2>
                <p className='pb-3 text-base font-semibold'><span className="font-bold">Brand:</span> {BrandName}</p>

                <div className='w-full'>
                    <p className="text-base font-semibold"><span className="font-bold">QueryTitle:</span>  {QueryTitle}</p>
                </div>

                <div className='w-full'>
                    <p className="text-base font-semibold"><span className="font-bold">AlternationReason:</span>  {AlternationReason}</p>
                </div>

                <div className='w-full'>
                    <p className="text-base font-semibold"><span className="font-bold">Posted date:</span>  {DatePosted}</p>
                </div>

                <div className="mt-2 items-center flex gap-3">
                    <div className="avatar">
                        <div className="w-16 rounded-full">
                            <img src={UserInfo.imageAsThumbnail} />
                        </div>                     
                    </div>
                    <p className="text-lg font-bold">{UserInfo.name}</p>
                </div>

            </div>
        </div>
    );
};


export default QueriesCard;