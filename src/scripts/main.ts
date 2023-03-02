import config from "./config.js";

//Initial setup of localized text
(document.querySelector("title") as HTMLTitleElement).textContent =
  chrome.i18n.getMessage("title_tag");
(document.querySelector("#main-heading") as HTMLHeadingElement).textContent =
  config.title;
