import Header from '@/components/header';
import Link from 'next/link';

export default function Info() {
    return (
        <div className="bg-bottom bg-contain h-screen bg-no-repeat bg-[url('/Rectangle12.svg')] flex flex-col items-stretch">
            <Header activeIndex={2} student />
            <div className="rounded-[8px] p-[40px] h-[80%] self-center bg-white mt-[20px] flex flex-col items-center w-[80%] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
                <div className="flex flex-col items-center justify-start h-[100%] w-[100%]">
                    <h1 className="text-[48px] font-[700] mb-[20px] text-primary">Thông Tin Sinh Viên</h1>
                    <div className="h-[80%] w-[100%] flex items-center justify-center">
                        <div className="h-[70%] flex items-center justify-center me-[120px]">
                            <img src="/sample-avatar.jpg" alt="" className="border-[1px] h-[100%]" />
                        </div>
                        <div className="text-[20px]">
                            <p className="mb-[20px]">
                                <span className="font-[700]">Họ tên sinh viên:</span> Nguyễn Văn A
                            </p>
                            <p className="mb-[20px]">
                                <span className="font-[700]">Mã số sinh viên:</span> 2152002
                            </p>
                            <p className="mb-[20px]">
                                <span className="font-[700]">Email:</span> a.nguyen01@hcmut.edu.vn
                            </p>
                            <p className="mb-[20px]">
                                <span className="font-[700]">Lớp:</span> CC21KHM1
                            </p>
                            <p className="mb-[20px]">
                                <span className="font-[700]">Ngành học:</span> Khoa học Máy tính
                            </p>
                            <p className="mb-[20px]">
                                <span className="font-[700]">Cơ sở học chính:</span> Cơ sở Lý Thường Kiệt
                            </p>
                            <div className="flex items-center border-t-[2px] py-[20px]">
                                <p>
                                    <span className="font-[700]">Số dư trang in:</span> 200{' '}
                                </p>
                                <Link href="/student/buy-paper" className="ms-[20px] rounded-[8px] inline-block  bg-primary text-white text-center font-[700] px-[12px] py-[4px] h-[100%] border-[1px]">
                                    Mua thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
