import React from 'react'

import { motion } from "framer-motion"
import { Skill } from './Skill'

export function Skills() {
    const skillsData = [
        { id: 1, image: "/skills/javascript.png" },
        { id: 2, image: "/skills/typescript.png" },
        { id: 3, image: "/skills/react.png" },
        { id: 4, image: "/skills/nextjs.png" },
        { id: 5, image: "/skills/node.png" },
        { id: 6, image: "/skills/html.png" },
        { id: 7, image: "/skills/css.png" },
    ]

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col min-h-screen justify-center items-center px-4 md:px-6 xl:px-8 max-w-screen-2xl mx-auto"
            >
            <h3 className="text-gray-500 text-2xl md:text-3xl lg:text-4xl xl:text-5xl uppercase tracking-wider mb-6 md:mb-8">
                Skills
            </h3>

            <h3 className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider mb-12 md:mb-16 text-center px-3">
                Passe o mouse sobre uma moeda para saber meu nível de habilidade
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                {
                    skillsData.map(({ id, image }) => (
                        <Skill key={id} skillImage={image} />
                    ))
                }
            </div>
        </motion.div>
    )
}