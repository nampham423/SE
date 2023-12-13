import Image from 'next/image';

export default function Notification({ message }) {
    return (
        <div className="animate-bounce border-s-[12px] border-green-400 fixed flex justify-between items-center bg-green-100 p-[20px] rounded-[8px] w-[400px] top-[100px] right-[40px] shadow-[0px_4px_47px_0px_rgba(11,40,120,0.30)]">
            <div className="h-[100%] me-[20px]">
                <Image src="/success.svg" alt="" width={0} height={0} className="h-[40px] w-[40px]" />
            </div>
            <div className="flex-grow">
                <h4 className="font-[500] text-[20px]">Thành công!</h4>
                <p>{message}</p>
            </div>
        </div>
    );
}
