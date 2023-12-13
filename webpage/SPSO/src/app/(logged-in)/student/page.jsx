import Header from '@/components/header';

export default function Student() {
    return (
        <div>
            <Header activeIndex={-1} student />
            <div class="mt-[70px] flex flex-col items-center h-[100vh]">
                <h2 class="text-[#210F7A] text-[32px] font-[700] mb-[100px]">Dịch vụ In</h2>
                <div class="flex items-center justify-around mb-[100px]">
                    <a href="/student/print">
                        <div class="mx-[20px] flex flex-col items-center justify-around p-[12px] w-[250px] h-[250px] bg-[#B4DBFC]">
                            <h4 class="font-[700] text-[24px]">In tài liệu</h4>
                            <img src="/Rectangle 11.png" alt="" />
                        </div>
                    </a>
                    <a href="/student/buy-paper">
                        <div class="mx-[20px] flex flex-col items-center justify-around p-[12px] w-[250px] h-[250px] bg-[#B0D381]">
                            <h4 class="font-[700] text-[24px]">Mua giấy</h4>
                            <img src="/Rectangle 111.png" alt="" />
                        </div>
                    </a>
                    <a href="/student/info">
                        <div class="mx-[20px] flex flex-col items-center justify-around p-[12px] w-[250px] h-[250px] bg-[#F2F5DA]">
                            <h4 class="font-[700] text-[24px]">Thông tin</h4>
                            <img src="/Rectangle 91.png" alt="" />
                        </div>
                    </a>
                    <a href="/student/history">
                        <div class="mx-[20px] flex flex-col items-center justify-around p-[12px] w-[250px] h-[250px] bg-[#F2F5DA]">
                            <h4 class="font-[700] text-[24px]">Xem lịch sử</h4>
                            <img src="/rec 12.png" alt="" />
                        </div>
                    </a>
                </div>
                <button class="w-[300px] h-[50px] bg-[#210F7A] text-white font-[500] text-[20px]">Đăng xuất</button>
            </div>
        </div>
    );
}
