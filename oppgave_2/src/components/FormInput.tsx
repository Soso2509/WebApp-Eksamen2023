 //FUNKER IKKE
 
const FormInput = ({newElement, setNewElement, element, title}) => {

    const handleChange = (e: string) => {
        setNewElement({...newElement, {element}: e.target.value})
        console.log(`Change ${element} `, e.target.value)
    }

    return (
        <>
        <label htmlFor={element}>{title}: </label>
            <input type="text" id={element} 
            onChange={handleChange} 
            value={newElement.element} 
            placeholder="Hvor mange spørsmål ønsker du?"
            className="text-black" />
        </>
            
    )
}

export default FormInput