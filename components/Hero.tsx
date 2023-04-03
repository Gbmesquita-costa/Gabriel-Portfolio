import Link from 'next/link'
import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { BackgroundCircles } from './BackgroundCircles'

type Props = {}

export function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Olá, meu nome é Gabriel", 
            "<Gosto-de-codar.tsx/>",
            "<AmoCodar/>"
        ],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles/>
            <img className='relative rounded-full w-40 h-40 mx-auto object-cover' src="/profile/profile.jpeg" alt="profile" />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Engenheiro de software
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>

                <div className='pt-5'>
                    <Link href={"#about"}>
                        <button className='heroButton'>Sobre</button>
                    </Link>
                    <Link href={"#skills"}>
                        <button className='heroButton'>Habilidades</button>
                    </Link>
                    <Link href={"#projects"}>
                        <button className='heroButton'>Projetos</button>
                    </Link>
                    <Link href={"#contact"}>
                        <button className='heroButton'>Contato</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}