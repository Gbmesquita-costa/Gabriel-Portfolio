import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export function About({}: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-4 md:px-10 justify-evenly mx-auto items-center'
        >

            <h3 className='absolute top-12 md:top-24 uppercase tracking-[20px] text-gray-500 text-2xl mb-10 md:mb-0'>
                Sobre
            </h3>

            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                src='/profile/profile.jpeg'
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]'
            />

            <div className='space-y-10 px-0 md:px-10 max-w-md md:max-w-none mt-20 md:mt-0'>
                <h4 className='text-4xl font-semibold'>Um pouco <span className='underline decoration-[#bb4357]'>sobre</span> mim</h4>

                <p className='text-base'>
                    Olá 👋, meu nome é Gabriel! Sou formado em análise e desenvolvimento de sistemas, e atualmente atuo como desenvolvedor Full Stack, possuindo foco em desenvolvimento com Next.Js, TypeScript, React, Javascript, Sass, Node.Js dentre várias outras tecnologias que uso para criar aplicações web 💜🚀
                </p>

                <p className='text-base'>
                    A cada dia gosto de aprender cada vez mais, sempre buscando mais conhecimento e aperfeiçoando as minhas habilidades. Já participei de vários eventos e palestras de programação, no qual agregaram muito conhecimento nas mais diversas áreas da tecnologia.
                </p>

                <p className='text-base'>
                    Tive o prazer de fazer parte de projetos incríveis e de realizar trabalhos maravilhosos ao longo da minha carreira como desenvolvedor. Conheci muitas pessoas fantásticas, na qual agregaram muito valor em minha vida, tanto pessoal quanto profissional! Acredito no impacto que a tecnologia pode proporcionar na vida das pessoas. <strong>A tecnologia nos une 👊❤</strong>
                </p>

            </div>

        </motion.div>
    )
}