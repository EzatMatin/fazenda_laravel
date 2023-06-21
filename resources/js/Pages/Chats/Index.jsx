import React from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Post from "@/Components/Post";
import {
    BiSend,
    BiMicrophone
} from "react-icons/bi";


export const Index = ({ auth, posts }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        title: "",
        body: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("posts.store"), { onSuccess: () => reset() });
    };
    return (
        /*  <AuthenticatedLayout > */ 
        <div auth={auth} className="max-w-2x1 mx-auto">
            <Head title="Posts" />
            <form className="flex " onSubmit={submit}>
             
                <textarea
                    value={data.body}
                    onChange={(e) => setData("body", e.target.value)}
                    type="text"
                    placeholder="Write your message here"
                    className=" mr-2 w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                ></textarea>
                <InputError message={errors.body}  />
                
                <div className="flex flex-col">
                <PrimaryButton
                    className="mt-4 text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    disabled={processing}
                >
                    <BiMicrophone/>
                </PrimaryButton>
                <PrimaryButton
                    className="mt-4 text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    disabled={processing}
                >
                    <BiSend/>
                </PrimaryButton>
                </div>
            </form>
      
            <div className=" max-h-[450px] mt-2 p-2 overflow-y-scroll bg-[#ECECEC] shadow-sm rounded-lg divide-y">
                {posts ? (
                    posts.map((post) => <Post key={post.id} post={post} />)
                ) : (
                    <p>Whats in your mind?</p>
                )}
            </div>
        </div>
    );
};

export default Index;
