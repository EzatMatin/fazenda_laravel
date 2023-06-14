import { Link } from "@inertiajs/react";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import Dropdown from "./Dropdown";
import PrimaryButton from "./PrimaryButton";
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Nav({props, auth}) {
    return (
        <>
            <div className="flex items-center mx-auto justify-center max-w-[1240px] animate-[dropDown_0.5s_ease-in]">
                <div className=" flex flex-col   mx-auto  selection:text-white">
                    <div className="w-screen bg-[#FBEAC2]">
                        <div className="flex flex-row justify-between lg:max-w-[1240px]  items-center mx-auto p-4 text-right">
                            <div>
                                <Link href="/" method="get">
                                    <img
                                        method="get"
                                        src={Logo}
                                        alt="logo"
                                        className="logo"
                                    />
                                </Link>
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ml-6">
                        <PrimaryButton href="https://www.fazendasantaluiza.agr.br/">
                            <p>Vir Ceasa</p>
                        </PrimaryButton>
                            <div className="ml-3 relative">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                              <BiUserCircle/>

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
                                            method="get"
                                            as="button"
                                        >
                                            Profile
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("login")}
                                            method="get"
                                            as="button"
                                        >
                                            Sign In
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("register")}
                                            method="get"
                                            as="button"
                                        >
                                            Register
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
                         {/*    <div className="flex flex-row my-auto space-x-4">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-[#8CC7D7] hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                        >
                                            <BiUserCircle />
                                        </button>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("login")}
                                            method="get"
                                            as="button"
                                        >
                                            sign in
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("register")}
                                            method="get"
                                            as="button"
                                        >
                                            sign Up
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
