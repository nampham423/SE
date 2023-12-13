import Link from 'next/link';

export default function Header({ activeIndex, student }) {
    return (
        <nav className="flex justify-between p-[20px]">
            <Link href={student ? '/student' : '/spso'}>
                <div className="flex items-center">
                    <img className="w-[50px] h-[50px] me-[10px]" src="/Logo-DH-Bach-Khoa-HCMUT.png" alt="" />
                    <h1 className="text-[#210F7A] font-[700] text-[24px]">Student Smart Printing Service</h1>
                </div>
            </Link>
            <div className="flex items-center">
                <div>
                    <ul className="flex items-center me-[32px]">
                        {student ? (
                            <>
                                <li className={`mx-[16px] text-[20px] ${activeIndex === 0 ? 'underline text-[#210F7A]' : ''}`}>
                                    <Link href="/student/print">In tài liệu</Link>
                                </li>
                                <li className={`mx-[16px] text-[20px] ${activeIndex === 1 ? 'underline text-[#210F7A]' : ''}`}>
                                    <Link href="/student/buy-paper">Mua giấy</Link>
                                </li>
                                <li className={`mx-[16px] text-[20px] ${activeIndex === 2 ? 'underline text-[#210F7A]' : ''}`}>
                                    <Link href="/student/info">Thông tin</Link>
                                </li>
                                <li className={`mx-[16px] text-[20px] ${activeIndex === 3 ? 'underline text-[#210F7A]' : ''}`}>
                                    <Link href="/student/history">Lịch sử in</Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className={`mx-[16px] text-[20px] ${activeIndex === 0 ? 'underline text-[#210F7A]' : ''}`}>
                                    <Link href="/spso/system">Hệ thống</Link>
                                </li>
                                <li className={`mx-[16px] text-[20px] ${activeIndex === 1 ? 'underline text-[#210F7A]' : ''}`}>
                                    <Link href="/spso/student">Sinh viên</Link>
                                </li>
                                <li className={`mx-[16px] text-[20px] ${activeIndex === 2 ? 'underline text-[#210F7A]' : ''}`}>
                                    <Link href="/spso/history">Lịch sử in</Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
                <Link href={student ? '/spso' : '/student'}>
                    <div className="flex items-center rounded-[24px] border-[1px] border-solid border-[#210F7A] h-[50px]">
                        <img className="rounded-full h-[100%]" src="/cat.jpg" alt="" />
                        <p className="ms-[8px] me-[24px]">
                            <span className="text-[12px]">Welcome</span>
                            <br /> Username
                        </p>
                    </div>
                </Link>
            </div>
        </nav>
    );
}
