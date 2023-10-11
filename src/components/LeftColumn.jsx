import { StepContext } from '@/app/page';
import { useContext } from 'react';

function LeftColumn({ text }) {
    const [step] = useContext(StepContext);

    return (
        <div
            className="flex flex-column p-4 bg-[#212529]"
            style={{
                width: 300,
                height: 400,
                backgroundImage: 'url(' + './assets/headerBG.jpg' + ')',
            }}
        >
            <p className="text-white text-[16px] font-normal leading-6">{text}</p>
        </div>
    );
}

export default LeftColumn;
