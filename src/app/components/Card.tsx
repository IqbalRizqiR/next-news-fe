import Image from "next/image";

interface CardProps {
    images: string;
    title: string;
    date: string;
    author: string;
    categories: string[];
}
const Card: React.FC<CardProps> = async ({ images, title, date, author, categories }) => {
    return (
        <>
            <div className="mt-8 w-[328px] max-sm:w-full 2xl:w-[656px] card">
                <Image src={images} alt='' width='300' height='400' className="max-sm:w-full 2xl:w-[600px]" />
                <div className="flex gap-2 mt-[16px]">
                    {categories.map((category, index) => (
                        <a href="" key={index} className="hover:bg-black hover:shadow-lg px-[8px] py-[4px] border-2 border-gray-300 rounded-[14px] text-[16px] hover:text-white">{category}</a>
                    ))}
                    <a href="" className="hover:bg-black hover:shadow-lg px-2 py-1 border-2 border-gray-300 rounded-[50%] text-[16px] hover:text-white text-center">&#8226;&#8226;&#8226;</a>
                </div>
                <div className="mt-[16px]">
                    <h1 className="font-light text-[22px] leading-[32px]">{title}</h1>
                </div>
                <div className="flex items-center gap-2 mt-[16px]">
                    <p className="text-[16px]"><span className="opacity-25 text-[#060606] uppercase">{date}</span> &#8226; By {author}</p>
                </div>
            </div>

        </>
    )
}

export default Card;