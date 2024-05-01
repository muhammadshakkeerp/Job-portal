"use client"
import { Session } from "next-auth"
import Image from "next/image"
import { signOut } from "next-auth/react"
import { useState } from "react"

interface Props {
    session: Session
}
const User = ({ session }: Props) => {
    const [showLogout, setShowLogout] = useState(false)
    return (
        <div>
            {session?.user?.image && <div onClick={() => setShowLogout(!showLogout)} className="flex flex-col items-center justify-center relative">
                <Image src={session.user.image} alt="logged_img" className="rounded-full" width={50} height={50} />
                <span className="hidden sm:block sm:text-xs">{session?.user?.name}</span>

                {showLogout && <button
                    onClick={() => signOut({ callbackUrl: `${process.env.NEXT_PUBLIC_URL}/signup` })} className="hidden sm:block absolute -bottom-6">Logout</button>}

            </div>}

        </div>
    )
}

export default User