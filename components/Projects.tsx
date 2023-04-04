import React from 'react'
import { motion } from "framer-motion"

export function Projects() {
    const projects = [
        {
            id: 1, image: "/projects/impetolayout.png", title: "ímpeto", content:
                "Sou responsável pela criação e manutenção completa do e-commerce. As outras tarefas exigidas foram a criação da logo, dos banners, e do layout como um todo. Também tive que realizar a integração com o gateway de pagamento AppMax, aceitando basicamente todos os meios de pagamento possíveis, como o pix, cartão de crédito e boleto bancário. Link do site: <strong><a href='https://impetodg.com/'>https://impetodg.com</a></strong>"
        },
        {
            id: 2, image: "/projects/cardier.png", title: "Cardier", content:
                "Realizei a parte de otimização, de interação, e de responsividade na dashboard de estilização do cartão na aplicação. Na qual tive que criar um método de tipografia, para quando o usuário mudasse a fonte do texto manualmente, fosse possível mudar a fonte de cada componente separadamente, além de corrigir bugs na aplicação, como loopings infinitos e otimização do código. Link do site: <strong><a href='https://cardier.com.br'>https://cardier.com.br</a></strong>"
        },
        {
            id: 3, image: "/projects/Totelfront.png", title: "Totel", content:
                "Tive que Projetar e construir aplicativos avançados para a plataforma, colaborar com equipes multifuncionais para definir, projetar e enviar novos recursos. Trabalhar com fontes de dados externas e APIs, Código de teste de unidade para robustez, incluindo casos extremos, de usabilidade e confiabilidade."
        },
    ]

    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='relative flex flex-col items-center xl:flex-row justify-center lg:flex-row max-w-full mx-auto h-screen z-0'
        >
            <h3 className='absolute xl:top-16 top-16 lg:top-5 text-2xl tracking-widest uppercase text-gray-500'>
                Projetos reais
            </h3>

            <div className='xs:flex-row s:flex-row xl:mt-0 md:mt-8 md:flex-row relative flex flex-col xl:flex-row lg:flex-row w-full lg:w-auto h-full lg:h-auto overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, i) => (
                    <div key={i} className='w-full xs:w-[400px] lg:w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center lg:p-44 p-20 h-screen'>
                        <motion.img
                            initial={{ opacity: 0 }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={project.image}
                            alt={project.title}
                            className='xs:w-3/4 w-2/4 md:w-3/4 xl:w-2/4 h-auto md:h-3/4 object-contain lg:w-[370px] lg:h-[370px]'
                        />
                        <div className='space-y-10 px-0 lg:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center mt-7'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    {i + 1} of {projects.length}:
                                </span>{" "}
                                {project.title}
                            </h4>
                            <p className='xl:text-lg xs:text-sm lg:text-[1rem] text-center' dangerouslySetInnerHTML={{ __html: project.content }} />
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] h-[500px] bg-[#F7AB0A]/10 -skew-y-12 left-0' />
        </motion.div>
    )
}