"use client"
import { Session } from "next-auth"
import Image from "next/image"

interface Props {
    session: Session
}
const User = ({ session }: Props) => {
    return (
        <div>
            {session?.user?.image && <Image src={session.user.image} alt="logged_img" className="rounded-full" width={50} height={50} />}
        </div>
    )
}

export default User