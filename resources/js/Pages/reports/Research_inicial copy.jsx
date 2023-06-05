import React from "react";
import { useState } from 'react'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PricesOfCeasa from "../dashboard/PricesOfCeasa";
import { router } from '@inertiajs/react'
import ProductChanger from "../dashboard/productsCard/ProductChanger";
import Chat from "../dashboard/Chat"; 


import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

export const Data = ({priceCeasa, auth}) => {

    const [values, setValues] = useState({
        date_inicial: "",
        date_final: "",
        product: "",
      })
    
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }
    
      function handleSubmit(e) {
        e.preventDefault()
        console.log(values);
        router.post('researchInicial', values)
      }

    return (
        <AuthenticatedLayout auth={auth}>
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard ...{" "}
                </h2>

            <div className="py-12">
                <div className="max-w-7xl flex lg:flex-row md:flex-col flex-col  mx-auto sm:px-6 lg:px-8">
                    <div>
                    <div className="flex flex-row">
                        <div className="bg-white m-4 p-4 h-full   shadow-sm rounded-lg">
                            <ProductChanger></ProductChanger>
                        </div>

                        <div className="bg-white  m-4   shadow-sm rounded-lg">
                            <PricesOfCeasa price_min={last_date} />
                        </div>
                    </div>
                        <div className=" flex m-4  shadow-sm rounded-lg">
                        <BarChart
                width={920}
                height={400}
                data={priceCeasa}
                margin={{
                    top: 10,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date"/>
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="price_min" fill="#ffbf00" />
                <Bar dataKey="price_max" fill="#a52a2a" />
            </BarChart>
  
                          
                        </div>
                    </div>
                    <div>
                        <div className=" flex m-4  shadow-sm rounded-lg">
                            <Chat />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
export default Data;
