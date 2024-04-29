"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface Props {
    children: React.ReactNode
}
const ClientProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>
}

export default ClientProvider