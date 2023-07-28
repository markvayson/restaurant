import "./main.css";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = "hello world";
  element.className = "bg-red-300";

  return element;
};
