/* eslint-disable no-unused-vars */
import { US, IR, SA } from "country-flag-icons/react/3x2";
import { useTranslation } from "react-i18next";
import i18n from "./../i18next/i18n";

export default function Navbar() {
  const { t } = useTranslation();

  const handleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };



  let logo;

  if (i18n.language === "fa") {
    logo = (
      <a href="#!" className="lg:block  p-1 cursor-pointer ">
        <svg height="26" width="99" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.744 1.41V5.42H4.732V1.41h4.012Zm1.941 11.569c.173 0 .259.086.259.259v4.503c0 .173-.086.259-.259.259H9.65c-.276 0-.475-.009-.595-.026-.087 1.208-.337 2.235-.751 3.08-.414.863-1.078 1.657-1.993 2.381-.897.725-2.157 1.484-3.779 2.278L.746 21.727c1.208-.725 2.054-1.311 2.537-1.76.483-.449.776-.889.88-1.32.12-.431.181-1.13.181-2.096V7.49h4.762v4.918c0 .173.044.311.13.414a.56.56 0 0 0 .414.156h1.035Zm8.672-.233a5.21 5.21 0 0 1-.699 2.64A5.43 5.43 0 0 1 16.77 17.3a5.12 5.12 0 0 1-2.64.699h-3.442c-.173 0-.26-.086-.26-.259v-4.503c0-.173.087-.26.26-.26h3.39a.497.497 0 0 0 .363-.155.527.527 0 0 0 .155-.388V6.767h4.762v5.979Zm.052 7.325v4.011h-8.024v-4.011h8.024ZM26.094 18a5.119 5.119 0 0 1-2.64-.699 5.43 5.43 0 0 1-1.89-1.915 5.21 5.21 0 0 1-.698-2.64V.322h4.762v12.113c0 .173.043.31.13.414.103.087.232.13.388.13h1.578c.173 0 .26.086.26.259v4.503c0 .173-.087.259-.26.259h-1.63ZM35.798.685v4.011h-8.024V.685h8.024Zm-4.763 6.082h4.763v5.979a5.21 5.21 0 0 1-.7 2.64A5.43 5.43 0 0 1 33.21 17.3a5.119 5.119 0 0 1-2.64.699h-2.846c-.173 0-.26-.086-.26-.259v-4.503c0-.173.087-.26.26-.26h2.795a.496.496 0 0 0 .362-.155.527.527 0 0 0 .155-.388V6.767Z"
            fill="#222F5D"
          />
          <path
            d="M56.737 12.979c.173 0 .26.086.26.259v4.503c0 .173-.087.259-.26.259h-.724c.034.31.051.544.051.699a5.567 5.567 0 0 1-.776 2.873 5.615 5.615 0 0 1-2.096 2.07 5.614 5.614 0 0 1-2.9.777h-6.108a6.878 6.878 0 0 1-3.545-.958 7.159 7.159 0 0 1-2.589-2.588 6.878 6.878 0 0 1-.957-3.546v-6.833h4.762v6.574c0 .639.224 1.182.673 1.63.466.467 1.018.7 1.656.7h6.186c.207 0 .38-.07.518-.207a.672.672 0 0 0 .207-.492.672.672 0 0 0-.207-.492.702.702 0 0 0-.518-.207h-5.668v-5.021h12.035ZM56.74 18c-.173 0-.259-.086-.259-.259v-4.503c0-.173.086-.26.259-.26h5.798c1.173 0 2.174-.361 3.002-1.086l2.045-1.812-2.977-1.45c-.241-.103-.431-.155-.57-.155-.31 0-.62.138-.93.414l-2.693 2.977-3.313-2.899 2.718-3.313c.552-.656 1.2-1.13 1.941-1.423a5.725 5.725 0 0 1 2.226-.466c.863 0 1.682.207 2.459.62l5.539 2.59a.597.597 0 0 0 .207.05h3.339v4.66h-3.313v.724c0 .173.043.311.13.414a.56.56 0 0 0 .413.156h3.236c.172 0 .258.086.258.259v4.503c0 .173-.086.259-.258.259H72.76c-1.018 0-1.855-.242-2.51-.725-.639-.5-1.165-1.225-1.58-2.174l-.517.518a9.264 9.264 0 0 1-2.925 1.786A9.664 9.664 0 0 1 61.89 18h-5.151Zm3.21 2.07h4.011v4.012h-4.012v-4.011Zm24.72-7.324a5.21 5.21 0 0 1-.698 2.64 5.43 5.43 0 0 1-1.89 1.915 5.12 5.12 0 0 1-2.64.699H76c-.172 0-.259-.086-.259-.259v-4.503c0-.173.087-.26.26-.26h3.39a.496.496 0 0 0 .362-.155.526.526 0 0 0 .155-.388V6.767h4.763v5.979Zm.053 7.325v4.011h-8.024v-4.011h8.024Zm8.315-7.092c.449 0 .673-.181.673-.544a.418.418 0 0 0-.155-.336c-.104-.104-.346-.285-.725-.544l-5.824-4.011 2.718-3.935 6.6 4.582c.707.552 1.242 1.138 1.605 1.76.362.62.543 1.397.543 2.329 0 1.087-.267 2.07-.802 2.95a5.62 5.62 0 0 1-2.122 2.045 6.073 6.073 0 0 1-2.925.725h-6.445v-5.021h6.859Z"
            fill="#FF755C"
          />
        </svg>
      </a>
    );
  } else if (i18n.language === "ar") {
    logo = (
      <a href="#!" className="lg:block  cursor-pointer  md:text-2xl">
        <span className="text-orange-600  font-bold">دي جي</span>{" "}
        <span className="text-slate-800  font-bold">تعز</span>
      </a>
    );
  } else {
    logo = (
      <a href="#!" className="lg:block  cursor-pointer  md:text-2xl">
        <span className="text-orange-600 font-black">Digi</span>{" "}
        <span className="text-slate-800 font-black">Tize</span>
      </a>
    );
  }

  return (
    <div className={`${i18n.language === "fa" || i18n.language === "ar" ? "rtl" : null}`}>
      <nav className="hidden md:block sticky top-0 z-10 h-14 bg-stone-50 shadow-sm md:mb-3 ">
        <div className=" container max-w-screen-xl ">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-5 px-5 xl:px-0 py-2 mb-5 flex-[80%]">
              {/* Links */}
              <ul className="w-1/2 xl:w-[52%] flex items-center font-shabnamBold">
                <li className="ml-2  xl:ml-6 2xl:ml-7 px-4 ">{logo}</li>
                <li className="ml-1 lg:ml-2 xl:ml-6 2xl:ml-7">
                  <a
                    href="#!"
                    className="p-2 block text-slate-500 md:text-xs xl:text-base cursor-pointer "
                  >
                    {t("home")}
                  </a>
                </li>
                <li className="ml-1 lg:ml-2 xl:ml-6 2xl:ml-7">
                  <a
                    href="#!"
                    className="p-2 block text-slate-500 md:text-xs xl:text-base cursor-pointer"
                  >
                    {t("cellPhone")}
                  </a>
                </li>
                <li className="ml-1 lg:ml-2 xl:ml-6 2xl:ml-7">
                  <a
                    href="#!"
                    className="p-2 block text-slate-500 md:text-xs xl:text-base cursor-pointer"
                  >
                    {t("laptop")}
                  </a>
                </li>
                <li className="ml-1 lg:ml-2 xl:ml-6 2xl:ml-7">
                  <a
                    href="#!"
                    className="p-2 block text-slate-500 md:text-xs xl:text-base cursor-pointer"
                  >
                    {t("smartWatch")}
                  </a>
                </li>
              </ul>
              {/* search bar */}
              <div className=" w-1/2  max-w-lg flex items-center bg-gray-200 rounded  py-1">
                <svg
                  className="w-6 h-6 mx-2 fill-slate-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    fillRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className=" w-full py-1  rounded  border-0 outline-0 focus:outline-none bg-transparent text-gray-600  
                placeholder-gray-400   font-shabnamLight text-xs  lg:text-sm"
                  placeholder={t("placeholder")}
                />
              </div>
            </div>
            {/* flag Icon */}
            <div className=" flex justify-end gap-x-2  items-center px-5 xl:px-0 py-2 mb-5">
              <span>
                <US
                  title="United States"
                  onClick={() => handleLanguage("en")}
                  className="w-7 cursor-pointer"
                />
              </span>
              <span>
                <IR
                  title="Iran"
                  onClick={() => handleLanguage("fa")}
                  className="w-7 cursor-pointer"
                />
              </span>
              <span>
                <SA
                  title="Saudi Arabia"
                  onClick={() => handleLanguage("ar")}
                  className="w-7 cursor-pointer"
                />
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
