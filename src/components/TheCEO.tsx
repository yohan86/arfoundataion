import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import type {CEOmessage } from "../types";
import YtVideoPopup from "./YtVideoPopup";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {SplitText } from "gsap/all";

const TheCEO: React.FC<CEOmessage> = ({message, url})=> {
    
    if(!message) return null;

    useGSAP(()=>{
        gsap.set(".animate-intro", { opacity: 1 });
        const animateTitle = new SplitText(".animate-title", {type: "lines"});
        const animateText = SplitText.create(".animate-intro", {type: "words", aria:"hidden"});
        const CEOt1 = gsap.timeline({
            scrollTrigger:{
                trigger:"#theceo",
                start:"top 50%",
                toggleActions: "play none none none",
            }
        });
        CEOt1
        .from(animateTitle.lines, {
            y:-100,
            duration:1,
            ease:"power3.out"
        }, "0")
        .from(animateText.words, {
            opacity: 0,
            duration:0.2,
            ease: "sine.out",
            stagger: 0.1,
        },"0")
        .from(".animate-btn", {
            opacity: 0,
            y: 50,
            duration: 1,
            ease: "power3.out",
        });
      
        
    },[]);


    return (
        <div id="theceo" className="block-wrapper theceo flex relative border-t-35 border-t-[#1d94b0] mt-30 md:mt-10 lg:mt-30">
            <span className="top-border"></span>
            <div className="inner-wrapper flex flex-col py-5 items-center md:items-start md:justify-between md:flex-row md:w-[90%] xl:w-[1000px]">
                <div className="ceo-image w-[180px] h-[175px] md:w-[260px] md:h-[240px] lg:w-[300px] lg:h-[300px] bg-[#ccc] border-[#00ffff] rounded-xl mt-[-123px] md:mt-[0] md:mr-[98px] lg:mt-[-63px] rotate-[45deg] overflow-hidden">
                    <div className="rotate-[-45deg] w-[100%] md:h-[100%]">
                        <img className="w-full h-full object-cover" src="https://deadline.com/wp-content/uploads/2022/08/Chelsea-Frei-2.jpg?w=681&h=383&crop=1" />
                    </div>
                </div>
                <div className="w-[85%] mt-12 px-5 pb-10 md:w-[60%] lg:w-[50%] xl:w-[60%]  overflow-hidden">
                    <div className="animate-title">
                        <div className="sub-title-text satisfy-regular text-[30px] text-[#373640] text-center md:text-left">Message from</div>
                        <h2 className="title text-white uppercase table lg:inline-block bg-[#f9849f] px-2 pt-[4px] mb-5 rounded-[5px] leading-relaxed m-auto md:m-0 md:mb-5">The CEO</h2>
                    </div>
                    <div className="comma-animate">
                        <BiSolidQuoteAltLeft className="text-[#666] text-[25px] mb-5" />
                    </div>
                    <div className="animate-intro opacity-0">
                        <p>{message}</p>
                    </div>
                    <div className="animate-btn">
                        <BiSolidQuoteAltRight className="float-right text-[#666] text-[25px] mt-[-32px]" />
                        {url && (
                            <YtVideoPopup videoId={url} />
                        )}
                    </div>
                   
                    
                </div>
                
            </div>
        </div>
    )
}

export default TheCEO;