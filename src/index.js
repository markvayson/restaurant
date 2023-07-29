import "./main.css";
import menu from "./menu";
import logo from "./logo.js";
import { imgDiv, mainHeadings } from "./mainContent.js";
console.log("🚀 ~ file: index.js:5 ~ mainHeadings:", mainHeadings());
const init = (() => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  header.className = "flex justify-between items-center";
  main.className = "grid auto-rows-fr place-items-center";
  footer.className = "bg-purple-300";

  header.appendChild(logo("Short"));
  header.appendChild(menu);

  main.appendChild(imgDiv());
  main.appendChild(mainHeadings());

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footer);
})();
