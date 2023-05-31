import { Link } from "@inertiajs/react";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../../assets/logo.png";
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Nav(props) {
    return (
        <>
            <div className="flex items-center mx-auto justify-center max-w-[1240px] animate-[dropDown_0.5s_ease-in]">
                <div className=" flex flex-col   mx-auto  selection:text-white">
                    <div className="w-screen bg-[#FAF3E3]">
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
                            <div className="flex flex-row my-auto space-x-4">
                                <Link
                                    href="historia"
                                    method="get"
                                    className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Historia
                                </Link>
                                <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                    Galleria
                                </Link>
                                {/*    <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                    Produtos
                                </Link> */}
                                <Link
                                    href="ceasa"
                                    method="get"
                                    className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Ceasa
                                </Link>
                                <Link
                                    href="blog"
                                    method="get"
                                    className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href={route("login")}
                                    className="ml- font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    <BiUserCircle size={25} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
