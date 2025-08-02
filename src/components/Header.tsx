import LangSwitcher from "./LangSwitcher";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";




const Header= ()=> {

  const { t } = useTranslation();
  return (
    <header className="relative bg-white z-2">
      <div className="relative flex w-full h-[75px] px-3 m-auto md:h-[90px] xl:h-[112px] md:max-w-[90%] md:justify-between">
        <div className="site-logo p-2"><img src="images/arlogo.jpg" className="w-[80px] md:w-[98px] xl:w-[130px]"/></div>
        <LangSwitcher />
        <h2 className="slogan-title satisfy-regular">{t("slogan")}</h2>
        <NavBar/>
      </div>
      
    </header>
  )
}

export default Header;