"use client";
import React from "react";
import Image from "next/image";
import blazkowskiLogo from "..//..//public/logo_blazkowski.png";
import Link from "next/link";
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const Nav = () => {
    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <section className="bg-primary text-white font-sans">
            <div className="container max-w-7xl mx-auto overflow-hidden">
                <div className="relative z-20 flex items-center justify-between px-4 py-5 bg-transparent">
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto mr-14">
                                <Link href="/">
                                    <Image alt="" src={blazkowskiLogo} className="h-auto w-40" />
                                </Link>
                            </div>
                            <div className="w-auto hidden lg:block">
                                <ul className="flex items-end mr-16">
                                    <li className="mr-9 font-medium hover:text-secondary font-sans text-xl"><Link href="/">Strona główna</Link></li>
                                    <li className="mr-9 font-medium hover:text-secondary font-sans text-xl"><Link href="/o-nas/">O nas</Link></li>
                                    <li className="mr-9 font-medium hover:text-secondary font-sans text-xl"><Link href="/uslugi/">Usługi</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="w-auto hidden lg:block">
                                <div className="inline-block">
                                    <Link className="relative group inline-block py-4 px-7 font-semibold text-white hover:text-black bg-secondary border-primary border transition duration-300 overflow-hidden" href="/kontakt">
                                        <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                        <span className="relative">Skontaktuj się</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-auto lg:hidden">
                                <button className="" type="button" onClick={openModal}>
                                    <svg className="navbar-burger text-black" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                                        <path d="M37 32H19M37 24H19" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
                    <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-50" onClose={closeModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-black bg-opacity-25" />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex min-h-full items-center justify-center p-4 text-center">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="ease-out duration-300"
                                        enterFrom="opacity-0 scale-95"
                                        enterTo="opacity-100 scale-100"
                                        leave="ease-in duration-200"
                                        leaveFrom="opacity-100 scale-100"
                                        leaveTo="opacity-0 scale-95"
                                    >
                                        <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                            <nav className="relative z-10 px-9 pt-8 bg-white h-full overflow-y-auto">
                                                <div className="flex flex-wrap justify-between h-full">
                                                    <div className="w-full">
                                                        <div className="flex items-center justify-between -m-2">
                                                            <div className="w-auto p-2">
                                                                <Link className="inline-block focus:outline-none" href="/">
                                                                    <Image alt="" src={blazkowskiLogo} className="h-auto w-56" />
                                                                </Link>
                                                            </div>
                                                            <div className="w-auto p-2">
                                                                <button
                                                                    type="button"
                                                                    className="inline-flex bg-gray-50 rounded-full p-4 justify-center underline underline-offset-8 focus:outline-none text-sm"
                                                                    onClick={closeModal}
                                                                >
                                                                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fillRule="evenodd" clip-rule="evenodd"></path></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-col justify-center py-16 w-full text-2xl">
                                                        <ul>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/">Strona główna</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/o-nas/">O nas</Link></li>
                                                            <li className="mb-12"><Link className="font-medium hover:text-secondary" onClick={closeModal} href="/uslugi/">Usługi</Link></li>
                                                        </ul>
                                                    </div>
                                                    <div className="flex flex-col justify-end w-full pb-8">
                                                        <div className="flex flex-wrap">
                                                            <div className="w-full">
                                                                <div className="block">
                                                                    <Link className="relative group inline-block py-4 px-7 font-semibold text-white hover:text-black bg-black border-black border transition duration-300 overflow-hidden" onClick={closeModal} href="/kontakt/">
                                                                        <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                                                                        <span className="relative">Skontaktuj się</span>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </nav>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>
            </div>
        </section>

    );
};

export default Nav;
