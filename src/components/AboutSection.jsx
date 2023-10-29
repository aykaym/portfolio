'use client'
import React, { useTransition, useState } from "react"
import Image from "next/image"
import TabButton from "./TabButton"


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>Terraform</li>
                <li>CircleCI</li>
                <li>Kubernetes</li>
                <li>Python</li>
                <li>Javascript</li>
                <li>AWS</li>
                <li>Azure</li>
                <li>Ansible</li>
            </ul>
        )
    },
    {
        title: "Events",
        id: "events",
        content: (
            <ul className="list-disc pl-2">
                <li>Game Master for Shell on the Border, 2018-2019 & 2023</li>
                <li>Speaker at Tulsa Tech Fest, 2018</li>
                <li>Prohack Hackathon, 2017</li>
                <li>2nd Place at Jolt Hackathon, 2017</li>
            </ul>
        )
    },
    {
        title: "Awards & Certifications",
        id: "certs",
        content: (
            <ul className="list-disc pl-2">
                <li>Ember Award for Professional Development, 2021</li>
                <li>Offensive Security Wireless Professional, 2017</li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image 
                    src="public/images/aboutme.jpg" 
                    width={600} 
                    height={600}
                    alt="About Me"
                    className="top-0"/>
                <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                    <p className="text-base md:text-lg">
                        I am a seasoned technology professional of 8 years specializing in Cloud operations, DevOps practices, site reliability and Cloud Security.
                        I have experience in several CI/CD frameworks, IaC using Terraform, Kubernetes and other hosting solutions in AWS and Azure, Git and other tools. I am a quick learner and I am always looking to expand my knowledge and skill set.
                        I am a team player and I am excited to work with others to scale projects and automate processes.
                    </p>
                    <div className="flex flex-row mt-8">
                        <TabButton 
                            selectTab={() => handleTabChange("skills")} 
                            active={tab==="skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("events")} 
                            active={tab==="events"}>
                            {" "}
                            Events{" "}
                        </TabButton>
                        <TabButton 
                            selectTab={() => handleTabChange("certs")} 
                            active={tab==="certs"}>
                            {" "}
                            Awards and Certifications{" "}
                        </TabButton>
                    </div>
                    <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
        )
}

export default AboutSection