import {useState, useEffect} from "react";
import HeroSlider from "../components/HeroSlider";
import VisionMission from "../components/VisionMission";
import type { SliderItem, Slider } from "../types";
import About from "../components/About";
import TheCEO from "../components/TheCEO";


  
interface Home{
  Heading: string;
  maindescription?:string;
  Homeslider:Slider[];
  TheCEOMessage:string;
  CEOVideoUrl:string;
}

const Home = () => {

  const [pagedetails, setPagedetails] = useState<Home | null>(null);
  const [slider, setSlider] = useState<SliderItem[]>([]);

  const API_URL = import.meta.env.VITE_API_URL;
  const API_TOKEN = import.meta.env.VITE_API_TOKEN;

  const sliderprops = "[Homeslider][populate][sliderimage]=*";

  useEffect(()=> {
    const fetchData = async ()=> {
      try{
        const response = await fetch(`${API_URL}/api/homepages?populate${sliderprops}`, {
          headers: {
            Authorization : `Bearer ${API_TOKEN}`,
          },
        });
  
        if(!response.ok){
          throw new Error(`HTTP error ! code:${response.status}`);
        }
        const result = await response.json();
        const homeData = result.data[0].attributes;
        setPagedetails(homeData);
       // console.log(homeData);

        const sliderItems:SliderItem[] = homeData.Homeslider?.map((item:Slider)=>({
          title:item.Title,
          caption:item.description,
          url:item.sliderimage?.data?.attributes?.url ?? '',
        }));
        setSlider(sliderItems);
        console.log(sliderItems)

      }catch(e:any){
        console.log(e);
      }
      
    };
    fetchData();
  },[]);

  return (
    <div>

    <HeroSlider slides={slider} />
 
    {pagedetails?.maindescription && (
      <About description={pagedetails?.maindescription} />
    )}
    <VisionMission />
    {pagedetails?.TheCEOMessage && (
      <TheCEO message={pagedetails?.TheCEOMessage} url={pagedetails?.CEOVideoUrl}  />
    )}    

    <div className="h-[100px]">
      <pre>{/*JSON.stringify(pagedetails, null , 2)*/}</pre>
      </div>
    </div>
  )
}

export default Home;