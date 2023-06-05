import { Head } from "@inertiajs/react";
import React from "react";
import { useState } from 'react'
import { HiOutlineChevronDown } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { BiFilter } from "react-icons/bi";
import { router } from '@inertiajs/react'
import "./style.css";
import LandingPageLayout from "@/Layouts/LandingPageLayout";
import Welcome from "@/Components/Nav";
import GuestLayout from "../../Layouts/GuestLayout";
import LandingPage from "@/Layouts/LandingPage";
import {  Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";



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
    router.post('research', values)
  }

  return (



    <AuthenticatedLayout auth={auth}>
    <div className="flex lg:flex-col md:flex-col flex-col justify-between">

  <form onSubmit={handleSubmit}>
    <div>
      <div className=" flex flex-col lg:flex-col items-center lg:px-4 m-auto max-w-[343px] lg:max-w-[1240px] md:max-w-[820px] ">
        <div className=" w-full md:ml-2 flex flex-col ml-4 mt-4 ">
          <h1 className="lg:text-2xl text-xl font-semibold  ">
            Cotações do Ceasa
          </h1>
          <p className=" text-xs ">
            pesquisar preço dos produtos por período específico
          </p>
          <span className="bg-white w-full p-[1px] my-1"></span>
        </div>
    
        <div className="header justify-between  flex flex-col md:flex-col lg:flex-row lg:w-full ">
          <div className="date flex flex-col md:flex-row lg:flex-row md:space-x-5  lg:space-x-5">
            <div className="flex flex-row my-4 justify-between md:space-x-5 lg:space-x-5 ">
          
              <div className="dataInicial ">
                <p className="text-white">Data Inicial</p>
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
                <p className="text-white">Data Final</p>
                <input
                  className=" feild "
                  type="date"
                  name="date_final"
                  id="date_final"
                  value={values.date_final}
                  onChange={handleChange} />
              </div>
            </div>
            <div className="lg:m-auto md:my-auto">
            </div>
          </div>
          <div className="search flex lg:flex-row space-x-5 lg:-mb-[10px] md:flex-row my-4">
            <div className="feild bg-[#4d982c] Filter justify-start m-auto flex lg:flex-row text-white space-x-2">
             {/*  <BiFilter size={20} /> */}
              <button type="submit">Pesquisar</button>
            </div>
            <div className=" feild bg-white pesquisar justify-start m-auto md:w-full flex lg:flex-row space-x-2">
              <AiOutlineSearch className="m-auto" size={20} />
              <input
                type="text"
                  name="product"
                  id="product"
                  value={values.product}
                  onChange={handleChange}
                className=" Pesquisar p-0 "
                placeholder="Pesquisar" />
            </div>        
          </div>     
            
        </div>   
      </div>
    </div>
   
  </form>
  <div>
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
</AuthenticatedLayout> 
  );
}

export default Data;
