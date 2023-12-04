"use client"
import { useEffect, useState } from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

import * as userService from '@/features/users/User.service'

// async function getUsers(){
//       const user = await prisma.user.findMany({

//       })
//       return user;
//     }
  
const UsersList = () => {
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
    //users.users.map((e) => console.log(e))

    console.log(users.users)
    
      // return (
      //   <div>
      //     <table>
      //       <thead>
      //         <th>Id</th>
      //         <th>userID</th>
      //         <th>Gender</th>
      //         <th>Sport</th>
      //       </thead>
      //       <tbody>
      //         <tr>
      //           <td>{}</td>
      //         </tr>
      //       </tbody>
      //     </table>
      //   </div>
      //   )
      

}

export default UsersList