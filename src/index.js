import "./main.css";
import mainHeadings from "./mainContent.js";
import headerContent from "./headerContent";
import toTopButton from "./toTop";
import menu from "./menu.js";

const init = (() => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  header.className = "w-full bg-white b p-5 gap-5 flex-col flex";
  main.className = "grid gap-10  ";
  footer.className = "bg-purple-300";

  header.appendChild(headerContent);

  main.appendChild(mainHeadings);

  main.appendChild(menu);

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(toTopButton);
})();
