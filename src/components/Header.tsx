import LangSwitcher from "./LangSwitcher";
import NavBar from "./NavBar";
import {useTranslation} from "react-i18next";




const Header= ()=> {

  const { t } = useTranslation();
  return (
    <header className="header relative bg-[#fff] z-2">
      <div className="relative flex w-full h-[75px] px-3 m-auto md:h-[90px] md:px-5 xl:h-[112px] lg:px-0 lg:max-w-[90%] lg:justify-between">
        <div className="site-logo p-2"><a href="/"><img src="images/arlogo.jpg" className="w-[80px] md:w-[98px] xl:w-[130px]"/></a></div>
        <LangSwitcher />
        <h2 className="slogan-title playwrite">{t("slogan")}</h2>
        <NavBar menuIcon={true} />
      </div>
      
    </header>
  )
}

export default Header;