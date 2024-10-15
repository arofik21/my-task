import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <li>
      <Link
        href={href}
        className="text-black text-lg font-semibold hover:text-opacity-95 hover:cursor-pointer"
      >
        {children}
      </Link>
    </li>
  );
};

const Navbar: React.FC = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/teams", label: "Teams" },
    { href: "/aboutUs", label: "About Us" },
  ];

  return (
    <>
      <div className="flex items-center top-0 fixed w-full justify-between bg-transparent py-4 md:py-2 px-5">
        <div className="flex items-center w-1/12 text-right lg:text-center md:text-center text-2xl tracking-widest text-black">
          <Image
            src="/logo.png"
            alt="Logo"
            className="w-full ml-2"
            width={50}
            height={50}
            layout="responsive"
          />
          <span className="text-3xl font-bold ml-0">WEBDEV</span>
          <span className="text-3xl ml-0">Indo</span>
        </div>
        <div className="w-6/12 hidden md:block text-black">
          <nav>
            <ul className="flex justify-center space-x-10">
              {navItems.map((item) => (
                <NavItem key={item.href} href={item.href}>
                  {item.label}
                </NavItem>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
