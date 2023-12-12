import Header from '@/components/header';
import Link from 'next/link';
import Image from 'next/image';

export default function BuyMore() {
    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={0} student />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col justify-center items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between w-[70%] h-[100%]">
                    <h1 className="text-[48px] font-[700] mb-[20px] text-primary">Mua Giấy In</h1>
                    <div className="flex h-[100%] w-[100%] px-[50px]">
                        <div className="flex items-center justify-center">
                            <img src="/Rectangle 15.png" alt="" className="w-auto h-[60%]" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <div className="mb-[100px]">
                                <label className="ms-[12px] font-[500] text-[24px]" htmlFor="">
                                    Cỡ giấy
                                </label>
                                <select
                                    name=""
                                    id=""
                                    className="mx-[4px] h-[40px] flex-grow px-[12px] w-[274px] text-[16px] text-black outline-none placeholder:text-[#696969] border-[1px] border-solid">
                                    <option value="A3">A3</option>
                                    <option value="A4">A4</option>
                                    <option value="A5">A5</option>
                                </select>
                            </div>
                            <div>
                                <label className="ms-[12px] font-[500] text-[24px]" for="page">
                                    Số tờ
                                </label>
                                <input
                                    className="mx-[4px] h-[40px] flex-grow px-[12px] text-[16px] text-black outline-none placeholder:text-[#696969] border-[1px] border-solid"
                                    type="text"
                                    id="page"
                                    placeholder="Nhập số tờ"
                                />
                            </div>
                            <Link className="rounded-[8px] bg-primary text-white font-[700] p-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" href="/student">
                                Huỷ
                            </Link>
                        </div>
                    </div>
                    <div className="flex justify-start m-[20px] w-[100%]"></div>
                </div>
            </div>
        </div>
    );
}
