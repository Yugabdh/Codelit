import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import ProfileDropDown from "./ProfileDropDown";

const navigation = [
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [user, setUser] = useState(false);
  const router = useRouter();

  return (
    <Disclosure
      as="nav"
      className="bg-bg-dark fixed top-0 z-10 w-full drop-shadow-md"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-20">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center text-white font-semibold">
                  <Link href="/">
                    <a className=" flex items-center">
                      <>
                        <div className="inline lg:hidden h-8 w-auto">
                          <Image
                            height={32}
                            width={32}
                            src="/logo.png"
                            alt="Codelit logo"
                          />
                        </div>
                        <div className="hidden lg:inline h-8 w-auto">
                          <Image
                            height={32}
                            width={32}
                            src="/logo.png"
                            alt="Codelit logo"
                          />
                        </div>{" "}
                        <span>Codelit</span>
                      </>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link key={index} href={item.href}>
                        <a
                          className={classNames(
                            router.pathname === item.href
                              ? "bg-bg-medium text-white"
                              : "text-gray-300 hover:bg-bg-faint hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                          aria-current={router.pathname === item.href ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* TODO: Profile dropdown logic */}
                {user ? (
                  <ProfileDropDown />
                ) : (
                  <Link href="/register">
                    <a className="transition-all ease bg-primary-200 hover:bg-primary-400 hover:scale-95 text-white font-semibold py-2 px-2 md:py-3 md:px-4 rounded">
                      Register
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as={Link} href={item.href}>
                  <a
                    aria-current={router.pathname === item.href ? "page" : undefined}
                    className={classNames(
                      router.pathname === item.href
                        ? "bg-bg-medium text-white"
                        : "text-gray-300 hover:bg-bg-faint hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
