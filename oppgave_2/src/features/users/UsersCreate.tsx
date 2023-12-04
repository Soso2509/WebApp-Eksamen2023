import UserPresentation from "./UserPresentation"

const UserCreate = ({newAthlete, setNewAthlete, newTest, setNewTest, submitAthlete}) => {


    const handleGenderChange = (e: string) => {
        setNewAthlete({...newAthlete, gender: e.target.value})
        console.log("Change Gender ", e.target.value)
    }

    const handleSportChange = (e: string) => {
        setNewAthlete({...newAthlete, sport: e.target.value})
        console.log("Change Sport ", e.target.value)
    }






    return (
        <div className="mx-20">
            <h1>Opprett bruker</h1>
            <form onSubmit={submitAthlete}
            className="flex flex-col max-w-4xl justify-center">

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

                <UserPresentation setNewTest={setNewTest} newTest={newTest}/>

                <button type="submit" className="bg-slate-300 p-1.5 mx-1 rounded-md flex mt-2 max-w-fit	p-1 ">Leg til ny Utøver</button>
            </form>
        </div>
    )
}

export default UserCreate