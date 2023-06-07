import React from "react";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { useForm, Head } from "@inertiajs/react";
import Post from "@/Components/Post";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export const Index = ({ auth, posts }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
<<<<<<< HEAD
        title: '',
        body: '',
    })
=======
        title: "",
        body: "",
    });
>>>>>>> b19935a47c602f10eb043b345784621dbadb29d2

    const submit = (e) => {
        e.preventDefault();

        post(route("posts.store"), { onSuccess: () => reset() });
    };
    return (
<<<<<<< HEAD
        <AuthenticatedLayout auth={auth}>
        <><Head title='Posts' /><div className='max-w-2x1 mx-auto p-4 sn:p-6 lg:p-8'>
=======
        /*  <AuthenticatedLayout > */ 
        <div auth={auth} className="max-w-2x1 mx-auto">
            <Head title="Posts" />
>>>>>>> b19935a47c602f10eb043b345784621dbadb29d2
            <form onSubmit={submit}>
                <input
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                    type="text"
                    placeholder="Title"
                    autoFocus
                    className="mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm"
                />
                <InputError message={errors.title} className="mt-2" />
                <textarea
                    value={data.body}
                    onChange={(e) => setData("body", e.target.value)}
                    type="text"
                    placeholder="Body"
                    className="block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                ></textarea>
                <InputError message={errors.body} className="mt-2" />
                <PrimaryButton
                    className="mt-4 text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    disabled={processing}
                >
                    Create
                </PrimaryButton>
            </form>
<<<<<<< HEAD
            <div className='mt-6 bg-white shadow-sm rounded-lg divide-y'>
                {posts.map((post) => <Post key={post.id} post={post} />
                )}
            </div>
        </div></>
        </AuthenticatedLayout>

    )
}
=======
            <div className=" max-h-[450px] mt-2 overflow-y-scroll bg-white shadow-sm rounded-lg divide-y">
                {posts ? (
                    posts.map((post) => <Post key={post.id} post={post} />)
                ) : (
                    <p>Whats in your mind?</p>
                )}
            </div>
        </div>
    );
};
>>>>>>> b19935a47c602f10eb043b345784621dbadb29d2

export default Index;
