import { Button } from '@nextui-org/button';
import React from 'react';
import { StepContext } from '@/app/page';

const Welcome = () => {
    const [step, setStep] = React.useContext(StepContext);

    return (
        <div>
            <div className="py-4 px-[16px]">
                <p className="text-[24px] font-medium leading-9">Welcome!</p>
            </div>

            <hr className="border-t border-gray-200 pt-5 text-base" />

            <div className="px-[16px]">
                <p className="text-[16px] font-normal leading-6">Experience Loaded</p>
                <br />
                <button
                    className="bg-[#0d6efd] hover:bg-[#0b5ed7] text-[16px] leading-6 text-white font-normal py-[7px] px-3 rounded"
                    onClick={() => setStep(1)}
                >{`Let's Go!`}</button>
            </div>
        </div>
    );
};

export default Welcome;
