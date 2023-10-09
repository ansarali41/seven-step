import { Button } from '@nextui-org/button';
import React from 'react';
import { StepContext } from '@/app/page';

const Welcome = () => {
    const [step, setStep] = React.useContext(StepContext);

    return (
        <div>
            <div className="py-5 px-3">
                <h1 className="text-2xl">Welcome!</h1>
            </div>
            <div>
                <hr className="border-t border-gray-200 pt-5" />
            </div>

            <div className="px-3">
                <p className="mb-5">Experience Loaded</p>
                <Button color="primary" size="md" onClick={() => setStep(1)}>
                    {`Let's Go!`}
                </Button>
            </div>
        </div>
    );
};

export default Welcome;
