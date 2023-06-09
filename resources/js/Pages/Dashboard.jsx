import React from "react";
import { useForm, Head, Link } from "@inertiajs/react";
import Post from "@/Components/Post";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import PricesOfCeasa from "./dashboard/PricesOfCeasa";
import Chart from "./dashboard/Chart";
import Index from "./Chats/Index";
import Title from "./dashboard/Title";
import List from "./dashboard/productsCard/List";
import LandingPage from "@/Layouts/LandingPage";
import LineReport from "./dashboard/LineReport";

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
                <div className=" flex lg:flex-row md:flex-col flex-col  mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="bg-white m-2 p-4  shadow-md rounded-lg">
                            <Title user={auth.user.name} />
                        </div>

                        <div className="flex flex-row lg:flex-row">
                            <div className="bg-white m-2 p-4  shadow-md rounded-lg">
                                <List productLists={productList} />
                            </div>

                            <div className="bg-white w-full  m-2    shadow-md rounded-lg">
                                <PricesOfCeasa
                                    lastDate={lastDate}
                                    lastCotacao={lastCotacao}
                                    product={product}
                                />
                            </div>
                        </div>

                        <div className="bg-white  m-2 p-4   shadow-md rounded-lg">
                            <LineReport priceCeasa={priceCeasa} />
                        </div>
                        <Link
                        href={route("search")}
                        method="get"
                        
                        
                        >
                            <div className="bg-white  m-2 p-4   shadow-md rounded-lg">
                                <Chart priceCeasa={priceCeasa} />
                            </div>
                        </Link>
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
