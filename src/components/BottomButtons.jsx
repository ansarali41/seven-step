import { StepContext } from '@/app/page';
import { Button } from '@nextui-org/button';
import { useContext } from 'react';

import { ArrowLeftCircleFill, ArrowRightCircleFill, WalletFill } from 'react-bootstrap-icons';

function BottomButtons() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData] = useContext(StepContext);
    return (
        <div className="flex m-2">
            {step !== 1 && (
                <Button
                    className="focus:outline-none text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-3 py-1 mb-2 flex justify-center items-center mr-2"
                    onClick={() => setStep(step - 1)}
                >
                    <ArrowLeftCircleFill class="m-2" />
                    Previous Step &nbsp;
                </Button>
            )}

            {step !== 7 && (
                <Button
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-4 py-1 mr-2 mb-2 flex justify-center items-center"
                    onClick={() => setStep(step + 1)}
                >
                    &nbsp; Next Step
                    <ArrowRightCircleFill class="m-2" />
                </Button>
            )}

            {step === 7 && (
                <Button
                    type="button"
                    class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-sm px-4 py-1 mr-2 mb-2 flex justify-center items-center"
                    onClick={() => setStep(step + 1)}
                >
                    &nbsp; Go to your Wallet
                    <WalletFill class="m-2" />
                </Button>
            )}
        </div>
    );
}

export default BottomButtons;
