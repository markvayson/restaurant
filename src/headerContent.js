import logo from "./logo.js";

const headerTitle = () => {
  const div = document.createElement("div");
  div.className = "flex justify-between items-center w-full";
  div.appendChild(logo("Short"));

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "≡";
  menuBtn.className =
    "text-3xl border px-2 py-1 transition-opacity duration-300 rounded-md border-gray-100";
  menuBtn.addEventListener("click", showMenu);
  div.appendChild(menuBtn);
  return div;
};

const showMenu = () => {
  const header = document.querySelector("header");
  const main = document.querySelector("main");
  if (header) {
    const list = header.querySelector("ul");
    if (list) {
      main.classList.remove("hidden");
      header.removeChild(list);
    } else {
      main.classList.add("hidden");
      header.appendChild(menuList());
    }
  }
};

const headerContent = () => {
  const header = document.createElement("div");
  header.className = "grid gap-5 w-full";
  header.appendChild(headerTitle());
  return header;
};

const showSubMenu = (section) => {
  const li = document.querySelector(`.${section}`);

  const liSpan = li.querySelector("span");
  liSpan.textContent = " ⦡ ";
  const isNew = li.querySelector(".new-list");
  if (isNew) {
    isNew.classList.add("opacity-0");
    liSpan.textContent = ">";
    return li.removeChild(isNew);
  }
  const showMore = {
    About: ["Who", "What", "Where"],
    Menu: ["Foods", "Beverages"],
    Contact: ["Message", "Live Chat"],
  };
  const main = document.querySelector("main");
  const newList = document.createElement("ul");
  newList.className = "new-list  pt-3 flex flex-col gap-5";
  showMore[section].forEach((item) => {
    const newItem = document.createElement("a");
    newItem.href = `#${item}`;
    newItem.textContent = item;
    newItem.className = `text-black flex justify-between transition-opacity duration-300  ml-5 border-b`;
    if (section === "About") {
      newItem.addEventListener("click", hideMenu);
    }
    const span = document.createElement("span");
    span.textContent = ">";
    newItem.appendChild(span);

    newList.appendChild(newItem);
  });
  li.appendChild(newList);
  return li;
};

const hideMenu = () => {
  const header = document.querySelector("header");
  if (header) {
    const ul = header.querySelector("ul");
    if (ul) {
      const main = document.querySelector("main");

      main.classList.remove("hidden");
      header.removeChild(ul);
    }
  }
};

const menuList = () => {
  const ul = document.createElement("ul");
  ul.className = "flex w-full  flex-col justify-around gap-2";
  const menuItems = ["About", "Menu", "Contact"];
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = `${item}  p-2 font-bold first:text-red-500 flex flex-col justify-between`;

    const btn = document.createElement("button");
    btn.textContent = item;
    btn.className = "flex border-b  tracking-widest justify-between";
    btn.addEventListener("click", () => showSubMenu(item));
    const span = document.createElement("span");
    span.textContent = ">";

    btn.appendChild(span);
    li.appendChild(btn);

    ul.appendChild(li);
  });

  return ul;
};

export default headerContent();
