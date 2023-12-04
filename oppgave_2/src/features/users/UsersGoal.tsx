"use client"

import { useState } from "react"

const UserGoal = () => {
    const [goal, setGoal] = useState([])
    const [newGoal, setNewGoal] = useState({date: "", name: "", goal: "", comment: ""})

    const getGoals = () => {
        // api get request
    }

    const submitGoal = () => {
        // competitions.length >= 3 ? document.getElementById("3GoalMax")?.innerText = "Du har nåt 3 treningsmål maximummet" : ;
        //Api post
    }


    const handleDateChange = (e: string) => {
        setNewGoal({...newGoal, date: e.target.value})
        console.log("Change date ", e.target.value)
    }

    const handleNameChange = (e: string) => {
        setNewGoal({...newGoal, name: e.target.value})
        console.log("Change name ", e.target.value)
    }

    const handleGoalChange = (e: string) => {
        setNewGoal({...newGoal, goal: e.target.value})
        console.log("Change goal ", e.target.value)
    }

    const handleCommentChange = (e: string) => {
        setNewGoal({...newGoal, comment: e.target.value})
        console.log("Change comment ", e.target.value)
    }

    return (
        <div>
            <h1>Treningsmål</h1>
            <h2 id="3GoalMax"></h2>
            <form OnSubmit={submitGoal} className="flex flex-col max-w-4xl justify-center">
                <label htmlFor="date">Dato: </label>
                <input type="date" id="date" 
                onChange={handleDateChange} 
                value={newGoal.date} 
                className="text-black" />

                <label htmlFor="name">Navn: </label>
                <input type="text" id="name" 
                onChange={handleNameChange} 
                value={newGoal.name} 
                placeholder="Skriv inn navn"
                className="text-black" />

                <label htmlFor="goal">Antall mål: </label>
                <textarea id="goal" 
                onChange={handleGoalChange} 
                value={newGoal.goal} 
                placeholder="Skriv inn antall mål"
                className="text-black"></textarea> 

                <label htmlFor="type">Kommentar: </label>
                <input type="text" id="comment" 
                onChange={handleCommentChange} 
                value={newGoal.comment} 
                placeholder="Skriv inn kommentar"
                className="text-black" />
            </form>
                    
            
        </div>

    )
}

export default UserGoal