import { StepContext } from '@/app/page';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step7() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName] = useContext(StepContext);

    const renderHTML = html => {
        return { __html: html };
    };

    return (
        <div>
            {step === 7 && (
                <div>
                    <ProgressHeader />
                    <div className="flex">
                        <div>
                            <LeftColumn text={appData.steps[6].left_explainer_data} />
                        </div>

                        <div className="p-[1rem] bg-[#F8F9FA] w-full">
                            <h1 className="text-[40px] font-medium leading-[48px]">This is Step {step}</h1>
                            <p className="text-[19px] font-light leading-[31px] py-3">Hello, {name}!</p>

                            <div className="text-[16px] font-normal leading-[24px] my-[8px]" dangerouslySetInnerHTML={renderHTML(appData.steps[6].main_data)} />

                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step7;
