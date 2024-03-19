"use client";
import { Disclosure } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Trámites frecuentes", href: "#", current: false },
  { name: "Portal de transparencia", href: "#", current: true },
  { name: "Servicios", href: "#", current: false },
  { name: "Parking", href: "/parking", current: false },
  { name: "Noticias", href: "#", current: false },
  { name: "FAQ", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}
type Props = {};

const Navbar = (props: Props) => {
  // const googleTranslateElementInit = () => {
  //   new window.google.translate.TranslateElement(
  //     {
  //       pageLanguage: "auto",
  //       autoDisplay: false,
  //       includedLanguages: "ru,en,pl,es", // If you remove it, by default all google supported language will be included
  //       // layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
  //     },
  //     "google_translate_element"
  //   );
  // };
  // useEffect(() => {
  //   var addScript = document.createElement("script");
  //   addScript.setAttribute(
  //     "src",
  //     "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
  //   );
  //   document.body.appendChild(addScript);
  //   window.googleTranslateElementInit = googleTranslateElementInit;
  // }, []);
  return (
    <Disclosure as="header" className="bg-white ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-200 lg:px-8 mt-2">
            <div className="relative flex h-20 justify-between">
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-12 md:h-16 w-auto"
                    src="/Logo MG.svg"
                    alt="Your Company"
                  />
                  <img
                    className="h-12 md:h-16 w-auto"
                    src="/Logo Ayuntamiento.svg"
                    alt="Your Company"
                  />
                  <div id="google_translate_element" className="w-48"></div>
                </div>
              </div>
              <div className="relative z-0 flex flex-1 items-center justify-end px-2 sm:absolute sm:inset-0">
                <div className="flex flex-col items-end">
                  <div className="w-full sm:max-w-xs  pr-10 ">
                    <label htmlFor="search" className="sr-only">
                      Search
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                        <MagnifyingGlassIcon
                          className="h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                      </div>
                      <input
                        id="search"
                        name="search"
                        className="block w-full rounded-md border border-black/30 bg-brand-gray-50  py-1.5 pl-3 pr-10   text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:outline-none  sm:text-sm sm:leading-6"
                        placeholder="Buscar"
                        type="search"
                      />
                    </div>
                  </div>
                  <div className="hidden md:flex gap-5 items-center pt-2">
                    <ul className="flex items-center gap-4">
                      {navigation.map((item, key) => (
                        <li
                          className="font-sans text-base text-[#004870] after:content-['|'] after:-right-2.5 last:after:opacity-0 after:absolute relative"
                          key={key}
                        >
                          <Link href={item.href}>{item.name}</Link>
                        </li>
                      ))}
                    </ul>
                    <button type="button" className="size-[21px]">
                      <Image
                        alt="title"
                        src="/español.png"
                        className="size-[21px]  rounded-full"
                        layout="cover"
                        width={21}
                        height={21}
                      />
                    </button>
                  </div>
                </div>
              </div>
              <div className="relative z-10 flex items-center lg:hidden md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-900 hover:bg-gray-50 hover:text-gray-900",
                    "block rounded-md py-2 px-3 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
