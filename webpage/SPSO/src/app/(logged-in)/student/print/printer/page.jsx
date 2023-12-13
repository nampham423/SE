'use client';

import Header from '@/components/header';
import Link from 'next/link';
import ProgressBar from '@/components/progress-bar';
import { useEffect, useState, useRef } from 'react';
import Notification from '@/components/notification';

export default function Printer() {
    const [printer, setPrinter] = useState(0);
    const [noti, setNoti] = useState(false);
    const render = useRef(0);

    useEffect(() => {
        if (render.current < 2) {
            render.current++;
            return;
        }

        setTimeout(() => {
            setNoti(false);
            window.location.href = 'http://localhost:3000/student';
        }, 3000);
    }, [noti]);

    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={0} student />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between h-[100%] w-[100%]">
                    <h1 className="text-[48px] font-[700] mb-[20px] text-primary">Thiết lập trang</h1>
                    <div className="h-[100%] w-[100%] flex flex-col items-center">
                        <ProgressBar progress={3} />
                        <div className="flex flex-col mt-[80px] flex-grow w-[100%]">
                            <table className="max-w-[80vw]">
                                <thead>
                                    <tr className="border-b-[1px]">
                                        <th className="text-left px-2 py-2">Máy in</th>
                                        <th className="text-left px-2 py-2">Địa điểm</th>
                                        <th className="text-left px-2 py-2">Số giấy còn lại</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr onClick={() => setPrinter(1)} className={`border-b-[1px] hover:bg-secondary hover:text-white h-[60px] ${printer === 1 ? 'bg-primary text-white' : ''}`}>
                                        <th className="text-left">P01 - HP LaserJet Pro M404dw</th>
                                        <td>Toà nhà B1</td>
                                        <td>
                                            <span className="mx-[12px]">A3: 10</span>
                                            <span className="mx-[12px]">A4: 10</span>
                                            <span className="mx-[12px]">A5: 10</span>
                                        </td>
                                    </tr>
                                    <tr onClick={() => setPrinter(2)} className={`border-b-[1px] hover:bg-secondary hover:text-white h-[60px] ${printer === 2 ? 'bg-primary text-white' : ''}`}>
                                        <th className="text-left">P02 - Epson EcoTank ET-4850</th>
                                        <td>Toà nhà B6</td>
                                        <td>
                                            <span className="mx-[12px]">A3: 10</span>
                                            <span className="mx-[12px]">A4: 10</span>
                                            <span className="mx-[12px]">A5: 10</span>
                                        </td>
                                    </tr>
                                    <tr onClick={() => setPrinter(3)} className={`border-b-[1px] hover:bg-secondary hover:text-white h-[60px] ${printer === 3 ? 'bg-primary text-white' : ''}`}>
                                        <th className="text-left">P03 - Brother MFC-J995DW INKvestment Tank</th>
                                        <td>Toà nhà A4</td>
                                        <td>
                                            <span className="mx-[12px]">A3: 10</span>
                                            <span className="mx-[12px]">A4: 10</span>
                                            <span className="mx-[12px]">A5: 10</span>
                                        </td>
                                    </tr>
                                    <tr onClick={() => setPrinter(4)} className={`border-b-[1px] hover:bg-secondary hover:text-white h-[60px] ${printer === 4 ? 'bg-primary text-white' : ''}`}>
                                        <th className="text-left">P04 - Canon PIXMA G7020 MegaTank Wireless All-In-One Printer</th>
                                        <td>Thư viện A2</td>
                                        <td>
                                            <span className="mx-[12px]">A3: 10</span>
                                            <span className="mx-[12px]">A4: 10</span>
                                            <span className="mx-[12px]">A5: 10</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="self-end mt-[40px] me-[60px]">
                                <Link className="rounded-[8px] inline-block me-[12px] text-center font-[700] px-[12px] py-[4px] h-[100%] border-[1px]" href="/student">
                                    Huỷ
                                </Link>
                                <button onClick={() => setNoti(true)} className="rounded-[8px] inline-block  bg-primary text-white text-center font-[700] px-[12px] py-[4px] h-[100%] border-[1px]">
                                    Tiếp tục
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {noti && <Notification message="Your document(s) are being printed." />}
        </div>
    );
}
