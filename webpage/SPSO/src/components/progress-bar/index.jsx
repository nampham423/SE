export default function ProgressBar({ progress }) {
    if (progress === 1)
        return (
            <div className="flex items-center w-[50%]">
                <div className="relative flex items-center bg-primary justify-center rounded-full w-[40px] aspect-square">
                    <p className="text-white font-[500]">1</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Chọn file</p>
                </div>

                <div className="bg-[#ccc] flex-grow h-[8px]"></div>
                <div className="relative flex items-center bg-[#ccc] justify-center rounded-full w-[40px] aspect-square">
                    <p className="font-[500]">2</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Thiết lập trang</p>
                </div>

                <div className="bg-[#ccc] flex-grow h-[8px]"></div>
                <div className="relative flex items-center bg-[#ccc] justify-center rounded-full w-[40px] aspect-square">
                    <p className="font-[500]">3</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Chọn máy in</p>
                </div>
            </div>
        );
    else if (progress === 2)
        return (
            <div className="flex items-center w-[50%]">
                <div className="relative flex items-center bg-secondary justify-center rounded-full w-[40px] aspect-square">
                    <p className="text-white font-[500]">1</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Chọn file</p>
                </div>

                <div className="bg-secondary flex-grow h-[8px]"></div>
                <div className="relative flex items-center bg-primary justify-center rounded-full w-[40px] aspect-square">
                    <p className="text-white font-[500]">2</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Thiết lập trang</p>
                </div>

                <div className="bg-[#ccc] flex-grow h-[8px]"></div>
                <div className="relative flex items-center bg-[#ccc] justify-center rounded-full w-[40px] aspect-square">
                    <p className="font-[500]">3</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Chọn máy in</p>
                </div>
            </div>
        );
    else if (progress === 3)
        return (
            <div className="flex items-center w-[50%]">
                <div className="relative flex items-center bg-secondary justify-center rounded-full w-[40px] aspect-square">
                    <p className="text-white font-[500]">1</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Chọn file</p>
                </div>

                <div className="bg-secondary flex-grow h-[8px]"></div>
                <div className="relative flex items-center bg-secondary justify-center rounded-full w-[40px] aspect-square">
                    <p className="font-[500] text-white">2</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Thiết lập trang</p>
                </div>

                <div className="bg-secondary flex-grow h-[8px]"></div>
                <div className="relative flex items-center bg-primary justify-center rounded-full w-[40px] aspect-square">
                    <p className="font-[500] text-white">3</p>
                    <p className="font-[500] flex items-center justify-center absolute left-[-50px] right-[-50px] bottom-[-28px]">Chọn máy in</p>
                </div>
            </div>
        );
}
