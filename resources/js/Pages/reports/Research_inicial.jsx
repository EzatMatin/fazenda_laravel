import React from "react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import "./style.css";
import PrimaryButton from "@/Components/PrimaryButton";

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
        <div
            auth={auth}
            className="flex lg:flex-col md:flex-col flex-col justify-between"
        >
            <form onSubmit={handleSubmit}>
                <div>
                    <div className=" flex flex-col lg:flex-col items-center lg:px-4 m-auto  ">
                        <div className="header justify-between  flex flex-col md:flex-col lg:flex-row lg:w-full ">
                            <div className="date flex flex-col md:flex-row lg:flex-row md:space-x-5  lg:space-x-5">
                                <div className="flex flex-col lg:flex-row my-2 justify-between lg:space-x-5 ">
                                    <div className="dataInicial ">
                                        <p className="">Data Inicial</p>
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
                                        <p className="">Data Final</p>
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
                            <div className="search flex lg:flex-row space-x-5  md:flex-row my-4">
                                <PrimaryButton type="submit">
                                    Pesquisar
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Data;
