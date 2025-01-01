import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useDarkMode } from "../../contexts/DarkModeContext"; // Import the hook

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  toggleLanguage: () => void;
}

const SideMenu = ({ isOpen, onClose, toggleLanguage }: SideMenuProps) => {
  const { t, i18n } = useTranslation("common");
  const { isDarkMode, toggleDarkMode } = useDarkMode(); // Use the dark mode context

  return (
    <div
      className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen
          ? "translate-x-0"
          : i18n.language === "ar"
          ? "translate-x-full"
          : "-translate-x-full"
      }`}
    >
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0" onClick={onClose}></div>}

      {/* Side Menu */}
      <div
        className={`fixed inset-y-0 ${
          i18n.language === "ar" ? "right-0" : "left-0"
        } w-64 bg-white dark:bg-gray-800 flex flex-col`}
      >
        {/* Language Switcher and Close Button */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
          {/* Language Switcher (AR | EN) */}
          <div
            className={`flex ${
              i18n.language === "ar" ? "space-x-reverse" : ""
            } space-x-2`}
          >
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded ${
                i18n.language === "en"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
              }`}
            >
              EN
            </button>
            <button
              onClick={toggleLanguage}
              className={`px-2 py-1 rounded ${
                i18n.language === "ar"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-white"
              }`}
            >
              AR
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-gray-700 dark:text-white hover:text-gray-900"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <label className="flex items-center cursor-pointer justify-between">
            {/* Toggle Label */}
            <div className="text-gray-700 dark:text-white">{t("darkMode")}</div>

            {/* Toggle Switch */}
            <div className="relative">
              {/* Toggle Input */}
              <input
                type="checkbox"
                className="sr-only"
                checked={isDarkMode}
                onChange={toggleDarkMode}
              />
              {/* Toggle Track */}
              <div
                className={`w-10 h-6 rounded-full shadow-inner transition-colors ${
                  isDarkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              ></div>
              {/* Toggle Thumb */}
              <div
                className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform ${
                  isDarkMode ? "translate-x-4" : "translate-x-0"
                }`}
                style={{ top: "0", left: "-2px" }}
              ></div>
            </div>
          </label>
        </div>

        {/* Scrollable Menu Items */}
        <div className="flex-grow overflow-y-auto">
          <ul className="space-y-2 p-4">
            <li>
              <Link
                to="/"
                className="block p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                {t("home")}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={onClose}
              >
                {t("about")}
              </Link>
            </li>
            {/* Add more menu items here */}
            {Array.from({ length: 20 }).map((_, index) => (
              <li key={index}>
                <Link
                  to={`/item-${index}`}
                  className="block p-2 text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  onClick={onClose}
                >
                  {t("item")} {index + 1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
