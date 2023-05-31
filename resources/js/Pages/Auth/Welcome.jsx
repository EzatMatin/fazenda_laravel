import { Link, Head } from "@inertiajs/react";
import { useState } from "react";
import { BiUserCircle } from "react-icons/bi";
import Logo from "../../assets/logo.png";
import "./welcome.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Welcome(props) {

    const [nav, setNav] = useState(true);

    const handlenav = () => {
        setNav(!nav);
      };

    return (
        <>
          
            <div className="flex items-center mx-auto justify-center max-w-[1240px]">
                <Head title="Welcome" />
                <div className=" flex flex-col   mx-auto  min-h-screen selection:text-white">
                <Link
                                            onClick={handlenav}

                                            className="ml- font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                        >
                                           {!nav ? <AiOutlineClose className="lg:hidden md:hidden" size={25} /> : <AiOutlineMenu className="lg:hidden md:hidden" size={25} />}

                                        </Link>
                {!nav ?  <div className=" outside humb w-screen bg-[#FAF3E3]">
                        <div className="flex flex-row justify-between lg:w-[1240px]  items-center mx-auto p-4 text-right">
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
                                            className="logo "
                                        />
                                    </div>
                                    <div className="flex flex-row my-auto space-x-4">
                                        <div className=""> 
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Historia
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Galleria
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Produtos
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Ceasa
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
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
                                    
                                </>
                            )}
                        </div>
                    </div>
                    
                                    :


                    <div className="inside-humb w-screen bg-[#FAF3E3]">
                        <div className="flex flex-col lg:w-[1240px] p-4 text-right">
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
                                            className="logo mb-4"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-left items-left ml-4 text-left space-y-4">
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Historia
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Galleria
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Produtos
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
                                            Ceasa
                                        </Link>
                                        <Link className="font-semibold text-black hover:text-gray-900 dark:text-black dark:hover:text-gray-400 focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500">
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

         }


                    <div>
                        <div className="flex flex-col items-center mt-40 lg:max-w-[1240px] lg:mt-60 align-middle text-white mx-auto">
                            <h1 className="lg:text-4xl text-2xl">
                                Fazenda Santa Luiza
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
                    </div>
                </div>

                <style>{`
               
            `}</style>
            </div>
        </>
    );
}
