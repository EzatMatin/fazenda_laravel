import {React, useState} from 'react'
// import dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime'

import Dropdown from './Dropdown'
import InputError from './InputError'
import PrimaryButton from './PrimaryButton'
import { useForm, usePage } from '@inertiajs/react'



const Post = ({post}) => {
        const {auth} = usePage().props 
        const [editing,setEditing] = useState(false)
        const {data, setData, patch, processing, reset, errors} = useForm({
            title:post.title,
            body:post.body
        })

        const submit = (e) => {
            e.preventDefault()
            patch(route('posts.update', post.id), {onSuccess: ()=> setEditing(false) })
        }
  return (
    <div className='p-5 flex space-x-2'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-text" viewBox="0 0 16 16"> 
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8zm0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"/> 
             </svg>
            <div className='flex-1'>
                <div className='flex justify-between itens-center'>
                    <div>
                        <span className='text-gray-800'>{post.user.name}</span>
                        <small className='ml-2 text-sm text-gray-600'>{new Date(post.created_at).toLocaleString()}</small>
                        {post.created_at !== post.updated_at && <small className='text-sm text-gray-600'>&middot; edited</small>}
                    </div>
                        {post.user.id === auth.user.id &&
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16"> 
                                            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/> 
                                            <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                                        </svg>
                                    </button>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <button 
                                        className='block w-full px-4 py-2 text-left text-sm leading-5 text-white-500 hover:bg-blue-200 focus:bg-gray-100 transition duration-500 ease-in-out'
                                        onClick={ () => setEditing(true)}
                                        >
                                        Edit
                                    </button>
                                    <Dropdown.Link
                                        as="button"
                                        href={route('posts.destroy', post.id)}
                                        method='delete'
                                    >
                                        Delete
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>              
                        }               
                </div>
                { editing
                    ? <form onSubmit={submit}>
                        <input
                            value={data.title} 
                            onChange={e => setData('title', e.target.value)}
                            type='text'
                            autoFocus
                            className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm'
                        />
                        <textarea
                            value={data.body} 
                            onChange={e => setData('body', e.target.value)}
                            type='text'
                            className='block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                        >  
                        </textarea>
                        <InputError message={errors.message} className='mt-2'/> 
                        <div className='space-x-2'>
                            <PrimaryButton
                                className='mt-4'>
                                Save
                            </PrimaryButton>
                            <button 
                                className='inline-flex items-center px-4 py-2 bg-gray-300 border border-transparent rounded-md font-semibold text-xs uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150' 
                                onClick={()=>setEditing(false) && reset()}>
                                Cancel
                            </button>
                        </div>
                    </form>
                    : (
                        <>
                            <p className='mt-4 text-lg text-black'>{post.title}</p>
                            <p className='mt-4 text-black'>{post.body}</p>
                        </>
                    )
                }

             
            </div>
    </div>
  )
}

export default Post