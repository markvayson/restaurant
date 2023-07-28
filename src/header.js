import "./main.css";

const logo = () => {
  const div = document.createElement("div");
  div.className = "grow md:grow-0 whitespace-nowrap underline";

  const p = document.createElement("p");
  const span = document.createElement("span");

  p.className = "text-2xl font-bold";
  span.className = "bg-cyan-500 text-white py-1 pr-1 rounded-lg";

  p.textContent = "E";
  span.textContent = "E";

  p.appendChild(span);
  div.appendChild(p);

  return div;
};

const menuContainer = () => {
  const menuItems = ["Delivery", "Bar", "Contacts"];

  const menu = document.createElement("div");
  menu.className = "md:grow flex items-center justify-center";

  const ul = document.createElement("ul");
  ul.className =
    "menu-container divide-y divide-y-reverse transition-all duration-300 absolute md:flex-row md:static md:bg-inherit flex flex-col gap-2 rounded-lg items-end  p-2 top-1 right-1 md:flex justify-evenly grow";

  const menuLi = document.createElement("li");
  menuLi.className =
    "w-10 h-12 bg-cyan-500 text-cyan-50 text-center rounded-md";
  const menuBtn = document.createElement("button");
  menuBtn.addEventListener("click", showMenu);
  menuBtn.className = "md:hidden  font-bold text-2xl  p-2 rounded-xl";
  menuBtn.textContent = "☰";

  menuLi.appendChild(menuBtn);
  ul.appendChild(menuLi);

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "menu-list-item  text-end hidden tracking-widest";
    li.textContent = item;
    ul.appendChild(li);
  });

  menu.appendChild(ul);

  const btns = ["github", "facebook"];
  const btnDiv = document.createElement("div");
  btnDiv.className = "hidden md:flex justify-evenly gap-2";
  btns.forEach((btn) => {
    const button = document.createElement("button");
    button.className = "border border-gray-400 rounded-full p-2";
    button.textContent = btn;
    btnDiv.appendChild(button);
  });

  menu.appendChild(btnDiv);

  return menu;
};

const showMenu = (e) => {
  const menuItems = document.querySelectorAll(".menu-list-item");
  const menu = document.querySelector(".menu-container");

  if (e.target.textContent !== "×") {
    menu.classList.add("bg-cyan-500", "w-32", "text-white");
    e.target.textContent = "×";
  } else {
    menu.classList.remove("bg-cyan-500", "w-32", "text-white");
    e.target.textContent = "☰";
  }

  console.log(e.target.textContent);

  menuItems.forEach((item) => {
    if (item.classList.contains("hidden"))
      return item.classList.remove("hidden");
    else return item.classList.add("hidden");
  });
};
const headerContent = () => {
  const header = document.createElement("header");
  header.classList.add("flex");

  header.appendChild(logo());
  header.appendChild(menuContainer());

  return header;
};
export default headerContent();
