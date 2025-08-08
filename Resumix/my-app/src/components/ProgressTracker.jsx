 import React from 'react';

    function ProgressTracker({ currentStep, totalSteps }) {
      const progressPercentage = (currentStep / totalSteps) * 100;
      return (
        <div style={{
           width: '50%', 
           height:'100%',
           backgroundColor: '#e0e0e0', 
           height: '20px',
           alignItems:'center',
          
           }}
        >
          <div
            style={{
              display:'flex',
              justifyContent:'center',
              alignItems:'center',
              width: `${progressPercentage}%`,
              backgroundColor: 'green',
               height: '50%',
               borderRadius: '200px',
            }}
          ></div>
        </div>
      );
    }

    export default ProgressTracker;
