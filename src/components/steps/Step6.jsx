import { StepContext } from '@/app/page';
import { useContext } from 'react';
import { Safe } from 'react-bootstrap-icons';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';
import Image from 'next/image';

function Step6() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName] = useContext(StepContext);

    const renderHTML = html => {
        return { __html: html };
    };

    return (
        <div>
            {step === 6 && (
                <div>
                    <ProgressHeader />
                    <div className="flex">
                        <div>
                            <LeftColumn text={appData.steps[5].left_explainer_data} />
                        </div>

                        <div className="p-[1rem] bg-[#F8F9FA] w-full">
                            <h1 className="text-[40px] font-medium leading-[48px]  mb-[.5rem]">This is Step {step}</h1>
                            <div className="text-[16px] font-normal leading-[24px] my-[8px]" dangerouslySetInnerHTML={renderHTML(appData.steps[5].main_data)} />

                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step6;
