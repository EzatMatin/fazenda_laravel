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



export default function Consult() { 
  
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
    router.post('ceasa', values)
  }

  return (

   <LandingPage>

  <form onSubmit={handleSubmit}>
    <div>
      <div className=" flex flex-col lg:flex-col items-center lg:px-4 m-auto max-w-[343px] h-screen lg:max-w-[1240px] md:max-w-[820px] ">
        <div className="text-white w-full md:ml-2 flex flex-col ml-4 mt-4 ">
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



    </LandingPage> 
  );
}


