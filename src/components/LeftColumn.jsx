import { StepContext } from '@/app/page';
import { useContext } from 'react';

function LeftColumn() {
    const [step] = useContext(StepContext);

    return (
        <div
            class="flex flex-column p-4 bg-[#212529] text-white"
            style={{
                width: 300,
                height: 400,
                backgroundImage: 'url(' + './assets/headerBG.jpg' + ')',
            }}
        >
            <p>Explainer data for Step {step}</p>
        </div>
    );
}

export default LeftColumn;
