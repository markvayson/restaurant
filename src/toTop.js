const toTopButton = () => {
  window.addEventListener("scroll", showBtn);
  const btn = document.createElement("button");
  btn.id = "toTop";
  btn.className =
    "fixed bg-slate-100 text-red-500 opacity-80 hover:opacity-100 shadow-md py-2 px-3 rounded-full  bottom-5 right-5";
  btn.textContent = "⮝";
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
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
};

export default toTopButton();
