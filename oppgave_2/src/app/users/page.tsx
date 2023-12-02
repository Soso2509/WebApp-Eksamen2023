"use client"
import { useEffect, useState } from "react"
import UsersNav from "../../components/UsersNav"

export default function Users() {
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
        <UsersNav /> 
          {/* {map.users(e => { */}
            <table>
              <thead>
                <th>Id</th>
                <th>Sessions.legth</th>
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