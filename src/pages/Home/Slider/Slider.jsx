import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner from './Banner';


const Slider = () => {


    const backgroundImageUrl1 = "https://i.ibb.co/ZgkyhsG/Everything-About-Replacing-An-Outdated-Product-Information-Management-PIM-System-3fa666f2af.jpg";

    const backgroundImageUrl2 = "https://i.ibb.co/X4s6mcs/132214c9-5143-4d6c-9ea7-cc2feefd9b72.png";

    const backgroundImageUrl3 = "https://i.ibb.co/rFzS9kQ/Product-Management-Team.png";



    const backgroud1 = {
        backgroundImage: `url(${backgroundImageUrl1})`,

    }; const backgroud2 = {
        backgroundImage: `url(${backgroundImageUrl2})`,

    }; const backgroud3 = {
        backgroundImage: `url(${backgroundImageUrl3})`,

    };


    return (
        <div className=''>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div style={backgroud1} className='brightness-[85%] bg-no-repeat bg-cover bg-center h-[600px] '>
                        {
                            <Banner></Banner>
                        }
                    </div>

                </SwiperSlide>

                <SwiperSlide>
                    <div style={backgroud2} className=' brightness-[85%] bg-no-repeat bg-cover bg-center h-[600px]'>
                        {
                            <Banner></Banner>
                        }
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div style={backgroud3} className='brightness-[85%] bg-no-repeat bg-cover bg-center h-[600px]'>
                        {
                            <Banner></Banner>
                        }
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Slider;