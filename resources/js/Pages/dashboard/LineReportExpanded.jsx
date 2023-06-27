import React from "react";
import PricesOfCeasa from "./PricesOfCeasa";
import Chart from "./Chart";
import Index from "../Chats/Index";
import List from "./productsCard/List";
import LandingPage from "@/Layouts/LandingPage";
import Research_inicial from "@/Pages/reports/Research_inicial";

export function Data({
    priceCeasa,
    auth,
    posts,
    lastDate,
    lastCotacao,
    product,
    productList,
}) {
    return (
        <LandingPage auth={auth}>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                {" "}
            </h2>

            <div className="py-12">
                <div className=" flex flex-col  mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="flex flex-col lg:flex-row">
                        <div className="flex flex-row lg:flex-row">
                            <div className="bg-white m-2 p-4  shadow-md rounded-lg">
                                <List productLists={productList} />
                            </div>

                            <div className="bg-white  m-2    shadow-md rounded-lg">
                                <PricesOfCeasa
                                    lastDate={lastDate}
                                    lastCotacao={lastCotacao}
                                    product={product}
                                />
                            </div>
                        </div>
                        <div className="bg-white  m-2    shadow-md rounded-lg">
                            <Research_inicial></Research_inicial>
                        </div>
                        </div>
                        <div className="bg-white  m-2 p-4   shadow-md rounded-lg">
                            <Chart priceCeasa={priceCeasa} />
                        </div>
                    </div>

                    <div>
                        <div className="bg-white  m-2 p-4   shadow-md rounded-lg">
                            <Index posts={posts} />
                        </div>
                    </div>
                </div>
            </div>
        </LandingPage>
    );
}
export default Data;
