const logo = (mode) => {
  const p = document.createElement("p");
  const span = document.createElement("span");
  p.className = "font-bold text-3xl";
  p.textContent = mode === "Short" ? "E" : "Enchanted";
  span.textContent = mode === "Short" ? "E" : "Eats";
  span.className =
    "bg-cyan-500 py-2 pr-2 text-white rounded-br-lg rounded-tl-lg";

  p.appendChild(span);
  return p;
};

export default logo;
