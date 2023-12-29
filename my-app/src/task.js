import React, { useState } from 'react';

function Input() {
  const [wordInputs, setWordInputs] = useState(['']); 
  const handleInputChange = (index, value) => {
    const newWordInputs = [...wordInputs];
    newWordInputs[index] = value;

    if (index === wordInputs.length - 1 && value.trim() !== '') {
      newWordInputs.push('');
    }

    setWordInputs(newWordInputs);
  };

  return (
    <div className="position-absolute top-50 start-50 translate-middle"
    >
      <h1>Input </h1>
      {wordInputs.map((word, index) => (
        <div key={index}>
          <label>
            Word:
            <input
              type="text"
              value={word}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          </label>
        </div>
      ))}
     
    </div>
  );
}

export default Input;