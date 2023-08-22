import Image from 'next/image'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { AiFillLinkedin, AiFillMail, AiFillGithub } from "react-icons/ai"
import deved from "/public/dev-ed-wave.png"
import design from "public/design.png"
import consulting from "public/consulting.png"
import code from "public/code.png"
import web1 from "public/web1.png"
import web2 from "public/web2.png"
import web3 from "public/web3.png"
import web4 from "public/web4.png"
import web5 from "public/web5.png"
import web6 from "public/web6.png"
import { useState } from 'react'
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=" min-h-screen">
          <nav className=' py-10 mb-12 flex justify-between'>
            <h1 className=' text-xl font-Burtons dark:text-white'>developedbysm</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className=' cursor-pointer text-2xl' /></li>
              <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 bg-cyan-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Shatarupa Mohanty</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Learner and Dreamer</h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-white'>
              Exploring new technological lanes to understand what I'm actually good at. Smile and Shine On!
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillMail />
          </div>
          <div className='relative mx-auto bg-gradient-to-b from from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={deved} layout='fill' objectFit='cover'></Image>
          </div>
        </section>
        <section>
          <div>
            <h3 className=' text-3xl py-1 dark:text-white'>All about me</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
              Heyya!!Completed my schooling from DAV PKT and now I'm doing my graduation from OUTR,BBSR.
              <span className='text-teal-500'>Not that great</span> in my job but I'm <span className='text-teal-500'>learning</span>.
            </p>
            <p className='dark:text-white'>Thing that keep me sane in this insane world are <span className='text-teal-500'>writing</span>, <span className='text-teal-500'>drawing</span> and
              <span className='text-teal-500'>teaching</span>
            </p>
          </div>
          <div className='lg:flex gap-10'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={design} width={100} height={100} className=' mx-auto ' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your n design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className=' text-gray-800 py-1'>Photoshop</p>
              <p className=' text-gray-800 py-1'>Illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p>

            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={code} width={100} height={100} className=' mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your n design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className=' text-gray-800 py-1'>Photoshop</p>
              <p className=' text-gray-800 py-1'>Illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p>

            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white'>
              <Image src={consulting} width={100} height={100} className=' mx-auto' />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'>
                Creating elegant designs suited for your n design theory.
              </p>
              <h4 className='py-4 text-teal-600'>Design tools i use</h4>
              <p className=' text-gray-800 py-1'>Photoshop</p>
              <p className=' text-gray-800 py-1'>Illustrator</p>
              <p className=' text-gray-800 py-1'>Figma</p>

            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Portfolio</h3>
            <p className='text-md py-2 leading-8 text-gray-80 dark:text-white'>
              Heyya!!Completed my schooling from DAV PKT and now I'm doing my graduation from OUTR,BBSR.
              <span className='text-teal-500'>Not that great</span> in my job but I'm <span className='text-teal-500'>learning</span>.
            </p>
            <p className='dark:text-white'>Thing that keep me sane in this insane world are <span className='text-teal-500'>writing</span>, <span className='text-teal-500'>drawing</span> and
              <span className='text-teal-500'> teaching</span>
            </p>
          </div>
          <div className='flex flex-col gap-10 lg:flex-row lg:flex-wrap'>
            <div className=' basis-1/3 flex-1'><Image src={web1} className='roundes-lg object-contain' width={"100%"} height={"100%"} layout='responsive' /></div>
            <div className=' basis-1/3 flex-1'><Image src={web2} className='roundes-lg object-contain' width={"100%"} height={"100%"} layout='responsive' /></div>
            <div className=' basis-1/3 flex-1'><Image src={web3} className='roundes-lg object-contain' width={"100%"} height={"100%"} layout='responsive' /></div>
            <div className=' basis-1/3 flex-1'><Image src={web4} className='roundes-lg object-contain' width={"100%"} height={"100%"} layout='responsive' /></div>
            <div className=' basis-1/3 flex-1'><Image src={web5} className='roundes-lg object-contain' width={"100%"} height={"100%"} layout='responsive' /></div>
            <div className=' basis-1/3 flex-1'><Image src={web6} className='roundes-lg object-contain' width={"100%"} height={"100%"} layout='responsive' /></div>
          </div>
        </section>
      </main>
    </div>
  )
}
