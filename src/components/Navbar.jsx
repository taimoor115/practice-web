import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex px-2 py-4 justify-between w-full bg-slate-500">
      <span className="font-bold text-xl lg:text-2xl">Webify Shopping</span>
      <div className="w-32  font-bold text-xl hidden lg:block space-x-4">
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
      <Link to={"/cart"} className="flex space-x-3 text-center text-lg">
        <img
          src="/src/assets/cart.svg"
          alt="cart image"
          height={30}
          width={30}
        />
        <p>Items: 0</p>
      </Link>
    </div>
  );
};

export default Navbar;
