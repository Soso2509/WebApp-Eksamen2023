"use client"
import { useEffect, useState } from "react"

const UsersList = () => {
    const[users, setUsers] = useState([])

    useEffect(() => {
      const getData = async () => {
        const response = await fetch("https://webapp-api.vercel.app/api/users", { method: "get" })
        const result = await response.json()
        setUsers(result)
      }
      getData()
    }, [])
  
    console.log(users.map(e => e))
  
      return (
        <div>
            {/* {map.users(e => { */}
              <table>
                <thead>
                  <th>Id</th>
                  <th>Session legth</th>
                  <th>...</th>
                </thead>
                <tbody>
                  <tr key={}>
                    <td>...id</td>
  
                  </tr>
                </tbody>
              </table>
            {/* })}  */}
        </div>
        
      )

}

export default UsersList