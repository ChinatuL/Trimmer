import { QRCodeSVG } from "qrcode.react";

export default function LinkComponent({
    longUrl,
    shortUrl,
    date,
    clicks,
}: {
    longUrl: string;
    shortUrl: string;
    date: string;
    clicks: number;
}) {
    return (
        <div className='w-full px-4 cursor-pointer'>
            <div className='grid grid-cols-[30%_25%_1fr_1fr_1fr] justify-center content-center items-center gap-4 border-b-2 border-b-[#262165] px-4 pt-4 pb-1'>
                <div>
                    <p className='truncate justify-self-start'>{longUrl}</p>
                </div>
                <div>
                    <p>{shortUrl}</p>
                </div>
                <div className='justify-self-center'>
                    <QRCodeSVG value={shortUrl} size={50} />
                </div>
                <div className='justify-self-center'>
                    <p>{date}</p>
                </div>
                <div className='justify-self-center'>
                    <p>{clicks}</p>
                </div>
            </div>
        </div>
    );
}
