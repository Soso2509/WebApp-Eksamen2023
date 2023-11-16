import React from 'react';

type TaskOperationType = {
    selectedOperationType: string;
    handleTypeChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
const TaskTypeDropdown  = ({ selectedOperationType, handleTypeChange }: TaskOperationType) => {

    return (
        <div>
            <div>
                <label htmlFor="operationType">Velg oppgavetype:</label>
            </div>
            <select id="operationType" value={selectedOperationType} onChange={handleTypeChange}>
                <option value="add">Addisjon</option>
                <option value="divide">Divisjon</option>
                <option value="multiply">Multiplikasjon</option>
                <option value="subtract">Subtraksjon</option>
            </select>
        </div>
    );

}
export default TaskTypeDropdown ;