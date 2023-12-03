import { useEffect, useState } from "react"

const UserData = () => {
    const [user, setUser] = useState()

    useEffect(() => {
        const getData = async () => {
          const response = await fetch(`https://webapp-api.vercel.app/api/users/${id}`, { method: "get" })
          const result = await response.json()
          setUser(result)
        }
        getData()
      }, [])

    return (
        <div>
            <h2>{user.id</h2>
        </div>
    )
}