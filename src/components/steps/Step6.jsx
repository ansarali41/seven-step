import { StepContext } from '@/app/page';
import { useContext } from 'react';
import { Safe } from 'react-bootstrap-icons';
import BottomButtons from '../BottomButtons';
import LeftColumn from '../LeftColumn';
import ProgressHeader from '../ProgressHeader';
import Image from 'next/image';

function Step6() {
    const [step, setStep, userRegion, setUserRegion, appData, setAppData, name, setName] = useContext(StepContext);
    return (
        <div>
            {step === 6 && (
                <div>
                    <ProgressHeader />
                    <div className="flex">
                        <div>
                            <LeftColumn />
                        </div>

                        <div className="p-3 bg-[#F8F9FA] w-full">
                            <h1 className="text-4xl font-medium leading-normal">This is Step {step}</h1>
                            <p className="py-2">
                                {`show "wallet" - this thing is now in your wallet`}
                                <br />
                                -- {`there is a "MINT" option`}
                                <br />
                                -- user connects their actual wallet
                                <br />
                                -- estimate for mint provided - this will be 10 dollars!!
                                <br />
                                -- if the user has enough cash, a mint confirmation is displayed
                                <br />
                            </p>

                            <p className="text-xl leading-normal py-3">Hello, {name}!</p>
                            <div className="grid grid-cols-2">
                                <div className="flex border bg-light">
                                    <Image
                                        src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                        alt="Picture of the author"
                                        width={60}
                                        height={47}
                                    />
                                    <button className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center" onClick={() => setStep(step + 1)}>
                                        &nbsp; Mint to ETH s
                                        <Safe className="m-2" />
                                    </button>
                                </div>
                                <div className="flex border bg-light">
                                    <Image
                                        src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                        alt="Picture of the author"
                                        width={60}
                                        height={47}
                                    />
                                    <button className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center" onClick={() => setStep(step + 1)}>
                                        &nbsp; Mint to ETH
                                        <Safe className="m-2" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="flex border bg-light">
                                    <Image
                                        src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                        alt="Picture of the author"
                                        width={60}
                                        height={47}
                                    />
                                    <button className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center" onClick={() => setStep(step + 1)}>
                                        &nbsp; Mint to ETH
                                        <Safe className="m-2" />
                                    </button>
                                </div>
                                <div className="flex border bg-light">
                                    <Image
                                        src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                        alt="Picture of the author"
                                        width={60}
                                        height={47}
                                    />
                                    <button className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center" onClick={() => setStep(step + 1)}>
                                        &nbsp; Mint to ETH
                                        <Safe className="m-2" />
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-2">
                                <div className="flex border bg-light">
                                    <Image
                                        src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                        alt="Picture of the author"
                                        width={60}
                                        height={47}
                                    />
                                    <button className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center" onClick={() => setStep(step + 1)}>
                                        &nbsp; Mint to ETH
                                        <Safe className="m-2" />
                                    </button>
                                </div>
                                <div className="flex border bg-light">
                                    <Image
                                        src="https://images.pexels.com/photos/437345/pexels-photo-437345.jpeg?auto=compress&cs=tinysrgb&w=60"
                                        alt="Picture of the author"
                                        width={60}
                                        height={47}
                                    />
                                    <button className="bg-[#2FD2F2] hover:bg-[#2cd6f8] py-1 px-2 rounded m-2 flex justify-center items-center" onClick={() => setStep(step + 1)}>
                                        &nbsp; Mint to ETH
                                        <Safe className="m-2" />
                                    </button>
                                </div>
                            </div>
                            <br />
                            <BottomButtons />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Step6;
