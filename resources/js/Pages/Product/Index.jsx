import React from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Product from "@/Components/Product";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export const Index = ({ auth, products }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        nome: "",
        image: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("products.store"), { onSuccess: () => reset() });
    };
    return (
        /*  <AuthenticatedLayout > */ 
        <div auth={auth} className="max-w-2x1 mx-auto">
            <Head title="Produtos" />
            <form onSubmit={submit}>
                <input
                    value={data.nome}
                    onChange={(e) => setData("nome", e.target.value)}
                    type="text"
                    placeholder="Nome"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.nome} className="mt-2" />
                <input
                    value={data.image}
                    onChange={(e) => setData("image", e.target.value)}
                    type="file"
                    placeholder="Imagem"
                    autoFocus
                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.image} className="mt-2" />
                <PrimaryButton
                    className="mt-4 text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    disabled={processing}
                >
                    Salvar
                </PrimaryButton>
            </form>
            <div className=" max-h-[450px] mt-2 overflow-y-scroll bg-white shadow-sm rounded-lg divide-y">
                {products ? (
                    products.map((product) => <Product key={product.id} product={product} />)
                ) : (
                    <p>Whats in your mind?</p>
                )}
            </div>
        </div>
    );
};

export default Index;
