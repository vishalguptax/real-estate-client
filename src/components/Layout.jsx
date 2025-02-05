import React from "react";

function Layout() {
  return (
    <div className="flex items-center justify-between h-[50px] p-4 bg-black text-white">
      <div className="left flex gap-4 items-center gap-[50px]">
        <a href="/">Logo</a>
        <a href="/">Home</a>
        <a href="/">About</a>
      </div>
      <div className="right flex gap-4 items-center ">
        <a href="/">Login</a>
        <a href="/">Register</a>
      </div>
    </div>
  );
}

export default Layout;
