import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PricesOfCeasa from "./dashboard/PricesOfCeasa";

import ProductChanger from "./dashboard/productsCard/ProductChanger";
import Chat from "./dashboard/Chat";
import BarReport from "./dashboard/BarReport";


import Chart from "./dashboard/Chart";
import Index from "./Chats/Index";

export const Data = ({ priceCeasa, auth }) => {


    return (
        <AuthenticatedLayout auth={auth}>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                {" "}
            </h2>

            <div className="py-12">
                <div className="max-w-7xl flex lg:flex-row md:flex-col flex-col  mx-auto sm:px-6 lg:px-8">
                    <div>
                        <div className="flex flex-row">
                            <div className="bg-white m-4 p-4 h-full   shadow-sm rounded-lg">
                                <ProductChanger></ProductChanger>
                            </div>

                            <div className="bg-white  m-4   shadow-sm rounded-lg">
                                <PricesOfCeasa price_min="10" />
                            </div>
                        </div>
                        <div className=" flex m-4  shadow-sm rounded-lg">

                            <Chart priceCeasa={priceCeasa} />

                        </div>
                    </div>
                    <div>
                        <div className=" flex m-4  shadow-sm rounded-lg">
                            <Index />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
export default Data;
