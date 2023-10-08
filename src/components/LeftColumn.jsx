import { StepContext } from '@/app/page';
import { useContext } from 'react';

function LeftColumn() {
    const [step, setStep] = useContext(StepContext);

    return (
        <div
            class="flex flex-column flex-shrink-0 p-3 bg-zinc-800 text-white"
            style={{
                width: 300,
                height: 400,
                backgroundImage: 'url(' + './assets/headerBG.jpg' + ')',
            }}
        >
            Explainer data for {step}
        </div>
    );
}

export default LeftColumn;
