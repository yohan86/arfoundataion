export interface Slider{
    Title:string;
    description:string;
    sliderimage: {
      data:{
        attributes:{
          url:string;
        }
      }
    }
  }
  export interface SliderItem {
    title:string;
    caption:string;
    url:string;
  }

  export interface CEOmessage{
    message:string;
    url:string;
  }