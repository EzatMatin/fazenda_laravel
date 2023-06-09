import { React, useState } from "react";
// import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'

import Dropdown from "./Dropdown";
import InputError from "./InputError";
import PrimaryButton from "./PrimaryButton";
import { useForm, usePage } from "@inertiajs/react";
import Input from "postcss/lib/input";

export const Product = ({ product }) => {
    const { auth } = usePage().props;
    const [editing, setEditing] = useState(false);
    const { data, setData, patch, processing, reset, errors } = useForm({
        nome: product.nome,
        imagem: product.imagem,
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route("products.update", product.id), {
            onSuccess: () => setEditing(false),
        });
    };
    return (
        <div className="p-5 flex space-x-2">
            
            <div className="flex-1">
                <div className="flex justify-between itens-center">
                
            
                        <Dropdown>
                            <Dropdown.Trigger>
                                <button>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        className="bi bi-card-list mx-4"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                                        <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                                    </svg>
                                </button>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <button
                                    className="block w-full px-4 py-2 text-left text-sm leading-5 text-white-500 hover:bg-blue-200 focus:bg-gray-100 transition duration-500 ease-in-out"
                                    onClick={() => setEditing(true)}
                                >
                                    Edit
                                </button>
                                <Dropdown.Link
                                    as="button"
                                    href={route( "products.destroy" , product.id)}
                                    method="delete"
                                >
                                    Delete
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
        
                </div>
                {editing ? (
                    <form onSubmit={submit}>
                        <input
                            value={data.nome}
                            onChange={(e) => setData("nome", e.target.value)}
                            type="text"
                            autoFocus
                            className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm"
                        />
                        <input
                            value={data.imagem}
                            onChange={(e) => setData("imagem", e.target.value)}
                            type="text"
                            className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        />
                        <InputError message={errors.message} className="mt-2" />
                        <div className="space-x-2">
                            <PrimaryButton className="mt-4">Save</PrimaryButton>
                            <button
                                className="inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150"
                                onClick={() => setEditing(false) && reset()}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                ) : (
                    <>
                        <p className="mt-4 text-lg text-black">{product.nome}</p>
                        <p className="mt-4 text-black">{product.image}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Product;
