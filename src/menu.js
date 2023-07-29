const menu = () => {
  const text = "≡";
  const menuItems = ["Delivery", "Bar", "Contacts"];
  const div = document.createElement("div");
  div.className = "";
  const ul = document.createElement("ul");
  ul.className =
    "menu-list hidden absolute text-xl w-full h-screen  top-20 right-0 flex flex-col gap-10 ";
  const button = document.createElement("button");
  button.textContent = text;
  button.className =
    "relative text-center transition-opacity duration-300 z-10 w-12 h-12 text-4xl border border-gray-200 py-1 px-2 rounded-md";
  button.addEventListener("click", () => showMenu(button));
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.className = "border-b py-2 w-[90%]  place-self-center";

    const span = document.createElement("span");
    span.textContent = "⦠";

    const btn = document.createElement("button");
    btn.className = "w-full flex justify-between";
    btn.textContent = item;

    btn.appendChild(span);
    li.appendChild(btn);
    ul.appendChild(li);
  });

  div.appendChild(button);
  div.appendChild(ul);
  return div;
};

const showMenu = (button) => {
  const menuList = document.querySelector(".menu-list");

  button.classList.add("opacity-0");
  if (menuList.classList.contains("hidden")) {
    menuList.classList.remove("hidden");
    setTimeout(() => {
      menuList.classList.remove("opacity-0");
      button.textContent = "×";
      button.classList.remove("opacity-0");
    }, 150);
  } else {
    menuList.classList.add("opacity-0");
    setTimeout(() => {
      menuList.classList.add("hidden");
      button.textContent = "≡";
      button.classList.remove("opacity-0");
    }, 150);
  }
};

export default menu();
