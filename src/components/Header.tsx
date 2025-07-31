import LangSwitcher from "./LangSwitcher";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";




const Header= ()=> {

  const { t } = useTranslation();
  return (
    <header className="relative">
      <div className="flex justify-between  w-full h-[75px] md:h-[90px] xl:h-[120px] max-w-[90%] m-auto relative">
        <div className="site-logo p-2"><img src="images/arlogo.jpg" className="w-[80px] md:w-[98px] xl:w-[130px]"/></div>
        <LangSwitcher />
        <h1 className="title mt-[50px]">{t("maintitle")}</h1>
        <NavBar/>
      </div>
      
    </header>
  )
}

export default Header;