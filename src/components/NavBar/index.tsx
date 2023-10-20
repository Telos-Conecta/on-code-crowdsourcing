'use client'

import { Icon } from "@iconify/react/dist/iconify.js"

const NavBar = () => {
    return (
        <div className="bg-black-color text-white p-4">
            <div className="container">
                <h1 className="text-xl font-semibold">
                    <Icon icon="uil:home-alt" width="32px" />
                </h1>
            </div>
        </div>
    )
}

export default NavBar