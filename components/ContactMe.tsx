import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"

import { PhoneIcon, MapIcon, EnvelopeIcon } from "@heroicons/react/24/solid"

type Inputs = {
  name: string;
  email: string;
  subjects: string;
  message: string;
}

type Props = {}

export function ContactMe({ }: Props) {
  const { register, handleSubmit } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:mesquitag313@gmail.com?subject=${formData.subjects}&body=Olá, meu nome é ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='relative min-h-screen flex flex-col justify-center items-center px-6 sm:px-10'>
  <h3 className='xs:top-16 s:top-16 absolute md:top-14 xl:top-4 lg:top-0 text-2xl sm:text-3xl lg:mt-14 uppercase tracking-wider text-gray-500'>
    Contato
  </h3>

  <div className='xs:mb-24 xs:mt-32 md:mt-32 md:mb-14 lg:mb-16 lg:mt-36 mt-12 sm:mt-16 flex flex-col items-center sm:flex-row sm:items-start justify-center sm:justify-evenly max-w-5xl w-full mx-auto'>
    <div className='mb-10 sm:mb-0 text-center sm:text-left'>
      <h4 className='text-2xl sm:text-3xl font-bold'>
        Eu tenho exatamente o que você precisa.{" "}
        <span className='text-yellow-500 underline'>Vamos conversar.</span>
      </h4>

      <div className='mt-8 space-y-8'>
        <div className='xs:justify-center s:justify-center md:justify-center flex items-center space-x-4 xl:justify-center lg:justify-center'>
          <PhoneIcon className='text-yellow-500 h-7 w-7 animate-pulse'/>
          <p className='xl:text-xl sm:text-2xl xs:text-[1rem]'>+55 (24) 99250-1345</p>
        </div>

        <div className='xs:justify-center s:justify-center md:justify-center flex items-center space-x-4 xl:justify-center lg:justify-center'>
          <EnvelopeIcon className='text-yellow-500 h-7 w-7 animate-pulse'/>
          <p className='xl:text-xl sm:text-2xl xs:text-[1rem]'>mesquitag313@gmail.com</p>
        </div>

        <div className='xs:justify-center s:justify-center md:justify-center flex items-center space-x-4 xl:justify-center lg:justify-center'>
          <MapIcon className='text-yellow-500 h-7 w-7 animate-pulse'/>
          <p className='xl:text-xl sm:text-2xl xs:text-[1rem]'>Petrópolis, Rio de Janeiro</p>
        </div>
      </div>
    </div>

    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-4 w-full max-w-sm'>
      <div className='flex flex-col space-y-2'>
        <input {...register("name")} placeholder='Nome' className='contactInput' type="text" />
        <input {...register("email")} placeholder='Email' className='contactInput' type="text" />
        <input {...register("subjects")} placeholder='Assunto' className='contactInput' type="text" />
        <textarea {...register("message")} placeholder='Mensagem' className='contactInput' />
        <button type='submit' className='bg-yellow-500 py-4 px-8 rounded-md text-black font-bold text-lg'>
          Enviar
        </button>
      </div>
    </form>
  </div>
</div>
  )
}