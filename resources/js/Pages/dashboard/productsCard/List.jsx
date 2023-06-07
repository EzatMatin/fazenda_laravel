import React, { useState } from "react";
import pimentao from "./pimentao.jpg";
import tomate from "./tomate.jpg";
import batata from "./batata.jpg";
import PrimaryButton from "@/Components/PrimaryButton";



const List = () => {
    const [selectedItem, setSelectedItem] = useState("");

    const itemData = [
        { id: "pimentao",value: "pimentao", label: "pimentao", image: pimentao },
        { id: "tomate",value: "tomate", label: "tomate", image: tomate },
        { id: "batata",value: "datata", label: "batata", image: batata },
        
    ];

    const handleSelectItem = (event) => {
        setSelectedItem(event.target.value);
    };

    const handleSearch = () => {
        // Perform search with selectedItem
        console.log("Selected Item:", selectedItem);
    };

    const selectedItemImage = itemData.find(
        (item) => item.value === selectedItem
    )?.image;

    return (
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
                </PrimaryButton>
            </div>
            {selectedItemImage && (
                <div>
                    <h3>Selected Item Image:</h3>
                    <img className="w-40 h-40" src={selectedItemImage} alt={selectedItem} />
                </div>
            )}
        </div>
    );
};

export default List;
