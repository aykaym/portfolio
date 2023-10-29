'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from "./ProjectTag"
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Portfolio to showcase professional projects",
        image: "/images/projects/portfolio.jpg",
        gitUrl: "https://github.com/aykaym/portfolio",
        previewUrl: "/",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "DocuChat",
        description: "Talk to any pdf file using AI to analyse documents",
        image: "/images/projects/docuchat.jpg",
        gitUrl: "https://github.com/aykaym/DocuChat",
        previewUrl: "https://docuchat.battletoadsenthusiast.com",
        tag: ["All", "AI"]
    },
    {
        id: 3,
        title: "Accord",
        description: "Messaging, video and audio capable discord clone. Work In Progress",
        image: "/images/projects/accord.jpg",
        gitUrl: "https://github.com/aykaym/Accord",
        previewUrl: "/",
        tag: ["All", "Web"]
    },
    {
        id: 4,
        title: "Port scanner",
        description: "Lightweight multithreaded port scanner to scan for open ports",
        image: "/images/projects/portscanner.jpg",
        gitUrl: "https://github.com/aykaym/portscanner",
        previewUrl: "/",
        tag: ["All", "Utilities"]
    },
    {
        id: 5,
        title: "SSH Bruteforcer",
        description: "Lightweight multithreaded SSH bruter meant to test for default SSH passwords",
        image: "/images/projects/sshbrute.jpg",
        gitUrl: "https://github.com/aykaym/sshbrute",
        previewUrl: "/",
        tag: ["All", "Utilities"]
    },
    {
        id: 6,
        title: "Stock trading tools",
        description: "Rudimentary trading analysis and trading bots experimentation",
        image: "/images/projects/tradingtools.jpg",
        gitUrl: "https://github.com/aykaym/trading_tools",
        previewUrl: "/",
        tag: ["All", "Utilities"]
    },
    {
        id: 7,
        title: "Game Deals Bot",
        description: "Discord bot that reports on new deals on videogames",
        image: "/images/projects/gamedeals.jpg",
        gitUrl: "https://github.com/aykaym/gamedealsbot",
        previewUrl: "/", 
        tag: ["All", "Utilities"]
    },
    {
        id: 8,
        title: "JackerTracker",
        description: "Remote Administration Tool executable to be run on victim machines to track and dump other payloads",
        image: "/images/projects/jackertracker.jpg",
        gitUrl: "https://gitlab.com/aykay/jackertracker",
        previewUrl: "/",
        tag: ["All", "Web", "Utilities"]
    },
    {
        id: 9,
        title: "TrackerJacker",
        description: "Command and Control server for the JackerTracker project",
        image: "/images/projects/trackerjacker.jpg",
        gitUrl: "https://gitlab.com/aykay/trackerjacker",
        previewUrl: "/",
        tag: ["All", "Utilities"]
    },
    {
        id: 10,
        title: "Terraform Azure Template",
        description: "Easily stamp out generic Azure architectures with Terrafrom",
        image: "/images/projects/terraform.jpg",
        gitUrl: "https://gitlab.com/aykay/tf-azure-template",
        previewUrl: "/",
        tag: ["All", "Utilities"]
    }
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    
    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    )

    const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag onClick={handleTagChange} name="All" isSelected={ tag === "All" } />
                <ProjectTag onClick={handleTagChange} name="Web" isSelected={ tag === "Web" } />
                <ProjectTag onClick={handleTagChange} name="AI" isSelected={ tag === "AI" } />
                <ProjectTag onClick={handleTagChange} name="Utilities" isSelected={ tag === "Utilities" } />

            </div>
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCard 
                            key={project.id} 
                            title={project.title} 
                            description={project.description} 
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl} 
                        />
                    </motion.li>
                ))}
            </ul>
        </>
    )
}

export default ProjectSection