import { useState, React } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import {
    BiHomeAlt2,
    BiSearch,
    BiReceipt,
    BiCard,
    BiStore,
    BiChart,
    BiCheese,
    BiUserCircle,
    BiBell
} from "react-icons/bi";

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div auth={auth} className="min-h-screen flex flex-row   bg-gray-100">
            <div>
                <div className="hidden  sm:flex sm:items-center sm:ml-6 mx-8 my-4 absolute right-2">
                    <div className="ml-3 relative">
                        <Dropdown >
                            <div className="flex flex-row gap-2">
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-[#FBEAC2] hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <BiBell />
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-[#FBEAC2] hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <BiUserCircle />
                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            </div>
                            <Dropdown.Content>
                                <Dropdown.Link href={route("profile.edit")}>
                                    Profile
                                </Dropdown.Link>
                                <Dropdown.Link
                                    href={route("logout")}
                                    method="post"
                                    as="button"
                                >
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>

                <div className="-mr-2 flex items-center md:hidden sm:hidden">
                    <button
                        onClick={() =>
                            setShowingNavigationDropdown(
                                (previousState) => !previousState
                            )
                        }
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                className={
                                    !showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                className={
                                    showingNavigationDropdown
                                        ? "inline-flex"
                                        : "hidden"
                                }
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? "block" : "hidden") +
                        " lg:hidden"
                    }
                >
                    <div className="pt-2 pb-3 flex flex-col ">
                        <div className="shrink-0 w-8 mb-8 mt-4 items-center">
                            <a
                                href="https://fazendasantaluiza.agr.br/"
                                className="  "
                            >
                                <ApplicationLogo />
                            </a>
                        </div>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            Dashboard
                        </ResponsiveNavLink>
                        <ResponsiveNavLink
                            href={route("dashboard")}
                            active={route().current("dashboard")}
                        >
                            weekly report
                        </ResponsiveNavLink>
                    </div>
                </div>

                <nav className="bg-[#FBEAC2]  border-b h-full flex flex-col border-gray-100">
                    <div className=" mx-auto flex flex-col  px-4">
                        <div className="flex flex-col justify-between  ">
                            <div className="flex flex-col ">
                                <div className="shrink-0 w-[90%] mb-8 mt-4 items-center">
                                    <a
                                        href="https://fazendasantaluiza.agr.br/"
                                        className="  "
                                    >
                                        <ApplicationLogo />
                                    </a>
                                </div>

                                <div className="space-y-4 sm:flex flex-col">
                                    <NavLink
                                        href="dashboard"
                                        active={route().current("posts.index")}
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiHomeAlt2 className="m-2" />
                                        dashboard
                                    </NavLink>
                                    <NavLink
                                        href="weeklyReport"
                                        active={route().current("posts.index")}
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiReceipt className="m-2" />
                                        Weekly Report
                                    </NavLink>

                                    <NavLink
                                        href={route("posts.index")}
                                        active={route().current("posts.index")}
                                        className="hidden  sm:flex"
                                    >
                                        <BiCard className="m-2" />
                                        Posts
                                    </NavLink>

                                    <NavLink
                                        href="tableReport"
                                        active={route().current("posts.index")}
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiStore className="m-2" />
                                        Ceasa
                                    </NavLink>
                                    <NavLink
                                        href="lineChart"
                                        active={route().current("posts.index")}
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiCheese className="m-2" />
                                        Gráfico Linha
                                    </NavLink>

                                    <NavLink
                                        href="barChart"
                                        active={route().current("posts.index")}
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiChart className="m-2" />
                                        Gráfico Barra
                                    </NavLink>

                                    <NavLink
                                        href="inicialReport"
                                        active={route().current("posts.index")}
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiSearch className="m-2" />
                                        Pesquisa Inicial
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                {header && (
                    <header className="bg-white shadow">
                        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                            {header}
                        </div>
                    </header>
                )}
            </div>
            <main className="  ">{children}</main>
        </div>
    );
}
