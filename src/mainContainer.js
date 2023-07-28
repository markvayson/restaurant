import "./main.css";
import { about } from "./data.js";
const headings = () => {
  const headings = document.createElement("div");
  headings.className = "w-full items-center gap-1 flex md:grow flex-col";

  const textContainer = document.createElement("div");
  const welcome = document.createElement("p");
  const name = document.createElement("p");
  const span = document.createElement("span");
  const p = document.createElement("p");

  welcome.textContent = "Welcome to,";
  welcome.className = "text-2xl font-bold";
  name.textContent = "Enchanted";
  name.className = "text-4xl font-bold underline";
  span.textContent = "Eats";
  span.className = "bg-cyan-500 py-2 pr-2 rounded-lg text-white";

  name.appendChild(span);

  p.textContent = '"Where Magic Meets Gastronomy"';
  p.className = "text-lg";

  textContainer.appendChild(welcome);
  textContainer.appendChild(name);
  textContainer.appendChild(p);

  const aboutBtns = document.createElement("div");
  aboutBtns.className = "flex justify-evenly md:gap-5 whitespace-nowrap w-full";
  Object.keys(about).forEach((item) => {
    const button = document.createElement("button");
    button.className =
      "tab-button p-2 rounded-lg border border-gray-400 font-medium tracking-wider";
    button.textContent = item;
    if (button.textContent === "Who")
      button.classList.add("bg-cyan-500", "text-white");
    button.addEventListener("click", () => changeTab(item));
    aboutBtns.appendChild(button);
  });

  headings.appendChild(textContainer);
  headings.appendChild(aboutBtns);

  return headings;
};
const changeTab = (key) => {
  const filter = Object.keys(about).filter((item) => item !== key);
  const tabs = document.querySelectorAll(".tab-button");
  tabs.forEach((item) => {
    if (item.textContent === key)
      item.classList.add("bg-cyan-500", "text-white");
    else item.classList.remove("bg-cyan-500", "text-white");
  });
  const tab = about[key];
  const bg = document.querySelector(".desc-bg");
  const p = document.querySelector(".desc-p");

  bg.src = tab.bg;
  p.textContent = tab.details;
  return;
};
const aboutContainer = (key) => {
  const tab = about[key];
  const container = document.createElement("div");
  container.className =
    "grow flex relative md:flex-row md:items-start flex-col gap-5 items-center justify-evenly";
  const bg = new Image();
  bg.src = tab.bg;
  bg.className = "desc-bg object-cover h-full";
  const p = document.createElement("p");
  p.className =
    "desc-p absolute font-medium tracking-wider text-justify top-1/2 text-white bg-slate-950 bg-opacity-80 p-2 w-full";
  p.textContent = tab.details;

  container.appendChild(bg);
  container.appendChild(p);
  return container;
};

const main = () => {
  const main = document.createElement("main");
  main.className =
    "grow flex md:flex md:items-start flex-col gap-5 items-center justify-evenly";

  main.appendChild(headings());
  main.appendChild(aboutContainer("Who"));

  return main;
};

export default main();
