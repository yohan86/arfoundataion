import SocialMedia from "./SocialMedia";

const Footer= () => {
  return (
    <div className="footer-wrapper relative h-[150px] bg-[#006881]">
        <span className="top-border !top-0"></span>
        <div className="footer w-[90%] h-[100%] m-auto text-[#e9dddd] text-[14px]">
           <div className="flex footer-inner justify-between pt-[30px]">
                <div className="left-blk"></div>
                <div className="right-blk">
                    <div className="grid  justify-items-end">
                        <div className="scial-wrapper flex flex-row gap-1 mt-2">
                            <h4 className="font-normal uppercase text-[14px] m-0 mr-2">Follow Us:</h4>
                            <SocialMedia />
                        </div>
                        <p className="text-right mt-2">No:668, Kotte Rd,<br/> Sri Jayawardenepura Kotte 10100, Sri Lanka</p>
                    </div>
                </div>
           </div>
            <p className="text-center text-sm mt-3">
                © {new Date().getFullYear()} Anishka Ranjeewi Foundation. Together for a brighter future. All Rights Reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer;