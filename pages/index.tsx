import Head from 'next/head'
import type { NextPage, } from 'next'

import { Header } from '../components/Header'
import { Hero } from "../components/Hero"
import { About } from '../components/About'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'
import { ContactMe } from '../components/ContactMe'

import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <>
      <Head>
          <link rel="shortcut icon" href="/profile/profile.jpeg" type="image/x-icon" />
      </Head>

      <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <Head>
          <title>Gabriel's Portfolio</title>
        </Head>

        <Header />

        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='about' className='snap-center'>
          <About />
        </section>

        <section id='skills' className='snap-start'>
          <Skills />
        </section>

        <section id='projects' className='snap-start'>
          <Projects />
        </section>

        <section id='contact' className='snap-start'>
          <ContactMe />
        </section>
      </div>

      <Link href={"#hero"}>
        <footer className='fixed bottom-0 left-2 translate-[50%, 50%] ml-5 mb-14 cursor-pointer'>
            <Image
              className='rounded-full'
              width={48}
              height={47}
              alt='up_image'
              src={"/profile/profile.jpeg"}
            />
        </footer>
      </Link>
    </>
  )
}

export default Home
