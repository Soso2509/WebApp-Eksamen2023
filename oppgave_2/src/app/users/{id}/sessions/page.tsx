"use client"

import UsersItemCards from "@/features/users/UsersItemCards"
import UsersSessionsForm from "@/features/users/UsersSessionsForm"
import { useEffect, useState } from "react"

const SessionsPage = () => {
    
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