import React, { useState } from "react";
import pimentao from "./pimentao.jpg";
import tomate from "./tomate.jpg";
import batata from "./batata.jpg";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm, router } from "@inertiajs/react";

import Input from "postcss/lib/input";

 export const List = () => {
     
  
        const [values, setValues] = useState({
         
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
        router.post("dashboard", values)
      }
    

    return (
        <form onSubmit={handleSubmit}> 
        <div className="flex flex-col items-center justify-center ">
            <div className="flex">
            <input
                type="text"
                  name="product"
                  id="product"
                  value={values.product}
                  onChange={handleChange}
                className=" Pesquisar p-0 "
                placeholder="Pesquisar" />
            </div>   
                <button className="p-4 bg-[#8BC83F] mx-2 rounded-lg " >
                    Search
                </button>
            </div>       
        
     </form> 
    );
};

export default List;
