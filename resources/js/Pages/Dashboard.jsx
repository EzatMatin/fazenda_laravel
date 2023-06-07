import React from "react";
import { useForm, Head } from "@inertiajs/react";
import Post from "@/Components/Post";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import PricesOfCeasa from "./dashboard/PricesOfCeasa";
import Chart from "./dashboard/Chart";
<<<<<<< HEAD
import Post from "./Chats/Index";

export const Data = ({ priceCeasa, auth , posts}) => {

=======
import Index from "./Chats/Index";
import Title from "./dashboard/Title";
import List from "./dashboard/productsCard/List";

export function Data({ priceCeasa, auth, posts }) {
>>>>>>> b19935a47c602f10eb043b345784621dbadb29d2
    return (
        <AuthenticatedLayout auth={auth}>
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                {" "}
            </h2>

            <div className="py-12">
                <div className=" flex lg:flex-row md:flex-col flex-col  mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="bg-white m-4 p-4  shadow-sm rounded-lg">
                            <Title user={auth.user.name} />
                        </div>
                        <div className="flex flex-col lg:flex-row">
                            <div className="bg-white m-4 p-4  shadow-sm rounded-lg">
                                <List/>
                            </div>

                            <div className="bg-white  m-4    shadow-sm rounded-lg">
                                <PricesOfCeasa price_min="10" />
                            </div>
                        </div>

                        <div className="bg-white  m-4 p-4   shadow-sm rounded-lg">
                            <Chart priceCeasa={priceCeasa} />
                        </div>
                    </div>

                    <div>
<<<<<<< HEAD
                        <div className=" flex m-4  shadow-sm rounded-lg">
                       
                                    
=======
                        <div className="bg-white  m-4 p-4   shadow-sm rounded-lg">
                             <Index posts={posts} />  
                         
>>>>>>> b19935a47c602f10eb043b345784621dbadb29d2
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
export default Data;
