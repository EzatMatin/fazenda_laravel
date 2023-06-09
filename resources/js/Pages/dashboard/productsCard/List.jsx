import React, { useState } from "react";
import pimentao from "./pimentao.jpg";
import tomate from "./tomate.jpg";
import batata from "./batata.jpg";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm, router } from "@inertiajs/react";

import Input from "postcss/lib/input";

export const List = ({productLists}) => {

    const [ selectedItem, setSelectedItem , data, setData, post, processing, reset, errors,  ] = useState({
        
        nome: "",
       
    });



  /*   function handleChange(e) {
        this.setState({value: e.target.value});
    } */

    const product = selectedItem;

    function handleSubmit(e) {
        e.preventDefault();
       
         router.post("productResearch", product); 
       
    }

    const handleSelectItem = (event) => {
        setSelectedItem(event.target.value);
    };


    return (
        <form onSubmit={handleSubmit}> 
        <div className="flex flex-col items-center justify-center ">
            <div className="flex">
                <select className="p-4  rounded-lg " value={selectedItem} onChange={handleSelectItem}>
                    <option value="">Produto</option>
                    {itemData.map((item) => (
                        <option key={item.id} value={item.value}>
                            {item.label}
                        </option>
                    ))}
                </select>
                <PrimaryButton className="p-4 bg-[#8BC83F] mx-2 rounded-lg " onClick={handleSearch}>
                    Search
                </button>
            </div>

          
        </div>
     </form> 
    );
};

export default List;
