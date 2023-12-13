'use client';
import Header from '@/components/header';
import Link from 'next/link';
import ProgressBar from '@/components/progress-bar';
import { useState } from 'react';

export default function StudentPrint() {
    const [options, setOptions] = useState(['doan.docx', 'capsonte.pdf', 'baocaothuctap.docx', 'dataset.xlxs', 'Timeline.xlxs']);
    const [values, setValues] = useState([]);

    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={0} student />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between h-[100%] w-[100%]">
                    <h1 className="text-[48px] font-[700] mb-[20px] text-primary">In Tài Liệu</h1>
                    <div className="h-[100%] w-[100%] flex flex-col items-center">
                        <ProgressBar progress={1} />
                        <div className="flex mt-[40px] flex-grow w-[100%]">
                            <div className="flex flex-col justify-between items-stretch w-[50%]">
                                <div className="flex flex-grow flex-col">
                                    <h4 className="mb-[16px] font-[600] text-[24px]">Tài liệu đã tải lên</h4>
                                    <div className="flex-grow flex flex-col shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)] rounded-[8px] p-[20px]">
                                        {options.map((option) => (
                                            <p
                                                onClick={() => {
                                                    setOptions(options.filter((opt) => opt !== option));
                                                    setValues(values.concat(option));
                                                }}
                                                key={option}
                                                className="h-[35px] hover:bg-secondary hover:text-white rounded-[8px] font-[500] text-[20px] p-[8px] flex items-center">
                                                {option}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex items-center mt-[40px]">
                                    <h4 className="font-[600] text-[24px] me-[20px]">Tải lên tài liệu mới</h4>
                                    <input
                                        onChange={(e) => {
                                            const newVals = e.currentTarget.value.split('\\');
                                            if (newVals) setValues(values.concat(newVals[newVals.length - 1]));
                                        }}
                                        type="file"
                                        name=""
                                        id=""
                                    />
                                </div>
                            </div>
                            <div className="w-[50%] flex flex-col ms-[80px]">
                                <h4 className="mb-[16px] font-[600] text-[24px]">Tài liệu đã chọn</h4>
                                <div className="flex flex-col flex-grow shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)] rounded-[8px] p-[20px]">
                                    {values.map((value) => (
                                        <p
                                            onClick={() => {
                                                setValues(values.filter((val) => val !== value));
                                                setOptions(options.concat(value));
                                            }}
                                            key={value}
                                            className="h-[35px] hover:bg-secondary hover:text-white rounded-[8px] font-[500] text-[20px] p-[8px] flex items-center">
                                            {value}
                                        </p>
                                    ))}
                                </div>
                                <div className="h-[36px] mt-[40px] self-end me-[20px]">
                                    <Link className="rounded-[8px] inline-block me-[12px] text-center font-[700] px-[12px] py-[4px] h-[100%] border-[1px]" href="/student">
                                        Huỷ
                                    </Link>
                                    <Link href="/student/print/config" className="rounded-[8px] inline-block  bg-primary text-white text-center font-[700] px-[12px] py-[4px] h-[100%] border-[1px]">
                                        Tiếp tục
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
