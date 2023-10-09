import { StepContext } from '@/app/page';
import { Input } from '@nextui-org/input';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step2() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName] = useContext(StepContext);
    const handleChange = event => {
        setName(event.target.value);
    };

    return (
        <div>
            {step === 2 && (
                // <div class="main">
                //     <ProgressHeader />
                //     <div class="d-flex flex-nowrap">
                //         <LeftColumn />
                //         <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-light flex-fill">
                //             <h1>This is Step {step}</h1>
                //             (verifyMessage) - enter your phone number and we will verify with an SMS
                //             <p>
                //                 <input type="text" value={name} onChange={handleChange} placeholder="Enter your phone number" />
                //             </p>
                //             <p>
                //                 welcome to the <strong>{userRegion}</strong> region
                //             </p>
                //             <BottomButtons />
                //         </div>
                //     </div>
                // </div>
                <div>
                    <ProgressHeader />
                    <div className="flex">
                        <div>
                            <LeftColumn />
                        </div>

                        <div className="p-3 bg-[#F8F9FA] w-full">
                            <h1 className="text-4xl font-medium leading-normal">This is Step {step}</h1>
                            <p className="py-2">(verifyMessage) - enter your phone number and we will verify with an SMS</p>
                            <Input type="text" variant="bordered" size="sm" label="Enter your phone number" value={name} onChange={handleChange} className="w-[350px]" />
                            <p className="text-2xl leading-normal py-3">
                                welcome to the <strong>{userRegion}</strong> region
                            </p>
                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step2;
