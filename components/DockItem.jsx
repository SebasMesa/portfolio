import React from "react";

const DockItem = ({ icon, label, onClick, href }) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      onClick={onClick}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className="relative group flex flex-col items-center cursor-pointer"
    >
      <img src={icon} alt={label} className="w-[40px]" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs text-white bg-black/80 rounded opacity-0 group-hover:opacity-100 transition-opacity hidden md:block whitespace-nowrap">
        {label}
      </span>
    </Wrapper>
  );
};

export default DockItem;
