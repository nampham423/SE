import Header from '@/components/header';
import Link from 'next/link';
import ProgressBar from '@/components/progress-bar';

export default function Config() {
    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={0} student />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between h-[100%] w-[100%]">
                    <h1 className="text-[48px] font-[700] mb-[20px] text-primary">Thiết lập trang</h1>
                    <div className="h-[100%] w-[100%] flex flex-col items-center">
                        <ProgressBar progress={2} />
                        <div className="flex flex-col mt-[80px] flex-grow w-[100%]">
                            <div className="flex justify-around">
                                <div className="flex flex-col me-[40px]">
                                    <div>
                                        <p className="text-[20px] mb-[12px] font-[500]">Trang in</p>
                                        <input type="radio" name="page" id="1" />
                                        <label htmlFor="" className="mx-[12px]">
                                            Toàn bộ
                                        </label>
                                        <div className="flex items-center mt-[12px]">
                                            <input type="radio" name="page" id="2" />
                                            <label htmlFor="" className="ms-[12px]">
                                                Trong khoảng trang:
                                            </label>
                                            <div className="flex items-center">
                                                <label htmlFor="page-range-1" className="ms-[12px]">
                                                    Từ
                                                </label>
                                                <input type="text" className="w-[80px] mx-[12px] px-[8px] border-[1px]" name="page-range" id="page-range-1" />
                                                <label htmlFor="page-range-2">đến</label>
                                                <input type="text" className="w-[80px] mx-[12px] px-[8px] border-[1px]" name="page-range" id="page-range-2" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex mt-[40px] items-center">
                                        <p className="text-[20px] font-[500]">Cỡ giấy</p>
                                        <select name="" id="" className="mx-[12px] h-[40px] px-[12px] w-[50%] text-[16px] text-black outline-none placeholder:text-[#696969] border-[1px] border-solid">
                                            <option value="A3">A3</option>
                                            <option value="A4">A4</option>
                                            <option value="A5">A5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <div className="flex mb-[40px]">
                                        <p className="text-[20px] me-[12px] font-[500]">In hai mặt</p>
                                        <input type="checkbox" name="" id="" />
                                    </div>
                                    <div className="flex mb-[40px]">
                                        <p className="text-[20px] font-[500] me-[12px]">Số bản sao</p>
                                        <input type="text" className="w-[150px] px-[8px] border-[1px]" />
                                    </div>
                                    <div className="flex mb-[40px] items-center">
                                        <p className="text-[20px] font-[500]">Chiều in:</p>
                                        <label htmlFor="" className="mx-[12px] me-[8px]">
                                            Chiều dọc
                                        </label>
                                        <input type="radio" name="orientation" id="" />
                                        <label htmlFor="" className="mx-[12px] me-[8px]">
                                            Chiều ngang
                                        </label>
                                        <input type="radio" name="orientation" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="self-end me-[60px]">
                                <Link className="rounded-[8px] inline-block me-[12px] text-center font-[700] px-[12px] py-[4px] h-[100%] border-[1px]" href="/student">
                                    Huỷ
                                </Link>
                                <Link href="/student/print/printer" className="rounded-[8px] inline-block  bg-primary text-white text-center font-[700] px-[12px] py-[4px] h-[100%] border-[1px]">
                                    Tiếp tục
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
