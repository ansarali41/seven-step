import { StepContext } from '@/app/page';
import React from 'react';

const ProgressHeader = () => {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData] = React.useContext(StepContext);

    return (
        <div
            className="flex"
            style={{
                height: 60,
                backgroundImage: 'url(' + './assets/headerBG.jpg' + ')',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {appData.steps.map((value, index) => {
                index += 1;
                let itemClass = 'flex justify-center items-center p-2 highlight rounded bg-[#6C757D] text-white font-medium';
                let stepText = 'Step ' + index;

                if (index == step) {
                    itemClass = 'flex justify-center items-center p-2 highlight flex-grow rounded bg-[#212529]  text-white font-medium';
                    stepText += ' - ' + value.title;
                }
                return (
                    <div className={itemClass} style={{ height: 30, margin: 10 }} key={index}>
                        <small>{stepText}</small>
                    </div>
                );
            })}
        </div>
    );
};

export default ProgressHeader;
