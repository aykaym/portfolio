import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="footer border border-top-[#33353F border-l-transparent border-r-transparent">
        <div className="container p-12 flex justify-between">
            <div className="flex flex-wrap items-center justify-between px-4">
                <Link href={"/"} className="font-semibold">
                    <div className="text-transparent text-3xl bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 font-semibold">
                        Andrew Farney
                    </div>
                    <div className="text-transparent text-lg bg-clip-text bg-gradient-to-br from-blue-400 to-green-400 font-semibold text-right">
                        CloudOps
                    </div>
                </Link>
            </div>
            <p className="text-slate-700 ">All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer