const UserPresentation = ({setNewTest, newTest}) => {
    const handlePulsChange = (e: string) => {
        setNewTest({...newTest, puls: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handleWattChange = (e: string) => {
        setNewTest({...newTest, watt: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handleSpeedChange = (e: string) => {
        setNewTest({...newTest, speed: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    return (
        <>
        <h2 className="mt-10">Utøvers presantasjon</h2>     
        <label htmlFor="puls">Maksimal hjertefrekvens(puls)</label>
        <p>Valgt: {newTest.puls}</p>
        <select name="puls" id="puls"
        className=" block whitespace-normal border-0 justify-between h-16" 
        onChange={handlePulsChange} 
        value={newTest.puls}
        multiple size="3">
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-100 hover:border-2 checked:bg-blue-500" value="50%">50%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-200 hover:border-2 checked:bg-blue-500" value="60%">60%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-300 hover:border-2 checked:bg-blue-500" value="70%">70%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-400 hover:border-2 checked:bg-blue-500" value="80%">80%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-500 hover:border-2 checked:bg-blue-500 color:white" value="90%">90%</option>
        </select>

        <label htmlFor="watt">Terkselwatt</label>
        <p>Valgt: {newTest.watt}</p>
        <select name="watt" id="watt"
        className=" block whitespace-normal border-0 justify-between  h-16" 
        onChange={handleWattChange} 
        value={newTest.watt}
        multiple size="3">
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-100 hover:border-2 checked:bg-blue-500 " value="50%">50%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-200 hover:border-2 checked:bg-blue-500" value="60%">60%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-300 hover:border-2 checked:bg-blue-500" value="70%">70%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-400 hover:border-2 checked:bg-blue-500" value="80%">80%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-500 hover:border-2 checked:bg-blue-500" value="90%">90%</option>
        </select>

        <label htmlFor="speed">Terkselspeed</label>
        <p>Valgt: {newTest.speed}</p>
        <select name="speed" id="speed"
        className=" block whitespace-normal border-0 justify-between h-16" 
        onChange={handleSpeedChange} 
        value={newTest.speed}
        multiple size="3">
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-100 hover:border-2 checked:bg-blue-500" value="50%">50%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-200 hover:border-2 checked:bg-blue-500" value="60%">60%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-300 hover:border-2 checked:bg-blue-500" value="70%">70%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-400 hover:border-2 checked:bg-blue-500" value="80%">80%</option>
            <option className="inline-block w-50px m-1 px-3 rounded-md bg-slate-500 hover:border-2 checked:bg-blue-900" value="90%">90%</option>
        </select></>
    )
}

export default UserPresentation