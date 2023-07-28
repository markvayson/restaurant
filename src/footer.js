import "./main.css";
import { cta } from "./data.js";

export const social = (name) => {
  const link = document.createElement("a");
  link.href = cta[name].url;
  link.target = "_blank";
  link.className = "border border-gray-400 rounded-full p-2";

  const icon = new Image();
  icon.src = cta[name].icon;
  icon.className = "w-8 h-8";
  link.appendChild(icon);
  return link;
};

export const footerContent = () => {
  const footer = document.createElement("footer");
  footer.className = "flex justify-between";
  const messageIcon = new Image();
  const callIcon = new Image();
  messageIcon.src = cta.message;
  callIcon.src = cta.call;
  callIcon.className = "w-8 h-8";
  messageIcon.className = "w-8 h-8";

  const ctaDiv = document.createElement("div");
  ctaDiv.className =
    "flex gap-2 md:opacity-50 md:hover:opacity-100 md:fixed md:bottom-5 md:right-5";

  const message = document.createElement("button");
  message.className = "border border-gray-400 rounded-full p-2";
  message.appendChild(messageIcon);
  ctaDiv.appendChild(message);

  const call = document.createElement("button");
  call.className = "border bg-cyan-500 border-cyan-400 rounded-full p-2";
  call.appendChild(callIcon);
  ctaDiv.appendChild(call);

  const socialDiv = document.createElement("div");
  socialDiv.className = "flex md:hidden justify-center gap-2";

  const facebook = social("facebook");
  const github = social("github");

  socialDiv.appendChild(facebook);
  socialDiv.appendChild(github);

  footer.appendChild(ctaDiv);
  footer.appendChild(socialDiv);
  return footer;
};
