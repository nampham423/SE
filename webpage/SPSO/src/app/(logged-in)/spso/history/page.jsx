'use client';

import Header from '@/components/header';
import Link from 'next/link';
import history from '@/services/history.service';
import { useState } from 'react';

export default function SpsoHistory() {
    const [search, setSearch] = useState('');
    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={2} />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between h-[80%] w-[100vw]">
                    <h1 className="text-[48px] mb-[80px] font-[700]">Lịch sử in của sinh viên</h1>
                    <div className="flex items-start w-[80%]">
                        <div className="min-w-[30%] p-[20px] h-[100%] flex-col flex justify-between">
                            <div className="w-[100%]">
                                <h6 className="text-[24px] font-[500]">Tìm kiếm bằng tên sinh viên</h6>
                                <input
                                    onInput={(e) => {
                                        setSearch(e.currentTarget.value);
                                    }}
                                    value={search}
                                    type="text"
                                    className="p-2 m-1 rounded-[8px] border border-black w-[100%]"
                                />
                            </div>

                            <div className="w-[100%]">
                                <h6 className="text-[24px]">Sắp xếp</h6>
                                <div className="p-2 m-1 rounded-[8px] border border-black">
                                    <input type="radio" name="filter" id="" className="me-[8px]" />
                                    Mới nhất
                                </div>
                                <div className="p-2 m-1 rounded-[8px] border border-black">
                                    <input type="radio" name="filter" id="" className="me-[8px]" />
                                    Cũ nhất
                                </div>
                                <div className="p-2 m-1 rounded-[8px] border border-black">
                                    <input type="radio" name="filter" id="" className="me-[8px]" />
                                    Nhiều trang in nhất
                                </div>
                                <div className="p-2 m-1 rounded-[8px] border border-black">
                                    <input type="radio" name="filter" id="" className="me-[8px]" />
                                    Ít trang in nhất
                                </div>
                            </div>

                            <Link className="bg-[#210F7A] text-white w-[200px] text-center rounded-[8px] font-[700] p-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" href="/spso">
                                Màn hình chính
                            </Link>
                        </div>
                        <div className="flex-grow">
                            <table className="w-[100%] text-[20px] ">
                                <thead>
                                    <tr>
                                        <th className="border-b-[1px] px-4 py-2">Máy in</th>
                                        <th className="border-b-[1px] px-4 py-2">Số trang</th>
                                        <th className="border-b-[1px] px-4 py-2">Sinh viên in</th>
                                        <th className="border-b-[1px] px-4 py-2">Ngày in</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history
                                        .filter((his) => his.student.toLowerCase().includes(search.toLowerCase()))
                                        .map((his) => (
                                            <tr className="h-[100px]">
                                                <td className="border-b-[1px] text-center px-4 py-2">{his.printer}</td>
                                                <td className="border-b-[1px] text-center px-4 py-2">{his.pageNumber}</td>
                                                <td className="border-b-[1px] px-4 py-2">
                                                    <img src="/cat.jpg" className="inline-block rounded-full me-[4px] w-[35px]" alt="" />
                                                    {his.student}
                                                </td>
                                                <td className="border-b-[1px] px-4 py-2 text-center">{his.date}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
