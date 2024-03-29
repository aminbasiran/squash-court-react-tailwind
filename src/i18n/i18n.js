import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import global_en from "../resources/en/global.json"
import global_my from "../resources/my/global.json"
// import global_es from "../resources/es/global.json"

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
        resources : {
            en : {
                global : global_en
            },
            // es : {
            //     global : global_es
            // },
            my : {
                global : global_my
            }

        },
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
});

export default i18n;