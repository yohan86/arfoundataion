import {useState, useEffect} from "react";
import HeroSlider from "../components/HeroSlider";
import VisionMission from "../components/VisionMission";
import type { SliderItem, Slider } from "../types";
import About from "../components/About";
import TheCEO from "../components/TheCEO";
import { useTranslation } from "react-i18next";
import Footer from "../components/Footer";



  
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
  const [lang, setLang] = useState<string>("en");
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

        const sliderItems:SliderItem[] = homeData.Homeslider?.map((item:Slider)=>({
          title:item.Title,
          caption:item.description,
          url:item.sliderimage?.data?.attributes?.url ?? '',
        }));
       // setSlider(sliderItems);
        console.log(sliderItems)
        setLang(i18n.language);

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

    <div className="h-[100px]">
      <pre>{/*JSON.stringify(pagedetails, null , 2)*/}</pre>
    </div>
      
    <Footer />
    </div>
  )
}

export default Home;