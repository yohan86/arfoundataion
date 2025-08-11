import { Link } from "react-router-dom"
import { IoIosArrowDroprightCircle } from "react-icons/io";
interface ServiceProps{
    bgcolor:string;
    image:string;
}
const ServiceBox=({bgcolor, image}:ServiceProps)=> {
  return (
    

        <div className="servicebox flex w-full h-[378px] overflow-hidden md:h-[458px] md:w-1/2 lg:w-1/3"
        style={{backgroundImage:`url(${image})`}}
        >
            <div className={`box-intro relative w-full h-[178px] md:h-[264px]  mt-[200px] px-5 py-5 text-white link-color-pink`}
                style={{backgroundColor:bgcolor}}
            >
                <h3 className="text-white inline-block mb-4 has-underline">How We Work</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae est assumenda ducimus nulla tempore atque eos.  </p>
                <Link to="/services" className="inline-flex flex-row gap-2"><span>Read more</span> <IoIosArrowDroprightCircle className="mt-1"/></Link>
                <span className="bg-design"></span>
            </div>
        </div>

  )
}

export default ServiceBox;