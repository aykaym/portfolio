import React from 'react'
import GithubIcon from "../../public/github.svg"
import LinkedinIcon from "../../public/linkedin.svg"
import GitlabIcon from "../../public/gitlab.svg"
import FiverrIcon from "../../public/fiverr.svg"
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
        <div className="z-10">
            <h5 className="text-xl font-bold text-white my-2">
                Let&apos;s Connect
            </h5>
            <p className="text-[#ADB7BE] mb-4 max-w-md" >
                {" "}
                I&apos;m current on the market for new opportunities, my inbox is always open. Please reach out for business inquires, I will get back with you soon.
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href="https://github.com/aykaym">
                    <Image src={GithubIcon} alt="GithubIcon" />
                </Link>
                <Link href="https://gitlab.com/aykay">
                    <Image src={GitlabIcon} alt="GitlabIcon" />
                </Link>
                <Link href="https://www.linkedin.com/in/andrew-farney-6a640174/">
                    <Image src={LinkedinIcon} alt="LinkedInIcon" />
                </Link>
                <Link href="https://www.fiverr.com/aykaym/complete-basic-and-advanced-devops-tasks-to-spec">
                    <Image src={FiverrIcon} alt="FiverrIcon" />
                </Link>
            </div>
            
        </div>
        <div>
            <form className ="flex flex-col">
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Your email</label>
                    <input className="bg-[#18191E] block border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5" type="email" id="email" required placeholder="jacob@gmail.com"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block mb-2 text-sm font-medium">Subject</label>
                    <input className="bg-[#18191E] block border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5" type="subject" id="subject" required placeholder="Hello!"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block mb-2 text-sm font-medium">Message</label>
                    <textarea 
                        name="message"
                        id="message"
                        className="bg-[#18191E] block border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg w-full p-2.5"
                        placeholder="Email doesnt work because its bugged, thanks NextJs 14 :)"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-400 hover:bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full">Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default EmailSection