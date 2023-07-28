import "./main.css";
import header from "./header.js";
import main from "./mainContainer.js";

const container = (() => {
  const content = document.getElementById("content");

  content.appendChild(header);

  return content;
})();
