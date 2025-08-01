import { useTranslation } from 'react-i18next';

const LangSwitcher= ()=> {

    const { i18n } = useTranslation();

    const changeLanguage = (lang:string)=> {
        i18n.changeLanguage(lang);
        document.documentElement.classList.remove('lang-en', 'lang-si');
        document.body.classList.remove('lang-en', 'lang-si');
        document.documentElement.classList.add(`lang-${lang}`);
        document.body.classList.add(`lang-${lang}`);
        
    }
    return (
        <div className="lang-wrapper flex text-[12px] md:text-[14px] gap-2 absolute top-[5px] md:top-[10px] right-[10px]">
            <button className="cursor-pointer" onClick={()=> changeLanguage("en")}>English</button>
            <button className="cursor-pointer" onClick={()=> changeLanguage("si")}>සිංහල</button>
        </div>
    )
}

export default LangSwitcher;