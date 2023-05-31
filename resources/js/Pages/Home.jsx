import React from "react";
import LandingPage from "@/Layouts/LandingPage";
import { Link } from "@inertiajs/react";

function Home() {
    return (
        <LandingPage >
            <div className=" animate-[fadeDown_0.1s_ease-in]   ">
            <div className="flex  flex-col items-center justify-center lg:max-w-[1240px] h-screen  text-white m-auto">
                <h1 className="lg:text-4xl text-2xl transition-opacity ease-in delay-150 animate-[fadeDown_0.2s_ease-in]">Fazenda Santa Luizaaaa</h1>
                <p className="w-1/2 text-center my-6 animate-[fadeDown_0.4s_ease-in]">
                    Moth beans should be first soaked overnight before boiled in
                    order to remove some of the antinutritional factors that may
                    interfere with digestion. One serving of moth bean
                </p>
                <Link
                    href={route("register")}
                    className="uppercase rounded-full lg:p-4 p-4 bg-[#8CC7D7] hover:bg-sky-700 transition ease-in-out delay-50 hover:scale-110 duration-200 animate-[fadeDown_0.6s_ease-in]"
                >
                    Cadastre Grátis
                </Link>
            </div>
            </div>
        </LandingPage>
    );
}
export default Home;
