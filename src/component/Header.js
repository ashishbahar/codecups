"use client";
import { Link } from "react-router-dom";
import { useState } from "react";
import ClientCard from "./ClientCard";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
const company = [
  {
    name: "About us",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Our Pricing",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Portfolio",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Services",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
];

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];

const services = [
  {
    name: "Services",
    items: [
      "IT Management Services",
      "Data Tracking Security",
      "Website Development",
      "CRM Solutions and Design",
      "Software Development",
      "App Development",
    ],
    links: [
      "/it-management",
      "/data-tracking",
      "/website-development",
      "/crm-Solution",
      "/software-development",
      "/app-development",
    ],
    icon: ChartPieIcon,
  },

  {
    name: "  Our Fields",
    items: [
      "Healthcare",
      "Banks",
      "Logistics",
      "Supermarkets",
      "Industries",
      "Hotels",
      "Fintech",
    ],
    links: [
      "industrial#Airport",
      "industrial#Power",
      "industrial#Public",
      "industrial#Pulp",
      "industrial#Refineries",
    ],
    icon: CursorArrowRaysIcon,
  },
  {
    name: "More",
    items: [
      "  Case Studies",
      "  Our Pricing",
      "  Overview",
      "  New Releases",
      "Solutions",
      "  FAQ",
    ],
    links: [
      "food#Beverage",
      "food#Dairy",
      "food#Food",
      "food#Beverage",
      "food#Dairy",
      "food#Food",
    ],
    icon: FingerPrintIcon,
  },
];

const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact ", href: "/contact", icon: PhoneIcon },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  const [activePopover, setActivePopover] = useState(null);

  const handlePopoverToggle = (popoverName) => {
    setActivePopover(activePopover === popoverName ? null : popoverName);
  };

  const handleLinkClick = () => {
    setActivePopover(null); // Close all popovers when a link is clicked
  };
  return (
    <header className="bg-white border-b-2 border-gray-100 fixed w-full z-50">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-8xl items-center justify-between p-2 lg:px-10 "
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">CodeCups</span>
            <img
              alt="../logo/logo (1).png"
              src="../logo/logo (1).png"
              className="h-12 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About us
          </Link>
          <Popover>
            <PopoverButton
              className="relative left-0 flex items-center gap-x-1 text-md font-semibold leading-6 text-gray-900"
              onClick={() => handlePopoverToggle("Services")}
            >
              Services
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </PopoverButton>

            <Transition
              show={activePopover === "Services"}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <PopoverPanel className="absolute left-1/2 z-10 mt-3 flex w-screen max-w-max -translate-x-1/2 px-4 header_container">
                <div className="w-full flex overflow-hidden bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="w-full grid grid-cols-3 gap-8 p-6 bg-white ">
                    {services.slice(0, 3).map((category) => (
                      <div
                        key={category.name}
                        className="group flex flex-col space-y-4 border-r-2 border-black-100 p-5 w-full"
                      >
                        <div className="flex items-center space-x-3">
                          <div className=" rounded-lg bg-gray-50 flex items-center justify-center">
                            <category.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                          </div>
                          <p className="font-semibold text-gray-900">
                            {category.name}
                          </p>
                        </div>
                        <ul className="space-y-2">
                          {category.items.map((item, index) => (
                            <li key={index}>
                              <Link
                                to={category.links[index]}
                                className="text-gray-600 hover:text-blue-600 transition-colors"
                                onClick={handleLinkClick}
                              >
                                {item}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="w-1/2">
                    <img
                      src="../header_image.webp"
                      alt="services"
                      className="h-2/3 w-2/3 m-auto"
                    />
                  </div>
                </div>
              </PopoverPanel>
            </Transition>
          </Popover>

          <Popover>
            <PopoverButton
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
              onClick={() => handlePopoverToggle("Portfolio")}
            >
              Portfolio
              <ChevronDownIcon
                aria-hidden="true"
                className="h-5 w-5 flex-none text-gray-400"
              />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-10  w-screen  overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
              show={activePopover === "Portfolio"}
            >
              <div className="p-4">
                <div className="max-w-7xl mx-auto p-8 flex.">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold">Enabling Innovation</h2>
                    <p className="text-gray-600 mb-4">
                      to steadfast success for top globally leading brands
                    </p>
                    <Link
                      to="/portfolio"
                      className="mt-8 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                    >
                      View all
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <ClientCard
                      logo="../client/6.png"
                      title="A leading digital platform to offer engaging shopping experience to users"
                    />
                    <ClientCard
                      logo="../client/3.png"
                      title="A mobile app to digitalize & expand KFC's digital footprint"
                    />
                    <ClientCard
                      logo="../client/4.png"
                      title="A transforming ERP Solution for the world's largest furniture retailer"
                    />
                    <ClientCard
                      logo="../client/5.png"
                      title="A transforming ERP Solution for the world's largest furniture retailer"
                    />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 divide-x divide-gray-900/5 bg-gray-50 text-center">
                {callsToAction.slice(1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link
            to="/career"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Career
          </Link>
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Contact us
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Get Started <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="../logo/logo (1).png"
                src="../logo/logo (1).png"
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
              <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Services
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <DisclosureButton className="w-full">
                      <div className="w-full flex overflow-hidden bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="w-full grid  p-6 bg-white ">
                          {services.slice(0, 1).map((category) => (
                            <div
                              key={category.name}
                              className="group  border-black-100 p-5"
                            >
                              <div className="">
                                {/* <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center">
                            <category.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                          </div> */}
                                <p className="font-semibold text-gray-900">
                                  {/* {category.name} */}
                                </p>
                              </div>
                              <ul className="text-left">
                                {category.items.map((item, index) => (
                                  <li key={index}>
                                    <Link
                                       to={category.links[index]}
                                      className="text-gray-600 hover:text-blue-600 transition-colors"
                                      onClick={handleLinkClick}
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
           
                <Link
                  to="/portfolio"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Portfolio
                </Link>
                <Link
                  to="/career"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Career
                </Link>
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    More
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    <DisclosureButton className="w-full">
                      <div className="w-full flex overflow-hidden bg-white text-md leading-6 shadow-lg ring-1 ring-gray-900/5">
                        <div className="w-full grid  p-6 bg-white ">
                          {services.slice(2, 3).map((category) => (
                            <div
                              key={category.name}
                              className="group  border-black-100 p-5"
                            >
                              <div className="">
                                {/* <div className="h-12 w-12 rounded-lg bg-gray-50 flex items-center justify-center">
                            <category.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                          </div> */}
                                <p className="font-semibold text-gray-900">
                                  {/* {category.name} */}
                                </p>
                              </div>
                              <ul className="text-left">
                                {category.items.map((item, index) => (
                                  <li key={index}>
                                    <Link
                                       to={category.links[index]}
                                      className="text-gray-600 hover:text-blue-600 transition-colors"
                                      onClick={handleLinkClick}
                                    >
                                      {item}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </DisclosureButton>
                  </DisclosurePanel>
                </Disclosure>
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
              </div>
              <div className="py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a> */}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
