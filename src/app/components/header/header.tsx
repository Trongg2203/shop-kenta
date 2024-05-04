"use client";
import MenuOutlined from "@ant-design/icons/lib/icons/MenuOutlined";
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import ShoppingCartOutlined from "@ant-design/icons/lib/icons/ShoppingCartOutlined";
import UserDeleteOutlined from "@ant-design/icons/lib/icons/UserDeleteOutlined";
import { transform } from "next/dist/build/swc";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  // response screen header
  const [isRespScreeen, setIsRespScreen] = useState(false);
  //check isToggle
  const [menuOpen, setMenuOpen] = useState(false);

  //check screen and Resizeescreen
  const checkScreenSize = () => {
    const isScreen = window.innerWidth >= 300 && window.innerWidth < 1204;
    setIsRespScreen(isScreen);
  };

  // update state by useEffect
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  //handle toggle
  const handleToggle = () => {
    setMenuOpen((toggle) => !toggle);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <div className="flex justify-between items-center mt-7">
      <h1 className="text-3xl text-[#26a6df] font-medium"><Link href={'/'}>D.Trong.Vn</Link></h1>

      {isRespScreeen && (
        <button onClick={handleToggle} className="text-2xl md:hidden ">
          <MenuOutlined  />
        </button>
      )}

      {menuOpen && isRespScreeen && (
        <div
          className="fixed top-0 right-0 z-50 w-[50%] h-full bg-white shadow-md  "
          style={{ zIndex: 50 }}
        >
          <button
            onClick={closeMenu}
            className="text-xl absolute top-4 right-4"
          >
            ✕
          </button>

          <ul className="p-4">
            <li className="mb-4 text-2xl">
              <Link href="/quan-dai" onClick={closeMenu}>
                Quần dài
              </Link>
            </li>
            <li className="mb-4 text-2xl">
              <Link href="/vi" onClick={closeMenu}>
                Ví
              </Link>
            </li>
            <li className="text-2xl">
              <Link href="/" onClick={closeMenu}>
                <UserDeleteOutlined />
              </Link>
            </li>
          </ul>
        </div>
      )}

      
      <ul className="hidden md:inline-flex space-x-4">
        <li className="text-2xl">
          <Link href="/">
            <UserDeleteOutlined />
          </Link>
        </li>
        <li className="text-2xl">
          <Link href="/">
            <SearchOutlined />
          </Link>
        </li>
        <li className="text-2xl">
          <Link href="/">
            <ShoppingCartOutlined />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
