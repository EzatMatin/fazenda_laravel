import { Link, Head } from "@inertiajs/react";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import "./welcome.css";
//import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Welcome(props, { children }) {
    return (
        <>
            <div className="flex items-center mx-auto justify-center">
                <Head title="Welcome" />
                <div className=" flex flex-col mx-auto  selection:text-white">
                    <div className="w-screen bg-[#FAF3E3]">
                        <div className="flex flex-row justify-between lg:max-w-[1240px]  items-center mx-auto p-4 text-right">
                            {props.auth.user ? (
                                <Link
                                    href={route("dashboard")}
                                    className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <div>
                                        <img
                                            src={Logo}
                                            alt="logo"
                                            className="logo"
                                        />
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
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Produtos
                                        </Link>
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
                                </>
                            )}
                        </div>
                    </div>

{/*                     <div>
                        <div className="flex flex-col items-center mt-40 lg:max-w-[1240px] lg:mt-60 align-middle text-white mx-auto">
                            <h1 className="lg:text-4xl text-2xl">
                                Fazenda Santa Luizaaaa
                            </h1>
                            <p className="w-1/2 text-center my-6">
                                Moth beans should be first soaked overnight
                                before boiled in order to remove some of the
                                antinutritional factors that may interfere with
                                digestion. One serving of moth bean
                            </p>
                            <Link
                                href={route("register")}
                                className="uppercase rounded-full lg:p-4 p-2 bg-[#8CC7D7]"
                            >
                                Cadastre Grátis
                            </Link>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}
export default Welcome;
