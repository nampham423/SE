import Header from '@/components/header';
import Link from 'next/link';

export default function StudentPrint() {
    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={0} student />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-between h-[100%]">
                    <h1 className="text-[48px] font-[700] mb-[20px] text-primary">In Tài Liệu</h1>
                    <div className="h-[100%]"></div>
                    <div className="flex justify-start m-[20px] w-[100%]">
                        <Link className="rounded-[8px] bg-primary text-white font-[700] p-[12px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]" href="/student">
                            Huỷ
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
