import React from 'react';
import QRCodeGenerator from './qrcodegenerator';

const GenStep4 = ({ formData, prevStep, submitForm }) => {
    return (
        <div>
            <h2>Step 4</h2>
            <h3>Revisión y confirmación de los datos</h3>
            <ul>
                <li><strong>Data:</strong> {formData.data}</li>
                <li><strong>Size:</strong> {formData.size}</li>
                <li><strong>Color:</strong> {formData.color}</li>
            </ul>
            <button onClick={prevStep}>Back</button>
            <hr />
            <QRCodeGenerator data={formData.name} size={256} fgColor="#ff0000" />

            <button onClick={submitForm}>Submit</button>
        </div>
    );
};

export default GenStep4;