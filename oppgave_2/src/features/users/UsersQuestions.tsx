"use client"
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

const UserQuestions = () => {
    const [questions, setQuestions] = useState({id:"", question:"", type:""})

    console.log(questions)

    const submitQuestion = () => {
        setQuestions({...questions, id: uuidv4()})
        //push too api
    }

    const handleQuestionChange = (e: string) => {
        setQuestions({...questions, question: e.target.value})
        console.log("Change question ", e.target.value)
    }

    const handleTypeChange = (e: string) => {
        setQuestions({...questions, type: e.target.value})
        console.log("Change type ", e.target.value)
    }

    return (
        <div>
            <h2>Legg til spørsmål</h2>
            <form onSubmit={submitQuestion}
            className="flex flex-col max-w-4xl justify-center">
                <label htmlFor="question">Skriv inn nytt spørsmål</label>
                <textarea id="question" 
                onChange={handleQuestionChange} 
                value={questions.questions} 
                placeholder="Skriv inn nytt spørsmål"
                className="text-black"></textarea>

                <label htmlFor="type">Type svar</label>
                <select name="type" id="type"
                onChange={handleTypeChange} 
                value={questions.type} 
                placeholder="Skriv inn nytt spørsmål"
                className="text-black">
                    <option value="radio:range">Radio med tallene 1-10</option>
                    <option value="radio:mood">Radio med emojier.</option>
                    <option value="text">Tekst</option>
                </select>
            </form>
             
        </div>
        
    )
}

export default UserQuestions