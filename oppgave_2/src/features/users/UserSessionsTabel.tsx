import { useEffect, useState } from "react"

const UserSessionsTabel = () => {
    const [yourSessions, setYourSessions] = useState({}) //get sessions from API

    useEffect(() => {
        const getSessions = async () => {
            const response = await fetch("https://webapp-api.vercel.app/api/users", { method: "get" })
            const result = await response.json()
            setYourSessions(result)
        }
        getSessions()
    }, [])

    return (
        <>
        <h2>Dine Økter</h2>
        <table>
            <thead>
                <th>Økt</th>
                {/* Få antall intervallene fom økten med flest intervaller på en måte */}
                <th>Intervall 1</th>
                <th>Intervall 2</th>
                <th>Intervall 3</th>
                <th>Intervall 4</th>
                <th>Intervall 5</th>
            </thead>
            <tbody>
                {/* hva enn ruta blir */.map( (e, i) => {
                    <tr key={i}>
                        <td>Økt{e.id}</td>
                        <td>
                            <table>
                                {e.map((x)=> {
                                    <th>x</th>
                                })}
                            </table>
                        </td>
                    </tr>
                }

                )}
            </tbody>
            
        </table>
        </>
    )
}

export default UserSessionsTabel