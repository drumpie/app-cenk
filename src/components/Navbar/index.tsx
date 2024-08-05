// src/components/Navbar/index.tsx
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "../../assets/Logo.png";
import Links from "../Navbar/Links";
import { SelectedPage } from "../../shared/types";
import { motion } from "framer-motion";
import useMediaQuery from "../../hooks/useMediaQuery";
import LoginButton from "../../shared/LoginButton";
import SignUpButton from "../../shared/SignUpButton";
import { Link, useLocation } from "react-router-dom";

type Props = {
  isTopOfPage: boolean;
  setSelectedPage: (value: SelectedPage) => void;
  selectedPage: SelectedPage;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1062px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow ";
  const location = useLocation();
  const isOnSignUpPage = location.pathname === "/sign-up";
  return (
    <nav>
      <motion.div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 1.5 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT LOGO SIDE */}
            <Link to="/home" className="cursor-pointer">
              <img
                src={Logo}
                alt="Company Logo"
                className={isOnSignUpPage ? "w-32" : "w-40"}
              />
            </Link>

            {/* RIGHT HEADERS SIDE */}
            {isOnSignUpPage ? (
              <div className={`${flexBetween} w-full`}>
                <div className="ml-auto flex gap-8">
                  <LoginButton />
                  <SignUpButton />
                </div>
              </div>
            ) : (
              <>
                {isAboveMediumScreens ? (
                  <div className={`${flexBetween} w-full`}>
                    <div className={`${flexBetween} gap-8 text-sm`}>
                      <Links
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Links
                        page="Benefits"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Links
                        page="Our Classes"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Links
                        page="Shop"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                      <Links
                        page="Contact Us"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                      />
                    </div>
                    <div className="ml-auto flex gap-8">
                      <LoginButton />
                      <SignUpButton />
                    </div>
                  </div>
                ) : (
                  <button
                    className="rounded-full bg-secondary-500 p-2"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    <Bars3Icon className="h-6 w-6 text-black" />
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuToggled && !isOnSignUpPage && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* DROPDOWN MENU ITEMS */}
          <div className="ml-auto flex flex-col gap-5 text-2xl place-items-center">
            <div className="ml-2 flex gap-5 flex-col py-3 place-items-center h-auto w-auto">
              <LoginButton />
              <SignUpButton />
            </div>
            <Links
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Shop"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Links
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
