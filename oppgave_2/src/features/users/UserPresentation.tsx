const UserPresentation = ({ setNewTest, newTest }) => {
  const handlePulsChange = (e: number) => {
    setNewTest({ ...newTest, puls: e.target.value })
    console.log("Change Puls ", e.target.value)
  }

  const handleWattChange = (e: number) => {
    setNewTest({ ...newTest, watt: e.target.value })
    console.log("Change Watt ", e.target.value)
  }

  const handleSpeedChange = (e: number) => {
    setNewTest({ ...newTest, speed: e.target.value })
    console.log("Change Speed ", e.target.value)
  }

  return (
    <>
      <h2 className="mt-10">Utøvers presantasjon</h2>
      <label htmlFor="puls">Maksimal hjertefrekvens(puls)</label>
      <input type="number" id="puls" name="puls" value={newTest.puls} onChange={handlePulsChange} />
      <label htmlFor="watt">Maksimal Watt (Power)</label>
      <input type="number" id="watt" name="watt" value={newTest.watt} onChange={handleWattChange} />
      <label htmlFor="speed">Maksimal Fart (Speed)</label>
      <input
        type="number"
        id="speed"
        name="speed"
        value={newTest.speed}
        onChange={handleSpeedChange}
      />

      <table>
        <tr>
          <th>Stat/Sone</th>
          <th>Max</th>
          <th>Intensitetsone 1</th>
          <th>Intensitetsone 2</th>
          <th>Intensitetsone 3</th>
          <th>Intensitetsone 4</th>
          <th>Intensitetsone 5</th>
        </tr>
        <tr>
          <td>
            <b>Maxpuls</b>
          </td>
          <td>{newTest.puls}</td>
          <td>{Math.round(newTest.puls * 0.5)}</td>
          <td>{Math.round(newTest.puls * 0.6)}</td>
          <td>{Math.round(newTest.puls * 0.7)}</td>
          <td>{Math.round(newTest.puls * 0.8)}</td>
          <td>{Math.round(newTest.puls * 0.9)}</td>
        </tr>
        <tr>
          <td>
            <b>Max Watt</b>
          </td>
          <td>{Math.round(newTest.watt)}</td>
          <td>{Math.round(newTest.watt * 0.5)}</td>
          <td>{Math.round(newTest.watt * 0.6)}</td>
          <td>{Math.round(newTest.watt * 0.7)}</td>
          <td>{Math.round(newTest.watt * 0.8)}</td>
          <td>{Math.round(newTest.watt * 0.9)}</td>
        </tr>
        <tr>
          <td>
            <b>Max Fart</b>
          </td>
          <td> {Math.round(newTest.speed)}</td>
          <td>{Math.round(newTest.speed * 0.5)}</td>
          <td>{Math.round(newTest.speed * 0.6)}</td>
          <td>{Math.round(newTest.speed * 0.7)}</td>
          <td>{Math.round(newTest.speed * 0.8)}</td>
          <td>{Math.round(newTest.speed * 0.9)}</td>
        </tr>
      </table>

      {/* <h2 className="mt-10">Utøvers presantasjon</h2>
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
        </select> */}
    </>
  )
}

export default UserPresentation
