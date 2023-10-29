"use client"
import React from 'react'
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 text-left">Hello, I&apos;m {" "}</span>
                    <br></br>
                    <TypeAnimation 
                        sequence={[
                            "Andrew",
                            1000,
                            "A DevOps Engineer",
                            1000,
                            "A Site Reliability Engineer",
                            1000,
                            "A Cloud Security Engineer",
                            1000,
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    
                    />
                </h1>
                <div>
                    <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-400  to-green-400 hover:bg-slate-200 text-black">Hire Me</button>
                    <button className="px-1 py-1 rounded-full w-full sm:w-fit w-bg-transparent hover:bg-slate-800 text-white mt-3 bg-gradient-to-br from-blue-400 to-green-400">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download Resume</span>
                    </button>
                </div>
            </div>
            <div className="col-span-4 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/devopsguy.png"
                        alt="hero image"
                        width={300}
                        height={300}
                        className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection