import React from 'react';

type NumberOfTaskProps = {
  countValue: string;
  onCountChange: (count: string) => void;
};

const NumberOfTask: React.FC<NumberOfTaskProps> = ({ countValue, onCountChange }) => {
  const handleCountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.replace(/\D/g, '');
    onCountChange(value);
  };

  const isInvalidCount = isNaN(Number(countValue)) || Number(countValue) < 1 || Number(countValue) > 10;
  const errorMessage = isInvalidCount ? 'Angi et antall oppgaver mellom 1 og 10.' : '';

  return (
    <div>
      <label htmlFor="taskCount">Angi ønsket antall oppgaver:</label>
      <input type="number" id="taskCount" value={countValue} onChange={handleCountChange} min="1" max="10" />
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default NumberOfTask;



















//import React from 'react';

// type NumberOfTaskProps = {
//   countValue: string;
//   onCountChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
// };

// const NumberOfTask: React.FC<NumberOfTaskProps> = ({ countValue, onCountChange }) => {
//   return (
//     <div>
//       <label htmlFor="taskCount">Angi ønsket antall oppgaver:</label>
//       <input type="number" id="taskCount" value={countValue} onChange={onCountChange} min="1" max="10"/>
//     </div>
//   );
// };

// export default NumberOfTask;
