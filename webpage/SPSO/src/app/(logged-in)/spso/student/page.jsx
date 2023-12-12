'use client';

import Header from '@/components/header';
import Link from 'next/link';
import Image from 'next/image';
import studentsSample from '@/services/student.service';
import { useState, useEffect } from 'react';

export default function SpsoStudent() {
    const [students, setStudents] = useState(studentsSample);

    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={1} />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between h-[100%]">
                    <h1 className="text-[48px] font-[700] mb-[20px] text-primary">Thông Tin Sinh Viên</h1>
                    <div className="h-[100%] overflow-auto">
                        <table className="max-w-[80vw]">
                            <thead>
                                <tr className="border-b-[1px]">
                                    <th className="text-left w-[300px] px-2 py-2">Tên</th>
                                    <th className="w-[150px] px-2 py-2">MSSV</th>
                                    <th className="text-left w-[350px] px-2 py-2">Email</th>
                                    <th className="text-left w-[150px] px-2 py-2">Lớp</th>
                                    <th className="text-left w-[200px] px-2 py-2">Khoa</th>
                                    <th className="text-left w-[100px] px-2 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {students.map((student) => (
                                    <tr key={student.id} className="border-b-[1px] h-[100px]">
                                        <td className="px-2 py-2">
                                            <img src="/cat.jpg" className="inline-block rounded-full me-[4px] w-[35px]" alt="" />
                                            {student.name}
                                        </td>
                                        <td className="px-2 py-2 text-center">{student.id}</td>
                                        <td className="px-2 py-2">{student.email}</td>
                                        <td className="px-2 py-2">{student.class}</td>
                                        <td className="px-2 py-2">{student.dept}</td>
                                        <td className="px-2 py-2">
                                            <button
                                                onClick={() => {
                                                    setStudents(students.filter((stu) => stu.id !== student.id));
                                                }}
                                                className="h-[100%] aspect-square bg-red-400 hover:bg-red-300 p-[4px] rounded-[8px]">
                                                <Image src="/ban.svg" alt="" width={0} height={0} className="h-[100%] w-[100%] color-red" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="flex justify-start m-[20px] w-[100%]">
                        <Link className="rounded-[8px] bg-primary text-white font-[700] p-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" href="/spso">
                            Màn hình chính
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
