import LangSwitcher from "./LangSwitcher";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";




const Header= ()=> {

  const { t } = useTranslation();
  return (
    <header className="relative">
      <div className="flex md:justify-between  w-full h-[75px] md:h-[90px] xl:h-[120px] max-w-[90%] m-auto relative">
        <div className="site-logo p-2"><img src="images/arlogo.jpg" className="w-[80px] md:w-[98px] xl:w-[130px]"/></div>
        <LangSwitcher />
        <h2 className="slogan-title satisfy-regular">{t("slogan")}</h2>
        <NavBar/>
      </div>
      
    </header>
  )
}

export default Header;