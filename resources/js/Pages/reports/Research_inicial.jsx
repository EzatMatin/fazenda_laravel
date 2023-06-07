import React from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { router } from "@inertiajs/react";
import "./style.css";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

import Chart from "../dashboard/Chart";

export const Data = ({ priceCeasa, auth }) => {
    const [values, setValues] = useState({
        date_inicial: "",
        date_final: "",
        product: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(values);
        router.post("researchInicial", values);
    }

    return (
        <AuthenticatedLayout auth={auth}>
            <div className="flex lg:flex-col md:flex-col flex-col justify-between">
                <form onSubmit={handleSubmit}>
                    <div>
                        <div className=" flex flex-col lg:flex-col items-center lg:px-4 m-auto  ">
                            <div className=" w-full md:ml-2 flex flex-col ml-4 mt-4 ">
                                <h1 className="lg:text-2xl text-xl font-semibold  ">
                                    Cotações do Ceasa
                                </h1>
                                <p className=" text-xs ">
                                    pesquisar preço dos produtos por período
                                    específico
                                </p>
                                <span className="bg-white w-full p-[1px] my-1"></span>
                            </div>

                            <div className="header justify-between  flex flex-col md:flex-col lg:flex-row lg:w-full ">
                                <div className="date flex flex-col md:flex-row lg:flex-row md:space-x-5  lg:space-x-5">
                                    <div className="flex flex-row my-4 justify-between md:space-x-5 lg:space-x-5 ">
                                        <div className="dataInicial ">
                                            <p className="text-white">
                                                Data Inicial
                                            </p>
                                            <input
                                                className=" feild "
                                                type="date"
                                                name="date_inicial"
                                                id="date_inicial"
                                                value={values.date_inicial}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="dataFinal ">
                                            <p className="text-white">
                                                Data Final
                                            </p>
                                            <input
                                                className=" feild "
                                                type="date"
                                                name="date_final"
                                                id="date_final"
                                                value={values.date_final}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="lg:m-auto md:my-auto"></div>
                                </div>
                                <div className="search flex lg:flex-row space-x-5 lg:-mb-[10px] md:flex-row my-4">
                                    <div className="feild bg-[#4d982c] Filter  m-auto text-white ">
                                        <button type="submit">Pesquisar</button>
                                    </div>
                                    <div className=" feild bg-white pesquisar justify-start m-auto md:w-full flex lg:flex-row space-x-2">
                                        <AiOutlineSearch
                                            className="m-auto"
                                            size={20}
                                        />
                                        <input
                                            type="text"
                                            name="product"
                                            id="product"
                                            value={values.product}
                                            onChange={handleChange}
                                            className=" Pesquisar p-0 "
                                            placeholder="Pesquisar"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="bg-white m-4 p-8 rounded-lg" >
                    <Chart priceCeasa={priceCeasa} />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Data;
