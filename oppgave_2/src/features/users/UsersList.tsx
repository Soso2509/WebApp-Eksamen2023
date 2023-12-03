"use client"
import { useEffect, useState } from "react"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

import * as userService from '@/features/users/User.service'

const UsersList = () => {
    const[users, setUsers] = useState([])


    useEffect(() => {
      const getData = async () => {
        const response = await fetch("/api/users", { method: "get" })
        const result = await response.json()
        setUsers(result)
      }
      getData()
    }, [])
  
    console.log(users)
  
      return 
        // <div>
        //     {/* {map.users(e => { */}
        //       <table>
        //         <thead>
        //           <th>Id</th>
        //           <th>Session legth</th>
        //           <th>...</th>
        //         </thead>
        //         <tbody>
        //           <tr key={}>
        //             <td>...id</td>
  
        //           </tr>
        //         </tbody>
        //       </table>
        //     {/* })}  */}
        // </div>
        
      

}

export default UsersList