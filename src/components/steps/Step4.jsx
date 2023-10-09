import { StepContext } from '@/app/page';
import 'aframe';
import 'arjs';
import { useContext } from 'react';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';

function Step4() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData] = useContext(StepContext);
    return (
        <div>
            {step === 4 && (
                <>
                    <div>
                        <ProgressHeader />
                        <div className="flex">
                            <div>
                                <LeftColumn />
                            </div>

                            <div className="p-3 bg-[#F8F9FA] w-full">
                                <h1 className="text-4xl font-medium leading-normal">This is Step {step}</h1>
                                <p className="py-2">(verify enter) enter the verification code you received</p>
                                <div className="h-[220px]">
                                    <a-scene embedded>
                                        <a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
                                        <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
                                        <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
                                        <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
                                        <a-sky color="#ECECEC"></a-sky>
                                    </a-scene>
                                </div>
                                <BottomButtons />
                            </div>
                        </div>
                    </div>

                    {/* <a-scene vr-mode-ui='enabled: false' arjs='sourceType: webcam; videoTexture: true; debugUIEnabled: false' renderer='antialias: true; alpha: true'>
          <a-camera gps-new-camera='gpsMinDistance: 5'></a-camera>
          <a-entity material='color: red' geometry='primitive: box' gps-new-entity-place="latitude: <your-lat>; longitude: <your-loon>" scale="10 10 10"></a-entity>
        </a-scene> */}
                </>
            )}
        </div>
    );
}

export default Step4;
