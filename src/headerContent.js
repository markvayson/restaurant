import logo from "./logo.js";

const headerTitle = () => {
  const div = document.createElement("div");
  div.className = "flex md:w-auto justify-between items-center w-full";
  div.appendChild(logo("Short"));

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "≡";
  menuBtn.id = "burger-menu-btn";
  menuBtn.className =
    "text-3xl border md:hidden px-2 py-1 transition-opacity duration-300 rounded-md border-gray-100";
  menuBtn.addEventListener("click", showList);
  div.appendChild(menuBtn);

  return div;
};

const showList = () => {
  const target = document.getElementById("burger-menu-btn");
  const menuIcon = "≡";
  target.textContent = target.textContent === menuIcon ? "×" : menuIcon;
  const main = document.querySelector("main");

  const menuList = document.getElementById("menu-list");
  if (menuList.classList.contains("hidden")) {
    return menuList.classList.remove("hidden");
  } else {
    menuList.classList.add("hidden");
  }
};

const headerList = () => {
  const list = document.createElement("ul");
  list.id = "menu-list";
  list.className = "hidden md:grid md:grid-cols-2  p-2";
  const items = ["about", "menu"];
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    li.id = item;
    li.className = "text-xl p-2 md:z-10 md:border-none border-b";
    li.addEventListener("click", showContent);

    list.appendChild(li);
  });
  const span = document.createElement("span");
  list.appendChild(span);
  return list;
};

const showContent = (e) => {
  const aboutContainer = document.getElementById("about-container");
  const menuContainer = document.getElementById("menu-container");

  if (e.target.id === "about") {
    aboutContainer.classList.remove("hidden");
    menuContainer.classList.add("hidden");
  } else {
    aboutContainer.classList.add("hidden");
    menuContainer.classList.remove("hidden");
  }
  return showList();
};

const headerContent = () => {
  const header = document.createElement("div");
  header.className =
    "flex md:flex-row md:justify-between flex-col gap-5 w-full";
  header.appendChild(headerTitle());
  header.appendChild(headerList());
  return header;
};

export default headerContent();
