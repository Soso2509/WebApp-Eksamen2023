"use client"

import { useState } from "react"

import UsersGoal from "./UsersGoal"

const UserCompetition = () => {
    const [competitions, setCompetitions] = useState([])
    const [newCompetition, setNewCompetition] = useState({date: "", name: "", place:"", goal: "", type: "", priority:"", comment:""}) 

    const getCompetitions = () => {
        // api get request
    }


    const submitCompetition = () => {
        // competitions.length >= 3 ? document.getElementById("3CompetitionsMax")?.innerText = "Du har nåt 3 kunkuranser maximummet" : ;
        //Api post
    }

    const handleDateChange = (e: string) => {
        setNewCompetition({...newCompetition, date: e.target.value})
        console.log("Change date ", e.target.value)
    }

    const handleNameChange = (e: string) => {
        setNewCompetition({...newCompetition, name: e.target.value})
        console.log("Change name ", e.target.value)
    }

    const handlePlaceChange = (e: string) => {
        setNewCompetition({...newCompetition, place: e.target.value})
        console.log("Change place ", e.target.value)
    }

    const handleGoalChange = (e: string) => {
        setNewCompetition({...newCompetition, goal: e.target.value})
        console.log("Change goal ", e.target.value)
    }

    const handleTypeChange = (e: string) => {
        setNewCompetition({...newCompetition, type: e.target.value})
        console.log("Change type ", e.target.value)
    }

    const handlePriorityChange = (e: string) => {
        setNewCompetition({...newCompetition, priority: e.target.value})
        console.log("Change priority ", e.target.value)
    }

    const handleCommentChange = (e: string) => {
        setNewCompetition({...newCompetition, comment: e.target.value})
        console.log("Change comment ", e.target.value)
    }

    return (
        <div>
            <h1>Konkuranser</h1>
            <h2 id="3CompetitionsMax"></h2>
            <form OnSubmit={submitCompetition} className="flex flex-col max-w-4xl justify-center">
            <label htmlFor="date">Dato: </label>
                    <input type="date" id="date" 
                    onChange={handleDateChange} 
                    value={newCompetition.date} 
                    className="text-black" />

                    <label htmlFor="name">Navn: </label>
                    <input type="text" id="name" 
                    onChange={handleNameChange} 
                    value={newSession.name} 
                    placeholder="Skriv inn navn"
                    className="text-black" />

                    <label htmlFor="place">Sted(adresse): </label>
                    <input type="text" id="place" 
                    onChange={handlePlaceChange} 
                    value={newSession.place} 
                    placeholder="Skriv inn sted"
                    className="text-black" />

                    <label htmlFor="goal">Mål til konuransen: </label>
                    <textarea id="goal" 
                    onChange={handleGoalChange} 
                    value={newSession.goal} 
                    placeholder="Skriv inn dine mål"
                    className="text-black"></textarea> 

                    <label htmlFor="type">Type konkuranse: </label>
                    <input type="text" id="type" 
                    onChange={handleTypeChange} 
                    value={newSession.type} 
                    placeholder="Skriv inn type konkuranse"
                    className="text-black" />

                    <label htmlFor="priority">Prioritet: </label>
                    <select name="priority" id="priority" 
                    onChange={handlePriorityChange} 
                    value={newAthlete.sport}>
                        <option value="" disabled selected>Velg prioritet</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select> 

                    <label htmlFor="type">Kommentar: </label>
                    <input type="text" id="comment" 
                    onChange={handleCommentChange} 
                    value={newSession.comment} 
                    placeholder="Skriv inn kommentar"
                    className="text-black" />
            </form>
        </div>

    )
}

export default UserCompetition