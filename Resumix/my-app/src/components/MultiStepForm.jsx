    import React, { useState } from 'react';
    import Templates from './Templates'
    import ResumeForm from './ResumeForm';
    import ProgressBar from './ProgressTracker'; 

    function MultiStepForm() {
      const [currentStep, setCurrentStep] = useState(1);
      const totalSteps = 3; 

      const handleNext = () => {
        
        setCurrentStep(prevStep => prevStep + 1);
      };

      const handlePrevious = () => {
        setCurrentStep(prevStep => prevStep - 1);
      };

      return (
        <div>
          <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />
          {currentStep === 1 && <ResumeForm />}
          {currentStep === 2 && <Templates />}
          {currentStep === 3 && <div>Final Step Content</div>}

          {currentStep > 1 && <button onClick={handlePrevious}>Previous</button>}
          {currentStep < totalSteps && <button onClick={handleNext}>Next</button>}
          {currentStep === totalSteps && <button type="submit">Submit</button>}
        </div>
      );
    }

    export default MultiStepForm;