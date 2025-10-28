import React, { useState } from "react";

const CategoryIcons = {
  "Web Development": (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 text-[var(--sec)] opacity-70"
    >
      <path d="M21 3C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H21ZM20 11H4V19H20V11ZM20 5H4V9H20V5ZM11 6V8H9V6H11ZM7 6V8H5V6H7Z"></path>
    </svg>
  ),
  "AI and ML": (
    <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6 text-[var(--sec)] opacity-70"
>
  <path d="M12 2C13.1 2 14 2.9 14 4C14 4.5 13.8 5 13.5 5.3L15.4 7.2C15.8 7.1 16.1 7 16.5 7C17.6 7 18.5 7.9 18.5 9C18.5 9.4 18.4 9.8 18.2 10.1L20.7 12.6C21 12.4 21.4 12.3 21.8 12.3C22.9 12.3 23.8 13.2 23.8 14.3C23.8 15.4 22.9 16.3 21.8 16.3C21.4 16.3 21 16.2 20.7 16L18.2 18.5C18.4 18.8 18.5 19.2 18.5 19.6C18.5 20.7 17.6 21.6 16.5 21.6C16.1 21.6 15.8 21.5 15.4 21.4L13.5 23.3C13.8 23.6 14 24.1 14 24.6C14 25.7 13.1 26.6 12 26.6C10.9 26.6 10 25.7 10 24.6C10 24.1 10.2 23.6 10.5 23.3L8.6 21.4C8.2 21.5 7.9 21.6 7.5 21.6C6.4 21.6 5.5 20.7 5.5 19.6C5.5 19.2 5.6 18.8 5.8 18.5L3.3 16C3 16.2 2.6 16.3 2.2 16.3C1.1 16.3 0.2 15.4 0.2 14.3C0.2 13.2 1.1 12.3 2.2 12.3C2.6 12.3 3 12.4 3.3 12.6L5.8 10.1C5.6 9.8 5.5 9.4 5.5 9C5.5 7.9 6.4 7 7.5 7C7.9 7 8.2 7.1 8.6 7.2L10.5 5.3C10.2 5 10 4.5 10 4C10 2.9 10.9 2 12 2ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9Z"></path>
</svg>
  ),
  "Data Analysis": (
   <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="currentColor"
  className="w-6 h-6 text-[var(--sec)] opacity-70"
>
  <path d="M5 3V19H21V21H3V3H5ZM20.293 6.293L21.707 7.707L16 13.414L13 10.415L8.707 14.707L7.293 13.293L13 7.586L16 10.585L20.293 6.293ZM18 2V4H22V8H20V5.414L16 9.414L13 6.414L6.707 12.707L5.293 11.293L13 3.586L16 6.586L18.586 4H16V2H18Z"></path>
</svg>
  ),
};

const SkillsList = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const skills = {
    "Web Development": [
      "Single Page Applications (SPAs)",
      "Landing pages and business websites",
      "Portfolio websites",
    ],
    "AI and ML": [
      "Chatbot development and Agentic AI",
      "Machine learning model integration",
      "Opencv and image processing",
    ],
    "Data Analysis": [
      "Data cleaning and preprocessing",
      "Data visualization using Python libraries",
      "Statistical analysis and reporting",
    ],
  };

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left pt-3 md:pt-9">
      <h3 className="text-[var(--white)] text-3xl md:text-4xl font-semibold md:mb-6">
        What am I good at?
      </h3>
      <ul className="space-y-4 mt-4 text-lg">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="w-full">
            <div
              onClick={() => toggleItem(category)}
              className="md:w-[400px] w-full bg-[#1414149c] rounded-2xl text-left hover:bg-opacity-80 transition-all border border-[var(--white-icon-tr)] cursor-pointer overflow-hidden"
            >
              <div className="flex items-center gap-3 p-4">
                {CategoryIcons[category]}
                <div className="flex items-center gap-2 flex-grow justify-between">
                  <div className="min-w-0 max-w-[200px] md:max-w-none overflow-hidden">
                    <span className="block truncate text-[var(--white)] text-lg">
                      {category}
                    </span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className={`w-6 h-6 text-[var(--white)] transform transition-transform flex-shrink-0 ${
                      openItem === category ? "rotate-180" : ""
                    }`}
                  >
                    <path d="M11.9999 13.1714L16.9497 8.22168L18.3639 9.63589L11.9999 15.9999L5.63599 9.63589L7.0502 8.22168L11.9999 13.1714Z"></path>
                  </svg>
                </div>
              </div>

              <div
                className={`transition-all duration-300 px-4 ${
                  openItem === category
                    ? "max-h-[500px] pb-4 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-2 text-[var(--white-icon)] text-sm">
                  {items.map((item, index) => (
                    <div key={index} className="flex items-center">
                      <span className="pl-1">•</span>
                      <li className="pl-3">{item}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;
