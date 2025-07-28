import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText } from "gsap/all";

const VisionMission = ()=> {

    useGSAP(()=>{
        const scrolText = new SplitText('.line-scroll', {type:"lines"});
        const t1 = gsap.timeline({
            scrollTrigger:{
                trigger:"#hero-slider",
                //start:"top 50%",
                start: "bottom 50%",
                toggleActions: "play none none reverse",
            }
        });

        t1.from(".vision-blk", {
            x: -500,
            duration: 1,
            ease: "power3.out"
          }, 0)
          .from(".mission-blk", {
            x: 500,
            duration: 1,
            ease: "power3.out"
          }, 0)
          .from(scrolText.lines, {
            opacity:0,
            y:100,
            duration:1,
            ease: "power2.out",
            stagger: 0.08,

          }, "<0.8");
 
    },[]);

    return (
        <div className="vision-bg flex flex-col w-[90%] m-auto overflow-hidden justify-center mt-20 md:flex-row lg:w-[866px] ">
            <div className="outer-wrapper w-[100%] h-[300px] md:w-[55%]">
                <div className="vision-blk w-[100%] h-[100%] bg-[#ec8e3b]/50 angled-box-right items-center relative">
                    <div className="flex intro-wrapper w-[100%] h-[100%] md:w-[90%] text-white items-center text-center px-5">
                        <div  className="line-scroll w-full">
                            <h3 className="mb-2">Vision</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, commodi.</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="mission-blk angled-box-left flex relative justify-end bg-[#0aaeae]/50 w-[100%] h-[300px] md:w-[55%]">
                <div className="flex intro-wrapper w-[100%] h-[100%] md:w-[90%] text-white items-center text-center px-5">
                    <div className="line-scroll w-full">
                        <h3 className="mb-2">Mission</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, commodi.</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VisionMission;

