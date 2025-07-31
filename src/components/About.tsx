import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import type { AboutInfo } from "../types";
import ReactMarkdown from "react-markdown";
import { useRef, useLayoutEffect } from "react";

const About: React.FC<AboutInfo> = ({ description }) => {
    
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const aboutRef = useRef<HTMLDivElement>(null);
  const splitRef = useRef<any>(null);

  // Revert old SplitText *before* React updates DOM
  useLayoutEffect(() => {
    if (splitRef.current) {
      splitRef.current.revert();
      splitRef.current = null;
    }
  }, [description]);

  useGSAP(() => {
        if (!aboutRef.current) return;
        const ctx = gsap.context(() => {
          splitRef.current = new SplitText(".animate-text", { type: "lines" });

          const about = gsap.timeline({
            scrollTrigger: {
              trigger: ".about-blk",
              start: isMobile ? "top 50%" : "top 65%",
              toggleActions: "play none none none",
            },
          });

          about.from(splitRef.current.lines, {
            opacity: 0,
            y: 100,
            duration: 1,
            ease: "power2.out",
            stagger: 0.1,
          });

          about.from(".bg-circle", {
            opacity: 0,
            x: 100,
            duration: 1,
            ease: "power2.out",
          });


        }, aboutRef);
        return () => ctx.revert();

  }, [description, isMobile]);

  return (
    <div ref={aboutRef} className="block-wrapper flex mt-10 md:mb-20 lg:my-20 bg-[#3bb570]">
      <div className="inner-wrapper w-[90%] md:w-[90%] py-12">
        <div className="about-blk flex flex-col lg:items-stretch gap-4 lg:gap-8 lg:flex-row">
          <div className="title-blk content-center w-[100%] lg:w-[40%] xl:w-[30%]">
            <div className="animate-text" key={description}>
              <h2 className="text-center lg:text-right text-[#303335] !text-[28px] md:!text-[32px]">
                Anishka Ranjeewi Foundation
              </h2>
            </div>
          </div>
          <div className="middle-blk relative overflow-hidden w-[100%] h-[75px] border-t-4 border-t-[#57d1d1] lg:h-auto lg:w-[135px] lg:border-r-4 lg:border-t-0 lg:border-r-[#57d1d1] lg:mx-[12px] lg:min-h-full">
            <span className="bg-circle"></span>
          </div>
          <div className="mainintro-blk animate-text text-center w-[100%] lg:py-[12px] text-[#fff] lg:w-[50%]" key={description}>
            <ReactMarkdown
              children={description}
              components={{
                a: ({ node, ...props }) => (
                  <a {...props} target="_blank" rel="noopener noreferrer" />
                ),
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
