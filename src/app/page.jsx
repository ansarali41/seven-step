'use client';
import Step1 from '@/components/Step1';
import Step2 from '@/components/Step2';
import Step3 from '@/components/Step3';
import Step4 from '@/components/Step4';
import Step5 from '@/components/Step5';
import Step6 from '@/components/Step6';
import Step7 from '@/components/Step7';
import Welcome from '@/components/Welcome';
import { createContext, useState } from 'react';
export const StepContext = createContext();

export default function Home() {
    const [step, setStep] = useState(0);

    const renderStep = stepNumber => {
        switch (stepNumber) {
            case 0:
                return <Welcome />;
            case 1:
                return <Step1 />;
            case 2:
                return <Step2 />;
            case 3:
                return <Step3 />;
            case 4:
                return <Step4 />;
            case 5:
                return <Step5 />;
            case 6:
                return <Step6 />;
            case 7:
                return <Step7 />;
            default:
                return <Welcome />;
        }
    };
    return (
        <StepContext.Provider value={[step, setStep]}>
            <div className="min-h-screen">
                {/* <Welcome /> */}
                {renderStep(step)}
            </div>
        </StepContext.Provider>
    );
}
