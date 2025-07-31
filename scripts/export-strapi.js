import fs from "fs";
import fetch from "node-fetch";
import "dotenv/config";

const STRAPI_URL = process.env.STRAPI_URL;
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;
const LOCALES = ["en", "si-LK"];

async function exportData(locale){
    try{
        const response = await fetch(`${STRAPI_URL}/api/homepages?populate=*&locale=${locale}`, {
            headers:{
                Authorization: `bearer ${STRAPI_TOKEN}`,
            }
        });
        if(!response.ok){
            throw new Error(`HTTP error! code:${response.status}`);
        }

        const dir = "public/data";
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir, {recursive:true});
        }

        const data = await response.json();
        const filePath = `public/data/home.${locale}.json`;
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
        console.log(`Exported ${locale}-> ${filePath}`);
        
        console.log(`Fetching locale: ${locale}`);

    }catch(e){
        console.log(e);
    }
}

(async ()=>{
    for(const locale of LOCALES){
        await exportData(locale);
    }

})();