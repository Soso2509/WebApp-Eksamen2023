"use client"
import { useEffect, useState } from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

import * as userService from '@/features/users/User.service'
import { Link } from "lucide-react"

// async function getUsers(){
//       const user = await prisma.user.findMany({

//       })
//       return user;
//     }
  
const UsersEditList = () => {
    const[users, setUsers] = useState([])
  //const user = await getUsers()

    useEffect(() => {
      const getData = async () => {
        const response = await fetch("/api/users", { method: "get" })
        const result = await response.json()
        setUsers(result)
      }
      getData()
    }, [])

    //map funker ikke
    //users.users[0].map((e) => console.log(e))

    console.log(users)
    
      return (
        <div className="ml-10">
          <table className="text-left">
            <thead className="mx-1 bg-slate-200	">
              <th className="pr-10 border-2	border-slate-300">Id</th>
              <th className="pr-10 border-2	border-slate-300">userID</th>
              <th className="pr-10 border-2	border-slate-300">Gender</th>
              <th className="pr-10 border-2	border-slate-300">Sport</th>
              <th className="pr-10 border-2	border-slate-300">Økter</th>
              <th className="pr-10 border-2	border-slate-300">Konkuranser</th>
              <th className="pr-10 border-2	border-slate-300">Edit user</th>
            </thead>
            <tbody>
              <tr key="ID" className="">
                <td className="pr-10 border-2 align-text-top">En ID</td>
                <td className="pr-10 border-2 align-text-top">En userID</td>
                <td className="pr-10 border-2 align-text-top">Brukerens kjønn</td>
                <td className="pr-10 border-2 align-text-top">Sporten til brukeren</td>
                <td className="pr-10 border-2 align-text-top">
                    <ul>
                        <li>{/* Link */}Økt 1</li>
                        <li>Økt 2</li>
                        <li>Økt 3</li>
                    </ul></td> 
                <td className="pr-10 border-2 align-text-top">{/* Link */}Liste med konkuranser</td>
                {/* {users.users.map(e => <td className="mr-2.5">{e.id}</td>)} */}
                <td className="pr-10 border-2 align-text-top">{/* Link */}Edit</td>

              </tr>
            </tbody>
          </table>
        </div>
        )
      

}

export default UsersEditList