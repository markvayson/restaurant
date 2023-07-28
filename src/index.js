import "./main.css";
import header from "./header.js";
import main from "./mainContainer.js";
import { footerContent } from "./footer.js";
import { cta } from "./data.js";

const container = (() => {
  const content = document.getElementById("content");

  content.appendChild(header);
  content.appendChild(main);
  content.appendChild(footerContent());
})();
