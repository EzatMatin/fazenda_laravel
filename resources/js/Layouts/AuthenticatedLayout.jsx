import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import Dropdown from "@/Components/Dropdown";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import { BiHomeAlt2, BiSearch, BiReceipt, BiCard, BiStore, BiChart, BiCheese } from "react-icons/bi";


export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div auth={auth} className="min-h-screen flex flex-row   bg-gray-100">
            <div>
                <nav className="bg-[#FBEAC2]  border-b h-full flex flex-col border-gray-100">
                    <div className=" mx-auto flex flex-col  px-4">
                        <div className="flex flex-col justify-between  ">
                            <div className="flex flex-col ">
                                <div className="shrink-0 w-[90%] mb-8 mt-4 items-center">
                                    <a href="https://fazendasantaluiza.agr.br/" className="  ">
                                        <ApplicationLogo />
                                    </a>
                                </div>

                                <div className="space-y-4 sm:flex flex-col">
                                    <NavLink
                                        href="dashboard"
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                    <BiHomeAlt2 className="m-2" />
                                         dashboard
                                    </NavLink>
                                    <NavLink
                                        href="weeklyReport"
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
                                        <BiCard className="m-2"/>
                                        Posts
                                    </NavLink>

                                    <NavLink
                                        href="tableReport"
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiStore className="m-2" />
                                        Ceasa
                                    </NavLink>
                                    <NavLink
                                        href="lineChart"
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiCheese className="m-2"/>
                                        Gráfico Linha
                                    </NavLink>

                                    <NavLink
                                        href="barChart"
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiChart className="m-2" />
                                        Gráfico Barra
                                    </NavLink>

                                    <NavLink
                                        href="inicialReport"
                                        method="get"
                                        className="hidden  sm:flex"
                                    >
                                        <BiSearch className="m-2" />
                                        Pesquisa Inicial
                                    </NavLink>
                                </div>
                            </div>
<<<<<<< HEAD

                            <div className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <NavLink

                                    href="dashboard"
                                    method="get"
                                >
                                    dashboard 
                                </NavLink> 
                                <NavLink
                                    href="weeklyReport"
                                    method="get"
                                >
                                    Weekly Report
                                </NavLink>

                                <NavLink href={route('posts.index')} active={route().current('posts.index')}>
                                    Posts
                                </NavLink>
                                
                                <NavLink

                                    href="tableReport"
                                    method="get"
                                >
                                    Ceasa
                                
                                <Link href="lineChart"
                                    method="get" className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" >
                                   Gráfico Linha
                                </Link>
                                
                                <Link href="barChart"
                                    method="get" className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" >
                                   Gráfico Barra
                                </Link>

                                <Link href="inicialReport"
                                    method="get" className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" >
                                   Pesquisa Inicial
                                </Link>

                                <NavLink href={route('standards.index')} active={route().current('standards.index')}
                                className="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" >
                                    Standard
                                </NavLink>



                                    
                                </NavLink>

                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {auth.user.name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
=======
                            <div className=" mt-8 ">
                                <div className=" dropDwnBtn hidden  sm:flex sm:items-center">
                                    <div className="">
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <span className="inline-flex rounded-md">
                                                    <button
                                                        type="button"
                                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                    >
                                                        {auth.user.name}

                                                        <svg
                                                            className="ml-2 -mr-0.5 h-4 w-4"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </button>
                                                </span>
                                            </Dropdown.Trigger>

                                            <Dropdown.Content>
                                                <Dropdown.Link
                                                    href={route("profile.edit")}
>>>>>>> b19935a47c602f10eb043b345784621dbadb29d2
                                                >
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

                                <div className="closeBtn -mr-2 flex items-center sm:hidden">
                                    <button
                                        onClick={() =>
                                            setShowingNavigationDropdown(
                                                (previousState) =>
                                                    !previousState
                                            )
                                        }
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                    >
                                        <svg
                                            className="h-6 w-6"
                                            stroke="currentColor"
                                            fill="none"
                                            viewBox="24 24 0 0"
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
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown ? "block" : "hidden") +
                            " sm:hidden"
                        }
                    >
                        <div className="pt-2 pb-3 space-y-1">
                            <ResponsiveNavLink
                                href={route("dashboard")}
                                active={route().current("dashboard")}
                            >
                                Dashboard
                            </ResponsiveNavLink>
                        </div>

                        <div className="pt-4 pb-1 border-t border-gray-200">
                            <div className="px-4">
                                <div className="font-medium text-base text-gray-800">
                                    {auth.user.name}
                                </div>
                                <div className="font-medium text-sm text-gray-500">
                                    {auth.user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    /*  href={route("logout")} */
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
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
            <main className=" w-full ">{children}</main>
        </div>
    );
}
