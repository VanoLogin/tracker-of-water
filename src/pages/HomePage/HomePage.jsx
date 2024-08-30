import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../../components/LanguageSwitcher/LanguageSwitcher";
// import styles from "./style.module.scss";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <LanguageSwitcher />
      {t("pages.registration.signUpTitle")}
    </div>
  );
}
