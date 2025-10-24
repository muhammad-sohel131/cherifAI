'use client';

import logo from "@/public/logo_full.png";
import getToken from "@/utils/getTokenFromCookie";
import verifyJWT from "@/utils/verifyJWT";
import { Menu, User2, X } from "lucide-react"; // modern icons
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logedUser, setLogedUser] = useState(null);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];


  useEffect(() => {

    const usercaller = async () => {
      const token = getToken();
      const lUser = await verifyJWT(token);
      setLogedUser(lUser);
    }
    if (getToken()) {
      usercaller();
    }

  }, [])



  console.log(logedUser);


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

            {
              logedUser ? (
                <div className="relative">
                  <button className="hidden w-[35px] h-[35px] border rounded-full border-2 border-gray-100 bg-neutral-900  text-neutral-200 hover:bg-neutral-800 md:flex items-center justify-center cursor-pointer">
                    <User2 className="h-5 w-5" />
                  </button>
                  <div className="absolute top-0 right-[50%] border border-red-900 w-fit px-3 h-fit">
                    <div style={{ zIndex: "9000000000" }} className="h-[200px]"></div>

                  </div>
                </div>



              ) : (
                <Link href="/auth/signin" className="btn">Login</Link>
              )
            }
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
                {
                  logedUser ? (
                    <div className="flex items-center gap-2">
                      <button className="w-[35px] h-[35px] border rounded-full border-2 border-gray-100 bg-neutral-900  text-neutral-200 hover:bg-neutral-800 flex items-center justify-center cursor-pointer">
                        <User2 className="h-5 w-5" />
                      </button>
                      <span>{logedUser.name}</span>
                    </div>
                  ) : (
                    <Link href="/auth/signin" className="btn">Login</Link>
                  )
                }

              </div>
            </nav>
          </Container>

        </div>
      )
      }
    </header >
  );
}
