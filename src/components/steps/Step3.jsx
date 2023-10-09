import { StepContext } from '@/app/page';
import { Input } from '@nextui-org/input';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step3() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName] = useContext(StepContext);
    const handleChange = event => {
        setName(event.target.value);
    };
    return (
        <div>
            {step === 3 && (
                <div>
                    <ProgressHeader />
                    <div className="flex">
                        <div>
                            <LeftColumn />
                        </div>

                        <div className="p-3 bg-[#F8F9FA] w-full">
                            <h1 className="text-4xl font-medium leading-normal">This is Step {step}</h1>
                            <p className="py-2">(verify enter) enter the verification code you received</p>

                            <Input type="text" variant="bordered" size="sm" label="Enter the verification code" value={name} onChange={handleChange} className="w-[350px]" />
                            <p className="text-2xl leading-normal py-3">Hello, {name}!</p>
                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step3;
