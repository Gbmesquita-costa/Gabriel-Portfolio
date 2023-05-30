import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center xl:flex-row max-w-7xl px-4 xl:px-10 justify-evenly mx-auto items-center'
        >

            <h3 className='absolute top-12 xl:top-17 uppercase tracking-[20px] text-gray-500 text-2xl mb-10 md:mb-0'>
                Sobre
            </h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src='/profile/profile.jpeg'
                className='-mb-40 xs:w-[160px] xs:h-[160px] xs:mt-60 s:w-36 s:h-36 s:mt-12 xl:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover xl:rounded-lg lg:w-48 lg:h-48 lg:mt-32 md:mt-32 md:w-44 md:h-44 xl:w-[500px] xl:h-[600px]'
            />

            <div className='s:pt-12 xs:pt-24 lg:pt-38 md:pt-28 lg:text-center space-y-10 px-2 xl:px-10 lg:px-10 xl:max-w-none lg:max-w-none mt-20 xl:mt-0 lg:mt-0'>
                <h4 className='xl:text-4xl xs:text-[1.2rem] font-semibold'>Um pouco <span className='underline decoration-[#bb4357]'>sobre</span> mim</h4>

                <p className='text-lg xs:text-sm s:text-[1rem] xl:text-lg md:text-[1rem]'>
                    Olá 👋, meu nome é Gabriel! Sou formado em análise e desenvolvimento de sistemas, e atualmente atuo como desenvolvedor Full Stack, possuindo foco em desenvolvimento com Next.Js, TypeScript, React, Javascript, Sass, Node.Js dentre várias outras tecnologias que uso para criar aplicações web 💜🚀
                </p>

                <p className='xs:text-sm text-lg s:text-[1rem] xl:text-lg md:text-[1rem]'>
                    Tive o prazer de fazer parte de projetos incríveis e de realizar trabalhos maravilhosos ao longo da minha carreira como desenvolvedor. Conheci muitas pessoas fantásticas, na qual agregaram muito valor em minha vida, tanto pessoal quanto profissional! Acredito no impacto que a tecnologia pode proporcionar na vida das pessoas. <strong>A tecnologia nos une 👊❤</strong>
                </p>

            </div>

        </motion.div>
    )
}