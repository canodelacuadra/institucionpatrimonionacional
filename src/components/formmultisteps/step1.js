import React from 'react';

const Step1 = ({ formData, setFormData, nextStep }) => {
    return (
        <div>
            <h2>Step 1</h2>
            <h3>Introducción del Nombre</h3>
            <label>Name:</label>
            <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

export default Step1;