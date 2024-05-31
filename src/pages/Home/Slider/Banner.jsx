import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className=' brightness-125 flex justify-center items-center h-[100%]'>
            <div className='text-center items-center space-y-6'>
                <h1 className='text-3xl lg:text-5xl font-bold text-slate-950'>
                    Unlock Infinite Knowledge: Explore All Queries Now!
                </h1>
                <p className='hidden lg:block text-center text-xl text-slate-950 font-semibold'>Explore a plethora of knowledge. Our All Queries page offers answers to all your questions. <br /> Embark on a journey of discovery today!</p>
                <div className="text-center">
                    <Link to='/queries' className="btn btn-primary">Queries</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;