"use client"

import UsersItemCards from "@/features/users/UsersItemCards"
import UsersSessionsForm from "@/features/users/UsersSessionsForm"
import { useEffect, useState } from "react"

const SessionsPage = () => {
    const [yourSessions, setYourSessions] = useState({}) //get sessions from API

    useEffect(() => {
        const getSessions = async () => {
            const response = await fetch("https://webapp-api.vercel.app/api/users", { method: "get" })
            const result = await response.json()
            setYourSessions(result)
        }
        getSessions()
    }, [])

    return (
        <div>
            <h1>Dine eksisterened sessions</h1>
            {yourSessions.map( (items) => {
                <UsersItemCards items={items} />
            }
            )}
            <UsersSessionsForm/>
        
        </div>
        
    )

}

export default SessionsPage