
import Lottie from "lottie-react";
 import FAQ from "../../../assets/FAQ.json"

const Faq = () => {
    return (
        <div className="mb-24 flex flex-col bg-white lg:flex-row rounded-2xl gap-4 lg:gap-12 mx-2 lg:mx-32 p-3 lg:p-8 shadow-2xl border border-[#cbbcbc]" >

            <div className="" data-aos="fade-down-right" data-aos-duration="1000">
                
            <div className="h-96" >
             <Lottie className="rounded-xl w-800px"  animationData={FAQ} />
        
             </div>

            </div>

            <div data-aos="fade-down-left" data-aos-duration="1000" className="px-5 mb-10 lg:mb-0">
            <div className="">
        <form
       
          className="mx-auto my-10 lg:w-[800px] bg-gray-100 rounded-lg shadow-lg p-6"
        >
         
  
        
          <div className=" ">

          <div className="mt-5">
            <p className="font-semibold pb-2">Any Question</p>
            <textarea
              name="assignment_description"
              className="w-full border input-info rounded-lg"
              placeholder="Write here your question"
              rows="5"
            ></textarea>
          </div>
            
            
          </div>


          <div className="text-center mt-10 mb-4">
           
           <input
              className="btn btn-success text-white px-6"
              type="submit"
              name=""
              id=""
              value="Submit"
            />
           
          </div>
        </form>
      </div>
                </div>

            </div>

        
    );
};

export default Faq;