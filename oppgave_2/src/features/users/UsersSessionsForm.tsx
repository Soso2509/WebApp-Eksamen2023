"use client"

import { useState } from "react"

const UsersSessionsForm = () => {
    const [newSession, setNewSession] = useState({date: "", name: "", tags:[], sport: "", questionAmount: Number, intervals:{duration: "", itensitet: ""}})

    const submitSession = () => {
        //api post request
    }

    const handleDateChange = (e: string) => {
        setNewSession({...newSession, date: e.target.value})
        console.log("Change date ", e.target.value)
    }

    const handleNameChange = (e: string) => {
        setNewSession({...newSession, name: e.target.value})
        console.log("Change name ", e.target.value)
    }

    //https://dev.to/0shuvo0/lets-create-an-add-tags-input-with-react-js-d29
    const handleTagKeyDown = (e: string) => {
        if(e.key !== 'Enter') return
        // Get the value of the input
        const value = e.target.value
        // If the value is empty, return
        if(!value.trim()) return
        // Add the value to the tags array
        setNewSession([...newSession, ...tags, tags: value])
        // Clear the input
        e.target.value = ''
    }

    const handleSportChange = (e: string) => {
        setNewSession({...newSession, sport: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handleQuestionAmountChange  = (e: number) => {
        setNewSession({...newSession, questionAmount: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handleDurationChange  = (e: String) => {
        setNewSession({...newSession, ...intervals, duration: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    const handleItensitetChange = (e: String) => {
        setNewSession({...newSession, ...intervals, intenitet: e.target.value})
        console.log("Change Sport ", e.target.value)
    }

    return (
        <>
            <button>Create new session</button>
            <div>
                {yourSessions.map((e) => (
                    <div className="conteiner">
                        <h2>{e.name}</h2>
                        <p>{e.date}</p>
                        <p>{e.activity}</p>
                        <div>{e.tags.map(e => <p>{e}, </p>)}</div>
                    </div>
                ))}
            </div>

            <div>
                <h1>Ny Session</h1>
                <form onSubmit={submitSession}
                className="flex flex-col max-w-4xl justify-center">
                    <label htmlFor="date">Dato: </label>
                    <input type="date" id="date" 
                    onChange={handleDateChange} 
                    value={newSession.date} 
                    className="text-black" />

                    <label htmlFor="name">Navn: </label>
                    <input type="text" id="name" 
                    onChange={handleNameChange} 
                    value={newSession.name} 
                    placeholder="Skriv inn økens navn"
                    className="text-black" />

                    {/* https://dev.to/0shuvo0/lets-create-an-add-tags-input-with-react-js-d29 */}
                    <label htmlFor="tags">Tags: </label>
                    <div>
                        {newSession.tags.map((e, i) => (
                            <div className="tag-item" key={i}>
                                <span className="text">{e}</span>
                                <span className="close">&times;</span>
                         </div>
                        ))}
                        <input onKeyDown={handleTagKeyDown} type="text" id="tags" placeholder="Type something"/>
                    </div>

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

                    <label htmlFor="questionAmount">QuestionAmount: </label>
                    <input type="number" id="questionAmount" 
                    onChange={handleQuestionAmountChange} 
                    value={newSession.questionAmount} 
                    placeholder="Hvor mange spørsmål ønsker du?"
                    className="text-black" />

                    <label htmlFor="duration">Intervall varighet: </label>
                    <input type="number" id="duration" 
                    onChange={handleDurationChange} 
                    value={newSession.intervals.duration} 
                    placeholder="min"
                    className="text-black" />

                    <label htmlFor="itensitet">Intervall varighet: </label>
                    <input type="number" id="itensitet" 
                    onChange={handleItensitetChange} 
                    value={newSession.intervals.itensitet} 
                    placeholder=""
                    className="text-black" />
                </form>
            </div>
        </>
    )
}

export default UsersSessionsForm