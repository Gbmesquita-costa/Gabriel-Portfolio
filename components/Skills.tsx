import React from 'react'

import { motion } from "framer-motion"
import { Skill } from './Skill'

export function Skills() {
    const skillsData = [
        { id: 1, image: "/skills/javascript.png", level: "100%" },
        { id: 2, image: "/skills/typescript.png", level: "100%" },
        { id: 3, image: "/skills/react.png", level: "95%" },
        { id: 4, image: "/skills/nextjs.png", level: "100%" },
        { id: 5, image: "/skills/node.png", level: "94%" },
        { id: 6, image: "/skills/html.png", level: "100%" },
        { id: 7, image: "/skills/css.png", level: "100%" },
    ]

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="xs:mt-28 relative flex flex-col h-[850px] justify-center items-center px-4 md:px-6 xl:px-8 max-w-screen-2xl mx-auto"
        >
            <h3 className="absolute top-16 text-gray-500 text-2xl md:text-3xl lg:text-4xl xl:text-4xl uppercase tracking-wider mb-6 md:mb-8">
                Skills
            </h3>

            <h3 className="text-gray-500 text-sm md:text-base lg:text-lg xl:text-xl uppercase tracking-wider mb-12 md:mb-16 text-center px-3">
                Passe o mouse sobre uma moeda para saber quais stacks mais utilizo em meus projetos
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-10">
                {
                    skillsData.map(({ id, image, level }) => (
                        <Skill key={id} level={level} skillImage={image} />
                    ))
                }
            </div>
        </motion.div>
    )
}