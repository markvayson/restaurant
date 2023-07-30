import "./main.css";
import menu from "./menu";
import logo from "./logo.js";
import mainHeadings from "./mainContent.js";
import contents from "./contents";

console.log("🚀 ~ file: index.js:5 ~ mainHeadings:", mainHeadings());
const init = (() => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  header.className = "p-5 flex justify-between items-center";
  main.className = "grid h-full  p-5 auto-rows-fr ";
  footer.className = "bg-purple-300";

  header.appendChild(logo("Short"));
  header.appendChild(menu);

  main.appendChild(mainHeadings());
  main.appendChild(contents);

  content.appendChild(header);
  content.appendChild(main);
})();
