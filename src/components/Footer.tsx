import Contacts from "./Contacts";
import SocialMedia from "./SocialMedia";

const Footer= () => {
  return (
    <div className="footer-wrapper relative min-h-[150px] bg-[#006881]">
        <span className="top-border !top-0"></span>
        <div className="footer w-[90%] h-[100%] m-auto text-[#ede7e7] text-[12px] md:text-[14px]">
           <div className="flex flex-col md:flex-row footer-inner justify-between pt-[30px]">
                <div className="left-blk">
                    <Contacts />
                </div>
                <div className="right-blk">
                    <div className="grid  md:justify-items-end">
                        <div className="scial-wrapper flex flex-col md:flex-row gap-1 my-3 md:my-2">
                            <h4 className="font-normal uppercase text-[14px] m-0 mr-2">Follow Us:</h4>
                            <SocialMedia />
                        </div>
                        <p className="md:text-right mt-2">No:668, Kotte Rd,<br/> Sri Jayawardenepura Kotte 10100, Sri Lanka</p>
                    </div>
                </div>
           </div>
            <p className="text-center text-[12px] py-5">
                © {new Date().getFullYear()} Anishka Ranjeewi Foundation. Together for a brighter future. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer;