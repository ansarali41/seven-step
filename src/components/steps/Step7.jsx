import { StepContext } from '@/app/page';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step7() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName] = useContext(StepContext);
    return (
        <div>
            {step === 7 && (
                <div>
                    <ProgressHeader />
                    <div className="flex">
                        <div>
                            <LeftColumn />
                        </div>

                        <div className="p-3 bg-[#F8F9FA] w-full">
                            <h1 className="text-4xl font-medium leading-normal">This is Step {step}</h1>
                            <p className="text-2xl leading-normal py-3">Hello, {name}!</p>
                            <p className="py-2">how do I find more?</p>
                            <p className="py-2">another tab to show participants/locations</p>

                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step7;
