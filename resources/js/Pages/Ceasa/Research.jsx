import {  Link } from "@inertiajs/react";
import React from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import Welcome from "@/Pages/Welcome";
import LandingPage from "@/Layouts/LandingPage";




const Ceasa = ({ priceCeasa }) => {

    
    return (
        <LandingPage>
            <div>
                <div className=" flex flex-col lg:flex-col  items-center lg:px-4 m-auto h-screen max-w-[343px] lg:max-w-[1240px] md:max-w-[820px] ">
                    <div className="text-white w-full md:ml-2 flex flex-col ml-4 mt-4 ">
                        <h1 className="lg:text-2xl text-xl font-semibold  ">
                            Cotações do Ceasa
                        </h1>
                        <p className=" text-xs ">
                            pesquisar preço dos produtos por período específico
                        </p>
                        <span className="bg-white w-1/3 p-[1px] my-1"></span>
                    </div>
                    <div className="header justify-between  flex flex-col md:flex-col lg:flex-row lg:w-full ">
                        <div className="date flex flex-col md:flex-row lg:flex-row md:space-x-5  lg:space-x-5">
                            <div className="flex flex-row my-4 justify-between md:space-x-5 lg:space-x-5 ">
                                <div className="dataInicial ">
                                    <p className="text-white">Data Inicial</p>
                                    <input
                                        className=" feild "
                                        type="date"
                                        name="DataInicial"
                                        id="DataInicial"
                                    />
                                </div>
                                <div className="dataFinal ">
                                    <p className="text-white">Data Final</p>
                                    <input
                                        className=" feild "
                                        type="date"
                                        name="DataFinal"
                                        id="DataFinal"
                                    />
                                </div>
                            </div>
                            
                        </div>
                        <div className="search flex lg:flex-row space-x-5 lg:-mb-[10px] md:flex-row my-4">
                            <Link className="feild bg-[#4d982c] text-white Filter justify-start m-auto flex lg:flex-row w-full ">
                                {/* <BiFilter size={20} /> */}
                                <button type="submit">Novo Pesquisar</button>
                            </Link>
                            <div className=" feild bg-white pesquisar justify-start m-auto md:w-full flex lg:flex-row space-x-2">
                                <AiOutlineSearch className="m-auto" size={20} />
                                <input
                                    type="text"
                                    className=" Pesquisar p-0 "
                                    placeholder="Pesquisar"
                                />
                            </div>
                        </div>
                    </div>
                    <table className=" flex flex-col mb-4  w-full items-center text-left justify-center ">
                        <thead>
                            <tr className="flex flex-row text-center bg-black text-white p-2 rounded-lg text-sm ">
                                <th className="   "></th>
                                <th className=" lg:w-[150px] md:w-[100px] w-full">
                                    {" "}
                                    Data
                                </th>
                                <th className="lg:w-[350px] md:w-[200px] w-full ">
                                    Produto
                                </th>
                                <th className="lg:w-[170px] md:w-[100px] w-full">
                                    Preço Mín
                                </th>
                                <th className="lg:w-[170px] md:w-[100px] w-full">
                                    Preço Méd
                                </th>
                                <th className="lg:w-[170px] md:w-[100px] w-full">
                                    Preço Máx
                                </th>
                                <th className="lg:w-[170px] md:w-[100px] w-full">
                                    Situacao
                                </th>
                            </tr>
                            <span className=""></span>
                        </thead>
                        <tbody>
                            <tr className=" flex flex-col bg-white p-2 rounded-lg">
                                {/*      <td className="  "> <HiOutlineChevronDown></HiOutlineChevronDown></td> */}
                                {priceCeasa.map((priceCeasa) => (
                                    <th
                                        Key={priceCeasa.id}
                                        className="flex flex-row m-auto text-center border-b-2 text-sm "
                                    >
                                        <th className=" lg:w-[150px] md:w-[100px]  w-[80px]">
                                            {" "}
                                            {priceCeasa.date}{" "}
                                        </th>
                                        <th className="lg:w-[350px] md:w-[200px]  w-[100px] ">
                                            {" "}
                                            {priceCeasa.product}{" "}
                                        </th>
                                        <th className="lg:w-[170px] md:w-[100px]  w-[40px]">
                                            {" "}
                                            {priceCeasa.price_min}{" "}
                                        </th>
                                        <th className="lg:w-[170px] md:w-[100px]  w-[40px]">
                                            {" "}
                                            {priceCeasa.price_com}{" "}
                                        </th>
                                        <th className="lg:w-[170px] md:w-[100px] w-[40px] ">
                                            {" "}
                                            {priceCeasa.price_max}{" "}
                                        </th>
                                        <th className="lg:w-[170px] md:w-[100px]  w-[40px]">
                                            {priceCeasa.situation}{" "}
                                        </th>
                                    </th>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </LandingPage>
    );
};

export default Ceasa;
