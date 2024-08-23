import React from 'react';

const GenStep3 = ({ formData, setFormData, prevStep, nextStep }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <h3>Introducción del Password</h3>
            <label>color:</label>
            <input
                type="color"
                value={formData.color}
                onChange={(e) => setFormData({ ...formData, color: e.target.value })}
            />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};
export default GenStep3;