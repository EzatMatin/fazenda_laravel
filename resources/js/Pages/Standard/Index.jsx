import React from 'react'
import InputError from '@/Components/InputError'
import PrimaryButton from '@/Components/PrimaryButton'
import { useForm, Head } from '@inertiajs/react'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import Standard from '@/Components/Standard'

export const Index = ({ auth, standards }) => {
    const { data, setData, post, processing, reset, errors } = useForm({
        date: '',
        nome: '',
       email: '',
       numero:'',
       texto: '',
       imagem:'',


    })

    const submit = (e) => {
        e.preventDefault()

        post(route('standards.store'), { onSuccess: () => reset() })
    }
    return (

        <><Head title='Standard' /><div className='max-w-2x1 mx-auto p-4 sn:p-6 lg:p-8'>
            <form onSubmit={submit}>
                <input
                    value={data.date}
                    onChange={e => setData('date', e.target.value)}
                    type='date'
                    placeholder='Data'
                    autoFocus
                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm' />
                <InputError message={errors.date} className='mt-2' />
                <input
                    value={data.nome}
                    onChange={e => setData('nome', e.target.value)}
                    type='text'
                    placeholder='Nome'
                    autoFocus
                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm' />
                <InputError message={errors.nome} className='mt-2' />
                <input
                    value={data.email}
                    onChange={e => setData('email', e.target.value)}
                    type='email'
                    placeholder='E-mail'
                    autoFocus
                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm' />
                <InputError message={errors.email} className='mt-2' />
                <input
                    value={data.numero}
                    onChange={e => setData('numero', e.target.value)}
                    type='number'
                    placeholder='Numero'
                    autoFocus
                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm' />
                     <InputError message={errors.numero} className='mt-2' />
                <input
                    value={data.imagem}
                    onChange={e => setData('imagem', e.target.value)}
                    type='file'
                    placeholder='imagem'
                    autoFocus
                    className='mb-3 block w-full border-gray-300 focus:border-indigo-300 focus-ring focus:ring-indigo-200 focus:rinf-opacity-50 rounded-md shadow-sm' />

                <InputError message={errors.imagem} className='mt-2' />
                <textarea
                    value={data.texto}
                    onChange={e => setData('texto', e.target.value)}
                    type='text'
                    placeholder='Texto'
                    className='block w-full border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm'
                >
                </textarea>

                <InputError message={errors.texto} className='mt-2' />

                <PrimaryButton
                    className='mt-4 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-nome focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'
                    disabled={processing}
                >
                    Create
                </PrimaryButton>
            </form>
            <div className='mt-6 bg-white shadow-sm rounded-lg divide-y'>
                {standards.map(standard => <Standard key={standard.id} standard={standard} />
                )}
            </div>
        </div></>


    )
}

export default Index;
