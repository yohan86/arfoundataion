import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialMedia = ()=> {
  return (
    <div>
        <ul className="flex flex-row gap-2 text-[#fff] !text-[20px]">
            <li><a href="http://www.facebook.com" target="_blank" title="facebook"><FaFacebook className="hover:text-[#f9849f]" /></a></li>
            <li><a href="https://x.com/" target="_blank" title="Twitter"><FaSquareXTwitter className="hover:text-[#f9849f]" /></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" title="Instagram"><FaInstagramSquare className="hover:text-[#f9849f]" /></a></li>
        </ul>
    </div>
  )
}

export default SocialMedia