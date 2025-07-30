import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import type {CEOmessage } from "../types";
import YtVideoPopup from "./YtVideoPopup";

const TheCEO: React.FC<CEOmessage> = ({message, url})=> {

    if(!message) return null;

    return (
        <div className="block-wrapper theceo flex relative border-t-35 border-t-[#1d94b0] mt-30 md:mt-10 lg:mt-30">
            <span className="top-border"></span>
            <div className="inner-wrapper flex flex-col py-5 items-center md:items-start md:justify-between md:flex-row md:w-[90%] xl:w-[1000px]">
                <div className="ceo-image w-[180px] h-[175px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[300px] bg-[#ccc] border-[#00ffff] rounded-xl mt-[-123px] md:mt-[0] md:mr-[98px] lg:mt-[-63px] rotate-[45deg] overflow-hidden">
                    <div className="rotate-[-45deg] w-[100%] md:h-[100%]">
                        <img className="w-full h-full object-cover" src="https://deadline.com/wp-content/uploads/2022/08/Chelsea-Frei-2.jpg?w=681&h=383&crop=1" />
                    </div>
                </div>
                <div className="w-[85%] mt-12 md:w-[60%] lg:w-[50%] xl:w-[60%]">
                    <div className="sub-title-text satisfy-regular text-[30px] text-[#373640] text-center md:text-left">Message from</div>
                    <h2 className="title text-white uppercase table lg:inline-block bg-[#f9849f] px-2 mb-5 rounded-[5px] m-auto md:m-0 md:mb-5">The CEO</h2>
                    <BiSolidQuoteAltLeft className="text-[#666] text-[25px]" /><p>{message}</p>
                    <BiSolidQuoteAltRight className="float-right text-[#666] text-[25px]" />
                    {url && (
                        <YtVideoPopup videoId={url} />
                    )}
                    
                </div>
                
            </div>
        </div>
    )
}

export default TheCEO;