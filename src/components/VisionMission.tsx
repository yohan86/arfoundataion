import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {SplitText } from "gsap/all";
import { useLayoutEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

interface VisionProps{
    lang:string;
}

const VisionMission = ({lang}:VisionProps)=> {
    const {t} = useTranslation();
    const containerRef = useRef<HTMLDivElement | null>(null);
    const splitRef = useRef<SplitText | null>(null);

    // 🔄 Clean up old SplitText before language updates DOM
    useLayoutEffect(() => {
      if (splitRef.current) {
        splitRef.current.revert(); // put text back to normal
        splitRef.current = null;
      }
    }, [lang]);

    if(!lang) return;
    useGSAP(() => {
       if(!containerRef.current) return;
     
        const splitText= new SplitText("#vision-mission .line-scroll", {
            type: "lines",
        });
        const t1 = gsap.timeline({
            scrollTrigger:{
                trigger:"#vision-mission.vision-bg",
                start: lang=="en"? "bottom 50%":"top 40%",
                toggleActions: "play none none reverse",
            }
        });

        t1.from("#vision-mission .vision-blk", {
            x: -500,
            duration: 1,
            ease: "power3.out"
          }, 0)
          .from("#vision-mission .mission-blk", {
            x: 500,
            duration: 1,
            ease: "power3.out"
          }, 0)
          .from(splitText.lines, {
            opacity:0,
            y:100,
            duration:1,
            ease: "power2.out",
            stagger: 0.08,

          }, "<0.8");

       

    },[lang]);

    return (
        <div ref={containerRef} id="vision-mission" key={lang} className="vision-bg flex flex-col w-[90%] m-auto overflow-hidden justify-center mt-10 md:mt-20 md:flex-row lg:w-[866px] ">
            <div className="outer-wrapper w-[100%] h-[300px] md:w-[55%]">
                <div className="vision-blk w-[100%] h-[100%] bg-[#ec8e3b]/50 angled-box-right items-center relative">
                    <div className="flex intro-wrapper w-[100%] h-[100%] md:w-[90%] text-white items-center text-center px-5">
                        <div  className="line-scroll w-full">
                            <h3 className="mb-2">{t("vision")}</h3>
                            <p>{t("visionIntro")}</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
            <div className="mission-blk angled-box-left flex relative justify-end bg-[#0aaeae]/50 w-[100%] h-[300px] md:w-[55%]">
                <div className="flex intro-wrapper w-[100%] h-[100%] md:w-[90%] text-white items-center text-center px-5">
                    <div className="line-scroll w-full">
                        <h3 className="mb-2">{t("mission")}</h3>
                        <p>{t("missionIntro")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default VisionMission;

