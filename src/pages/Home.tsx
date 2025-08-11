import {useState, useEffect} from "react";
import HeroSlider from "../components/HeroSlider";
import VisionMission from "../components/VisionMission";
import type { Slider } from "../types";
import About from "../components/About";
import TheCEO from "../components/TheCEO";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";
import ServiceBox from "../components/ServiceBox";
import InfoBox from "../components/InfoBox";



  
interface Home{
  Heading: string;
  maindescription?:string;
  Homeslider:Slider[];
  TheCEOMessage:string;
  CEOVideoUrl:string;
}

const Home = () => {
  
  const  {i18n } = useTranslation();
  const [pagedetails, setPagedetails] = useState<Home | null>(null);
  //const [lang, setLang] = useState<string>("en");
 /// const [slider, setSlider] = useState<SliderItem[]>([]);

  //const API_URL = import.meta.env.VITE_API_URL;
  //const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  //const sliderprops = "[Homeslider][populate][sliderimage]=*";

  useEffect(()=> {
    const fetchData = async ()=> {
      try{
        const currentLang = i18n.language == "si"? "si-LK": "en";
        console.log(currentLang, i18n.language )
        const response = await fetch(`data/home.${currentLang}.json`);
  
        if(!response.ok){
          throw new Error(`HTTP error ! code:${response.status}`);
        }
        const result = await response.json();
        const homeData = result.data[0].attributes;
        setPagedetails(homeData);
       console.log(homeData);

        /*const sliderItems:SliderItem[] = homeData.Homeslider?.map((item:Slider)=>({
          title:item.Title,
          caption:item.description,
          url:item.sliderimage?.data?.attributes?.url ?? '',
        }));
       setSlider(sliderItems);
        console.log(sliderItems);
        setLang(i18n.language);
        */
      }catch(e:any){
        console.error("Fetch failed:", e);
      }
      
    };
    fetchData();
    
  },[i18n.language]);

  return (
    <div>
   
    <HeroSlider />
 
    {pagedetails?.maindescription && (
      <About  description={pagedetails?.maindescription || ""} />
    )}
    <VisionMission lang={i18n.language} />
    {pagedetails?.TheCEOMessage && (
      <TheCEO  key={i18n.language} message={pagedetails?.TheCEOMessage} url={pagedetails?.CEOVideoUrl}  />
    )}    
    <div className="block-wrapper flex my-15">
      <div className="inner-wrapper flex flex-col w-[95%] gap-3 mb-10 md:flex-row lg:w-[980px] xl:w-[1200px]">
        <ServiceBox bgcolor="#006881" image="./images/services/ruralImage-1.jpg" />
        <ServiceBox bgcolor="#805195" image="./images/where.jpg" />
        <InfoBox />
      </div>
    </div>
   
    <div>
      <pre>{/*JSON.stringify(pagedetails, null , 2)*/}</pre>
    </div>
      
    <Footer />
    </div>
  )
}

export default Home;