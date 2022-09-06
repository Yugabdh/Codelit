import { Fragment } from "react";
import Image from "next/image";
import { Menu, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import { useFirebase } from "react-redux-firebase";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileDropDown = () => {
  const firebase = useFirebase();
  const signOut = async () => {
    const auth = firebase.auth();
    console.log(auth);
    auth.signOut();
  };

  return (
    <Menu as="div" className="ml-3 relative">
      <div>
        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <Image
            height={32}
            width={32}
            className="h-8 w-8 rounded-full"
            src="/user.png"
            alt="profile photo"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-bg-medium ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="#"
                className={classNames(
                  active ? "bg-bg-faint" : "",
                  "block px-4 py-2 text-sm text-white"
                )}
              >
                Your Profile
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                href="#"
                className={classNames(
                  active ? "bg-bg-faint" : "",
                  "block px-4 py-2 text-sm text-white w-full text-left"
                )}
                onClick={() => signOut()}
              >
                Sign out
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default ProfileDropDown;
