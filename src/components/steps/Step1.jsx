import { StepContext } from '@/app/page';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

const Step1 = () => {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData] = useContext(StepContext);
    return (
        <div>
            <ProgressHeader />
            <div className="flex">
                <div>
                    <LeftColumn />
                </div>

                <div className="p-3 bg-[#F8F9FA] w-full">
                    <h1 className="text-4xl font-medium leading-normal">This is Step {step}</h1>
                    <h1 className="text-4xl font-medium leading-normal">data = {appData.campaign.title} </h1>
                    <h1 className="text-4xl font-medium leading-normal">data = {appData.campaign.main_image} </h1>
                    <BottomButtons />
                </div>
            </div>
        </div>
    );
};

export default Step1;
