'use client';

import logo from "@/public/logo_full.png";
import { Menu, X } from "lucide-react"; // modern icons
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Container from "./Container";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full shadow-sm fixed top-0 left-0 z-50 bg overflow-hidden myborderBottom bg color">

      <Container>
        <div className="h-16 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="w-[107px] h-full">
            <Image className="" src={logo} alt="logo" width={1000} height={1000} />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className=" transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <button className="btn">Login</button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text transition cursor-pointer"
          >
            {mobileOpen ? <X className="duration-400 hover:rotate-180" size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </Container>




      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg shadow-md w-full h-screen">
          <Container>
            <nav className="flex flex-col space-y-2 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="transition-colors duration-200 py-2"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3">
                <button className="btn">Login</button>
              </div>
            </nav>
          </Container>

        </div>
      )}
    </header>
  );
}
