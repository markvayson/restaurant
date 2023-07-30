import imgDiv from "./imgDiv";

const contents = () => {
  const content = document.createElement("div");
  content.className = "bg-red-500 grid grid-cols-2";

  content.appendChild(imgDiv());

  return content;
};

export default contents();
