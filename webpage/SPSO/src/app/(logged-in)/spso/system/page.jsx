'use client';

import Header from '@/components/header';
import Notification from '@/components/notification';
import { useState, useEffect } from 'react';

export default function SpsoSystem() {
    const [noti, setNoti] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setNoti(false);
        }, 3000);
    }, [noti]);

    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={0} />
            <div className="rounded-[8px] p-[40px] self-center bg-white mt-[70px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <h2 className="text-[#210F7A] text-[48px] font-[700]">Hệ thống</h2>
                <div className="w-[100%]">
                    <div className="w-[100%] mb-[20px]">
                        <h3 className="text-[28px] mb-[16px]">Cấp phát giấy</h3>
                        <div className="flex flex-wrap w-[100%]">
                            <div className="w-[50%]">
                                <label className="text-[20px] me-2" for="semester">
                                    Học kì
                                </label>
                                <select className="px-[4px] h-[40px] rounded-[8px] border-[1px] border-solid mx-[4px]" name="semester" id="semester">
                                    <option value="231">Học kì 231</option>
                                    <option value="232">Học kì 232</option>
                                    <option value="233">Học kì 233</option>
                                    <option value="241">Học kì 241</option>
                                </select>
                            </div>
                            <div className="w-[50%]">
                                <label className="text-[20px]" for="page">
                                    Số tờ
                                </label>
                                <input
                                    className="mx-[4px] h-[40px] flex-grow px-[12px] text-[16px] text-black outline-none placeholder:text-[#696969] border-[1px] border-solid"
                                    type="text"
                                    id="page"
                                    placeholder="Nhập số tờ"
                                />
                            </div>
                            <div className="mt-[20px]">
                                <label className="text-[20px]" for="date">
                                    Ngày cấp giấy
                                </label>
                                <input className="px-[12px] border-[1px] border-solid mx-[4px] h-[40px]" type="date" id="date" />
                            </div>
                            <div className="mt-[20px] w-[100%] bg-[#210F7A] h-[40px] rounded-[8px]">
                                <button onClick={() => setNoti(true)} className="text-white font-[700] h-[100%] w-[100%]">
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                    <hr className="border-t-[2px]" />
                    <div className="w-[100%] my-[20px]">
                        <h3 className="text-[28px] mb-[16px]">Cấu hình in</h3>
                        <div>
                            <div className="flex items-center">
                                <label className="text-[20px]" for="">
                                    Loại file chấp nhận
                                </label>
                                <div className="inline-flex items-center text-[18px] mx-[12px]">
                                    <input className="me-[4px] w-[20px] h-[20px]" type="checkbox" name="file-type" value="docx" />
                                    <label for="file-type">docx</label>
                                </div>
                                <div className="inline-flex items-center text-[18px] mx-[12px]">
                                    <input className="me-[4px] w-[20px] h-[20px]" type="checkbox" name="file-type" value="eps" />
                                    <label for="file-type">eps</label>
                                </div>
                                <div className="inline-flex items-center text-[18px] mx-[12px]">
                                    <input className="me-[4px] w-[20px] h-[20px]" type="checkbox" name="file-type" value="jpeg" />
                                    <label for="file-type">jpeg</label>
                                </div>
                                <div className="inline-flex items-center text-[18px] mx-[12px]">
                                    <input className="me-[4px] w-[20px] h-[20px]" type="checkbox" name="file-type" value="png" />
                                    <label for="file-type">png</label>
                                </div>
                                <div className="inline-flex items-center text-[18px] mx-[12px]">
                                    <input className="me-[4px] w-[20px] h-[20px]" type="checkbox" name="file-type" value="pdf" />
                                    <label for="file-type">pdf</label>
                                </div>
                                <div className="inline-flex items-center text-[18px] mx-[12px]">
                                    <input className="me-[4px] w-[20px] h-[20px]" type="checkbox" name="file-type" value="pptx" />
                                    <label for="file-type">pptx</label>
                                </div>
                                <div className="inline-flex items-center text-[18px] mx-[12px]">
                                    <input className="me-[4px] w-[20px] h-[20px]" type="checkbox" name="file-type" value="xlsx" />
                                    <label for="file-type">xlsx</label>
                                </div>
                            </div>
                            <div className="mt-[20px] w-[100%] bg-[#210F7A] h-[40px] rounded-[8px]">
                                <button onClick={() => setNoti(true)} className="text-white font-[700] h-[100%] w-[100%]">
                                    Lưu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {noti && <Notification />}
        </div>
    );
}
