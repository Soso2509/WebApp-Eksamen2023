"use client"

import { useState } from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()


import UsersCreate from "@/features/users/UsersCreate"


const CreateUser = () => {
    const [newAthlete, setNewAthlete] = useState({ id: "", firstname: "", lastname:"", gender: "", sport: "" })
    const [newTest, setNewTest] = useState({puls: 200, watt: 50 , speed: 15})

   

    const submitAthlete = () => {
        //Vi har slitet med å hente og da pushe ut informasjon fra/til databasen, den fra oppgaven og andre ting vi har prøvet selv.

    }


    console.log(newAthlete)
    console.log(newTest)

    

    return (
        <UsersCreate newAthlete={newAthlete} setNewAthlete={setNewAthlete} newTest={newTest} setNewTest={setNewTest} submitAthlete={submitAthlete}/>
    )
    
}

export default CreateUser