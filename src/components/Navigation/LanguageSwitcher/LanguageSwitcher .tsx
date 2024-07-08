import React from "react";
import { customIcon } from "../../../assets/icons/customIcons";
import { useTranslation } from "react-i18next";
import Button from "../../Button";

interface IProps {
  classes: string;
}

const LanguageSwitcher = ({ classes }: IProps) => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLanguage = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <>
      <Button intent={"outline"} onClick={toggleLanguage}>
        <div className={`flex gap-1.5 p-2  font-medium ${classes}`}>
          <span className="">
            {i18n.language === "en" ? "العربية" : "English"}
          </span>
          <span>{customIcon.languageIcon}</span>
        </div>
      </Button>
    </>
  );
};

export default LanguageSwitcher;
