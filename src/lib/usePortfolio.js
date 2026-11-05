import { useTranslation } from "react-i18next";
import data from "../constants/data";

export default function usePortfolio() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage === "en" ? "en" : "es";
  return { ...data[lang], lang, i18n };
}
