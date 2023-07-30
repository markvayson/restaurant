import "./main.css";
import mainHeadings from "./mainContent.js";
import contents from "./contents";
import headerContent from "./headerContent";

const fromTheTopButton = () => {
  const btn = document.createElement("button");
  btn.id = "toTop";
  btn.className =
    "fixed bg-slate-100 shadow-md p-3 rounded-full  bottom-5 right-5";
  btn.textContent = "UP";
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return btn;
};

const showBtn = () => {
  const header = document.querySelector("header");
  const btn = document.getElementById("toTop");
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    btn.classList.remove("hidden");
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
    btn.classList.add("hidden");
  }
};

const init = (() => {
  const content = document.getElementById("content");
  const header = document.createElement("header");
  const main = document.createElement("main");
  const footer = document.createElement("footer");

  header.className = "w-full shadow-md bg-white b p-5 gap-5 flex-col flex";
  main.className = "grid gap-10 auto-rows-fr ";
  footer.className = "bg-purple-300";

  header.appendChild(headerContent);

  main.appendChild(mainHeadings());
  main.appendChild(contents("Who", false));
  main.appendChild(contents("What", true));
  main.appendChild(contents("Where", false));

  content.appendChild(fromTheTopButton());
  content.appendChild(header);
  content.appendChild(main);
  window.addEventListener("scroll", showBtn);
})();
