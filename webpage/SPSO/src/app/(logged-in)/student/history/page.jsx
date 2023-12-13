'use client';

import Header from '@/components/header';
import Link from 'next/link';
import { useState } from 'react';

const history = [
    {
        printer: 'P01',
        pageNumber: 10,
        doc: 'baocaodoan.docx',
        date: new Date('2023-01-01'),
    },
    {
        printer: 'P02',
        pageNumber: 20,
        doc: 'tailieuthuctap.docx',
        date: new Date('2023-01-02'),
    },
    {
        printer: 'P02',
        pageNumber: 10,
        doc: 'capstone_proj.pdf',
        date: new Date('2023-01-03'),
    },
    {
        printer: 'P01',
        pageNumber: 15,
        doc: 'slide1.pdf',
        date: new Date('2023-01-04'),
    },
];

export default function StudentHistory() {
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState(1);
    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={3} student />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between h-[80%] w-[100vw]">
                    <h1 className="text-[48px] mb-[80px] font-[700]">Lịch sử in</h1>
                    <div className="flex items-start w-[80%]">
                        <div className="min-w-[30%] p-[20px] h-[100%] flex-col flex justify-between">
                            <div className="w-[100%]">
                                <h6 className="text-[24px] font-[500]">Tìm kiếm bằng tài liệu</h6>
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
                                    <input
                                        type="radio"
                                        name="filter"
                                        id=""
                                        className="me-[8px]"
                                        onChange={() => {
                                            setSort(1);
                                        }}
                                        defaultChecked
                                    />
                                    Mới nhất
                                </div>
                                <div className="p-2 m-1 rounded-[8px] border border-black">
                                    <input
                                        type="radio"
                                        name="filter"
                                        id=""
                                        className="me-[8px]"
                                        onChange={() => {
                                            setSort(2);
                                        }}
                                    />
                                    Cũ nhất
                                </div>
                                <div className="p-2 m-1 rounded-[8px] border border-black">
                                    <input
                                        type="radio"
                                        name="filter"
                                        id=""
                                        className="me-[8px]"
                                        onChange={() => {
                                            setSort(3);
                                        }}
                                    />
                                    Nhiều trang in nhất
                                </div>
                                <div className="p-2 m-1 rounded-[8px] border border-black">
                                    <input
                                        type="radio"
                                        name="filter"
                                        id=""
                                        className="me-[8px]"
                                        onChange={() => {
                                            setSort(4);
                                        }}
                                    />
                                    Ít trang in nhất
                                </div>
                            </div>

                            <Link className="bg-[#210F7A] text-white w-[200px] text-center rounded-[8px] font-[700] p-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" href="/student">
                                Màn hình chính
                            </Link>
                        </div>
                        <div className="flex-grow">
                            <table className="w-[100%] text-[20px] ">
                                <thead>
                                    <tr>
                                        <th className="border-b-[1px] px-4 py-2">Máy in</th>
                                        <th className="border-b-[1px] px-4 py-2">Số trang</th>
                                        <th className="border-b-[1px] px-4 py-2">Tài liệu in</th>
                                        <th className="border-b-[1px] px-4 py-2">Ngày in</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {history
                                        .filter((his) => his.doc.toLowerCase().includes(search.toLowerCase()))
                                        .sort((a, b) => {
                                            if (sort === 1) return b.date - a.date;
                                            if (sort === 2) return a.date - b.date;
                                            if (sort === 3) return b.pageNumber - a.pageNumber;
                                            if (sort === 4) return a.pageNumber - b.pageNumber;
                                        })
                                        .map((his) => (
                                            <tr className="h-[100px]">
                                                <td className="border-b-[1px] text-center px-4 py-2">{his.printer}</td>
                                                <td className="border-b-[1px] text-center px-4 py-2">{his.pageNumber}</td>
                                                <td className="border-b-[1px] text-center px-4 py-2">{his.doc}</td>
                                                <td className="border-b-[1px] px-4 py-2 text-center">{his.date.toLocaleDateString('en-GB')}</td>
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
