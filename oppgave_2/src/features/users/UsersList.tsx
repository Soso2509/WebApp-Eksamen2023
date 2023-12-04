"use client"
import { useEffect, useState } from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

import * as userService from '@/features/users/User.service'
import { Link } from "lucide-react"
import { usePathname } from "next/navigation"

// async function getUsers(){
//       const user = await prisma.user.findMany({

//       })
//       return user;
//     }
  
const UsersList = () => {
    const[users, setUsers] = useState([])
    const pathname = usePathname()
  
    const checkActivePath = (path: string) => {
      return path === pathname
    }
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

    console.log(users.users)
    
      return (
        <div className="ml-10">
          <table className="text-left">
            <thead className="mx-1 bg-slate-200	">
              <th className="pr-10 border-2	border-slate-300">Id</th>
              <th className="pr-10 border-2	border-slate-300">userID</th>
              <th className="pr-10 border-2	border-slate-300">Gender</th>
              <th className="pr-10 border-2	border-slate-300">Sport</th>
              <th className="pr-10 border-2	border-slate-300">Legg til ny økt</th>
              <th className="pr-10 border-2	border-slate-300">Legg til ny konkuranse</th>
            </thead>
            <tbody>
              <tr key="ID" className="">
                <td className="pr-10 border-2	">En ID</td>
                <td className="pr-10 border-2	">En userID</td>
                <td className="pr-10 border-2	">Brukerens kjønn</td>
                <td className="pr-10 border-2	">Sporten til brukeren</td>
                <td className="pr-10 border-2	" >Link til å lag økt</td> 
                <td className="pr-10 border-2	">Lag ny konkuranse link</td>
                {/* {users.users.map(e => <td className="mr-2.5">{e.id}</td>)} */}
              </tr>
            </tbody>
          </table>
        </div>
        )
      

}

export default UsersList