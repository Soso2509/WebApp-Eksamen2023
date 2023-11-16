"use client"

import { useState } from "react"





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

    const handleFirstNameChange = (e: string) => {
        setNewAthlete({...newAthlete, firstname: e.target.value})
        console.log("Change Athleate ", e.target.value)
    }
    const handleLastNameChange = (e: string) => {
        setNewAthlete({...newAthlete, lastname: e.target.value})
        console.log("Change Athleate ", e.target.value)
    }

    const handleGenderChange = (e: string) => {
        setNewAthlete({...newAthlete, gender: e.target.value})
        console.log("Change Gender ", e.target.value)
    }
    
    const handleSportChange = (e: string) => {
        setNewAthlete({...newAthlete, sport: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handlePulsChange = (e: string) => {
        setNewTest({...newTest, puls: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handleWattChange = (e: string) => {
        setNewTest({...newTest, watt: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handleFartChange = (e: string) => {
        setNewTest({...newTest, fart: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    console.log(newAthlete)
    console.log(newTest)

    

    return (
        <div className="mx-20">
            <h1>Opprett bruker</h1>
            <form onSubmit={submitAthlete}
            className="flex flex-col max-w-4xl justify-center">
                <label htmlFor="firstname">Fornavn: </label>
                <input type="text" id="firstname" 
                onChange={handleFirstNameChange} 
                value={newAthlete.firstname} 
                placeholder="Skriv inn fult navn"
                className="text-black" />

                <label htmlFor="lastname">Etternavn: </label>
                <input type="text" id="lastname" 
                onChange={handleLastNameChange} 
                value={newAthlete.lastname} 
                placeholder="Skriv inn fult navn"
                className="text-black" />

                <label htmlFor="gender">Kjønn: </label>
                <select name="gender" id="gender" 
                onChange={handleGenderChange} 
                value={newAthlete.gender}>
                    <option value="" disabled selected>Velg kjønn</option>
                    <option value="man">Man</option>
                    <option value="kvinne">Kvinne</option>
                    <option value="annet">Annet</option>
                </select>
                    
                <label htmlFor="sport">Sport: </label>
                <select name="sport" id="sport" 
                onChange={handleSportChange} 
                value={newAthlete.sport}>
                    <option value="" disabled selected>Velg sport</option>
                    <option value="løp">Løp</option>
                    <option value="sykkel">Sykkel</option>
                    <option value="ski">Ski</option>
                    <option value="triatlon">Triatlon</option>
                    <option value="svømming">Svømming</option>
                    <option value="styrke">Styrke</option>
                    <option value="annet">Annet</option>
                </select>   

                <h2 className="mt-10">Utøvers presantasjon</h2>     

                <label htmlFor="puls">Maksimal hjertefrekvens(puls)</label>
                <select name="puls" id="puls"
                className=" block whitespace-normal border-0	justify-between" 
                onChange={handlePulsChange} 
                value={newAthlete.puls}
                multiple size="3">
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-100 hover:border-2 checked:bg-blue-500" value="50%">50%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-200 hover:border-2 checked:bg-blue-500" value="60%">60%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-300 hover:border-2 checked:bg-blue-500" value="70%">70%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-400 hover:border-2 checked:bg-blue-500" value="80%">80%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-500 hover:border-2 checked:bg-blue-500" value="90%">90%</option>
                </select>

                <label htmlFor="watt">Terkselwatt</label>
                <select name="watt" id="watt"
                className=" block whitespace-normal border-0	justify-between" 
                onChange={handleWattChange} 
                value={newAthlete.watt}
                multiple size="3">
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-100 hover:border-2 checked:bg-blue-500 " value="50%">50%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-200 hover:border-2 checked:bg-blue-500" value="60%">60%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-300 hover:border-2 checked:bg-blue-500" value="70%">70%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-400 hover:border-2 checked:bg-blue-500" value="80%">80%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-500 hover:border-2 checked:bg-blue-500" value="90%">90%</option>
                </select>

                <label htmlFor="fart">Terkselfart</label>
                <select name="fart" id="fart"
                className=" block whitespace-normal border-0	justify-between" 
                onChange={handleFartChange} 
                value={newAthlete.fart}
                multiple size="3">
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-100 hover:border-2 checked:bg-blue-500" value="50%">50%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-200 hover:border-2 checked:bg-blue-500" value="60%">60%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-300 hover:border-2 checked:bg-blue-500" value="70%">70%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-400 hover:border-2 checked:bg-blue-500" value="80%">80%</option>
                    <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-500 hover:border-2 checked:bg-blue-500" value="90%">90%</option>
                </select>

                <button type="submit" className="bg-slate-300 p-1.5 mx-1 rounded-md flex mt-2 max-w-fit	p-1 ">Leg til ny Utøver</button>
            </form>
        </div>
    )
    
}

export default CreateUser