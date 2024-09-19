import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
// import { MdLightMode } from "react-icons/md";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const navigation = [
  { name: "Overview", href: "/", current: true },
  { name: "About US", href: "/CategoryAbout", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const changeIcon = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  const handleClick = () => {
    handleThemeSwitch();
    changeIcon();
  };

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-30 bg-white drop-shadow-lg dark:bg-bg_primary border-b dark:border-b-1 dark:border-[#1e293b]"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button and screen*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-text_primary dark:hover:bg-bg_primaryOld dark:hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:focus:ring-black hover:text-black">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              {/* Navbar text rander */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "dark:hover:bg-gray-700 hover:text-black dark:hover:text-white text-text_primary"
                        : "text-text_primary dark:hover:bg-gray-700 dark:hover:text-white hover:text-black",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Button notification */}
            <button
              type="button"
              className="relative rounded-full bg-white dark:bg-gray-800 p-1 text-gray-400 hover:text-black dark:hover:text-white mr-2"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="h-6 w-6" />
            </button>
            {/* Light and Night mode */}
            <button
              type="button"
              className="hover:text-black relative rounded-full dark:bg-gray-800 p-1 text-gray-400 dark:hover:text-white mr-2"
              onClick={handleClick}
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Toggle Theme</span>
              {isDarkMode ? (
                <MdDarkMode aria-hidden="true" className="h-6 w-6" />
              ) : (
                <MdLightMode aria-hidden="true" className="h-6 w-6" />
              )}
            </button>
            <a
              href="https://github.com/RML-Cambo"
              target="_blank"
              className="hover:text-black relative rounded-full dark:bg-gray-800 p-1 text-gray-400 dark:hover:text-white w-[32px] text-center"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">Light_night</span>

              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
      </div>

      {/* Screen mobile */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as={Link} // Use Link here too for mobile view
              to={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "text-text_primary dark:hover:text-white dark:hover:bg-gray-700 hover:text-black"
                  : "text-text_primary hover:text-black dark:hover:bg-gray-700 dark:hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};
