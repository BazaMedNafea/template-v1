import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 bg-blue-500 text-white rounded"
    >
      {language === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
