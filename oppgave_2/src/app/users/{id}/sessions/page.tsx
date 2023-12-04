"use client"

import UserSessionsTabel from "@/features/users/UserSessionsTabel"
import UsersItemCards from "@/features/users/UsersItemCards"
import UserQuestions from "@/features/users/UsersQuestions"
import UsersSessionsForm from "@/features/users/UsersSessionsForm"
import { useEffect, useState } from "react"

const SessionsPage = () => {
    
    return (
        <div>
            <UserSessionsTabel/>
            <UsersSessionsForm/> 
            <UserQuestions/> {/* Kansje flytt inn isessions så de henger sammen?? */}
        
        </div>
        
    )

}

export default SessionsPage