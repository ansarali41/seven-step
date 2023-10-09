import { StepContext } from '@/app/page';
import Image from 'next/image';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step5() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName] = useContext(StepContext);
    return (
        <div>
            {step === 5 && (
                <div>
                    <ProgressHeader />
                    <div className="flex">
                        <div>
                            <LeftColumn />
                        </div>

                        <div className="p-3 bg-[#F8F9FA] w-full">
                            <h1 className="text-4xl font-medium leading-normal">This is Step {step}</h1>
                            <p className="mt-2 mb-1">congratulations, you got a BLANK thing</p>
                            <p className="mb-2">(show the thing in a 3d viewer)</p>

                            <Image
                                src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?w=190"
                                alt="Picture of the author"
                                width={190}
                                height={150}
                                quality={100}
                            />
                            <p className="text-2xl leading-normal py-3">Hello, {name}!</p>
                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step5;
