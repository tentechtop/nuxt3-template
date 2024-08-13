const regionList = [
    {
        title:"Asia pacific",
        languageList: [
            {language:"zh", langEnName:"Chinese Simplified", dialect:"简体中文" ,domain:"/zh"},
/*
            {language:"zh-CN", langEnName:"Chinese Simplified", dialect:"简体中文" ,domain:"/zh-CN" },
*/


           /* {language:"zh-TW", langEnName:"Traditional Chinese", dialect:"繁體中文" ,domain:"/zh-TW"},*/

            {language:"ja", langEnName:"Japanese", dialect:"日本語" ,domain:"/ja"},


            {language:"vn", langEnName:"Vietnamese", dialect:"Tiếng Việt" ,domain:"/vn"},

            {language:"ko", langEnName:"Korean", dialect:"한국어" ,domain:"/ko"},

            {language:"fil", langEnName:"Filipino", dialect:"Pilipino" ,domain:"/fil"},

            {language:"id", langEnName:"Indonesian",dialect:"Bahasa Indonesia", domain:"/id"},
        ]
    },
    {
        title:"Europe",
        languageList: [
            {language:"en", langEnName:"English", dialect:"English"  ,domain:"/en"},
            {language:"de", langEnName:"German", dialect:"Deutsch" ,domain:"/de"},
            {language:"fr", langEnName:"French", dialect:"Français" ,domain:"/fr"},
            {language:"es", langEnName:"Spanish", dialect:"Español" ,domain:"/es"},
            {language:"tr", langEnName:"Turkish", dialect:"Turkish" ,domain:"/tr"},

            {language:"ru", langEnName:"Russian", dialect:"Русский" ,domain:"/ru"},
            {language:"sv", langEnName:"Swedish", dialect:"svenska" ,domain:"/sv"},
            {language:"it", langEnName:"Italian", dialect:"Italiano" ,domain:"/it"},

        ]
    },
    {
        title:"Middle East",
        languageList: [
            {language:"ar", langEnName:"Arabic", dialect:"العربية"  ,domain:"/ar"},
        ]
    },
    {
        title:"North America",
        languageList: [
            {language:"en-US", langEnName:"English", dialect:"English" ,domain:"/en-US"},
        ]
    },

];

const LanguageMap = new Map()
const LanguageList =  new Array()

regionList.forEach((region)=>{
    region.languageList.forEach(langItem =>{
        LanguageMap.set(langItem.language,langItem)
        LanguageList.push(langItem)
    })
})


export default {
    regionList,LanguageMap,LanguageList
}
