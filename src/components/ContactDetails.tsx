import { LuPhoneCall } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const Contact=()=> {
  return (
    <div className="mt-4">
        <ul className="flex gap-2 flex-col color-white">
            <li><a  className="flex flex-row" href="#"><LuPhoneCall className="mr-2 mt-[2px]" /><span>+94-112 795 838</span></a></li>
            <li><a  className="flex flex-row" href="mailto:connect@anishkaranjeevi.org"><TfiEmail className="mr-2 mt-[2px]" /><span>connect@anishkaranjeevi.org</span></a></li>
        </ul>
    </div>
  )
}

export default Contact;