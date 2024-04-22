"use client"
import React from "react"
import Link from "next/link"

const Navbar : React.FunctionComponent = () => {
    return(
        <nav className="flex justify-center items-center mx-auto p-3 border-neutral-100 border-b-2">
            <ul className="flex gap-3">
                <Link href="/"><li>Todo</li></Link>
            </ul>
        </nav>
    )
}

export default Navbar;