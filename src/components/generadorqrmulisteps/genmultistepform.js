import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import GenStep1 from './genstep1';
import GenStep2 from './genstep2';
import GenStep3 from './genstep3';
import GenStep4 from './genstep4';


const GenMultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const submitForm = () => {
        // Aquí puedes manejar la lógica de envío del formulario
        console.log('Formulario enviado', formData);
    };

    switch (step) {
        case 1:
            return <GenStep1 formData={formData} setFormData={setFormData} nextStep={nextStep} />;
        case 2:
            return <GenStep2 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <GenStep3 formData={formData} setFormData={setFormData} nextStep={nextStep} prevStep={prevStep} />;
        case 4:
            return <GenStep4 formData={formData} prevStep={prevStep} submitForm={submitForm} />;
        default:
            return <div>Error: paso no válido</div>;
    }
};

export default GenMultiStepForm;