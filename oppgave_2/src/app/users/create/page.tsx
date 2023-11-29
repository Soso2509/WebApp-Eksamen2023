"use client"

import { useState } from "react"


import UsersCreate from "@/features/users/UsersCreate"



const CreateUser = () => {
    const [newAthlete, setNewAthlete] = useState({ id: "", firstname: "", lastname:"", gender: "", sport: "" })
    const [newTest, setNewTest] = useState({puls: "", watt: "", fart: ""})

    const newId = () => {
        //uuid?  https://www.uuidgenerator.net/dev-corner/javascript 
    }

    // app.get('https://webapp-api.vercel.app/api/users', async (req, res) => {
    //     const posts = await prisma.post.findMany({
    //       where: { published: true },
    //       include: { author: true },
    //     })
    //     res.json(posts)
    //   })

    const submitAthlete = () => {

    }


    console.log(newAthlete)
    console.log(newTest)

    

    return (
        <UsersCreate newAthlete={newAthlete} setNewAthlete={setNewAthlete} newTest={newTest} setNewTest={setNewTest} submitAthlete={submitAthlete}/>
    )
    
}

export default CreateUser