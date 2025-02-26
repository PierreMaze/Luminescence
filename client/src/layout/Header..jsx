import { useState } from 'react';

import { Dialog, DialogPanel, PopoverGroup } from '@headlessui/react';

import {
  MdLocalBar,
  MdEventNote,
  MdOutlineContactPhone,
  MdContactSupport,
} from 'react-icons/md';
import { RiHomeSmile2Fill } from 'react-icons/ri';
import { HiBars3BottomRight } from 'react-icons/hi2';
import { GiKeyCard } from 'react-icons/gi';

import { Link } from 'react-router-dom';

import Logo from '../components/Logo';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed z-20 w-full bg-zinc-950/95">
      {/* <!--Desktop Navbar--> */}
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 mx-auto max-w-7xl lg:px-8"
      >
        <Logo />
        {/* <!--Burger container--> */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sky-100"
          >
            <span className="sr-only">Open main menu</span>
            <HiBars3BottomRight aria-hidden="true" className="w-6 h-6" />
          </button>
        </div>
        {/* <!--Links container--> */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 "
          >
            <RiHomeSmile2Fill className="w-5 h-5 mr-3 transition duration-300 ease-in-out delay-150 xl:w-6 xl:h-6 hover:text-sky-500" />
          </Link>
          <Link
            to="/bar-lounge"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600"
          >
            Bar-Lounge
          </Link>
          <Link
            to="/location"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600"
          >
            Location
          </Link>
          <Link
            to="/evenements"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600"
          >
            Événements
          </Link>
          <Link
            to="/contact"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600"
          >
            Contact
          </Link>
          <Link
            to="/a-propos"
            rel="noreferrer"
            className="text-sm font-semibold leading-6 text-gray-100 xl:text-lg hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-600"
          >
            À propos
          </Link>
        </PopoverGroup>
      </nav>
      {/* <!--Mobile Navbar--> */}
      <nav aria-label="Global" className="lg:hidden">
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          {/* <!--Modal container--> */}
          <DialogPanel className="fixed top-26 h-full z-10 w-full px-6 bg-zinc-950">
            {/* <!--Nav modal container--> */}
            <div className="flow-root mt-6 text-4xl">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-10 space-y-3 ">
                  <Link
                    to="/"
                    rel="noreferrer"
                    className="flex px-3 py-2 -mx-3 text-xl font-semibold leading-6 text-gray-100 rounded-lg hover:bg-sky-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <RiHomeSmile2Fill className="w-5 h-5 mt-1 mr-3 xl:w-6 xl:h-6 text-sky-500" />{' '}
                    Accueil
                  </Link>

                  <Link
                    to="/bar-lounge"
                    rel="noreferrer"
                    className="flex px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MdLocalBar className="w-5 h-5 mt-1 mr-3 xl:w-6 xl:h-6 text-sky-500" />{' '}
                    Bar-Lounge
                  </Link>

                  <Link
                    to="/location"
                    rel="noreferrer"
                    className="flex px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <GiKeyCard className="w-5 h-5 mt-1 mr-3 xl:w-6 xl:h-6 text-sky-500" />{' '}
                    Location
                  </Link>

                  <Link
                    to="/evenements"
                    rel="noreferrer"
                    className="flex px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MdEventNote className="w-5 h-5 mt-1 mr-3 xl:w-6 xl:h-6 text-sky-500" />{' '}
                    Événements
                  </Link>

                  <Link
                    to="/contact"
                    rel="noreferrer"
                    className="flex px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MdOutlineContactPhone className="w-5 h-5 mt-1 mr-3 xl:w-6 xl:h-6 text-sky-500" />{' '}
                    Contact
                  </Link>

                  <Link
                    to="/a-propos"
                    rel="noreferrer"
                    className="flex px-3 py-2 -mx-3 text-xl font-semibold leading-7 text-gray-100 rounded-lg hover:bg-sky-600"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MdContactSupport className="w-5 h-5 mt-1 mr-3 xl:w-6 xl:h-6 text-sky-500" />{' '}
                    À propos
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </nav>
    </header>
  );
}
