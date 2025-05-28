import Image from "next/image";

interface CardProps {
    image: string;
    title: string;
    date: string;
    author: string;
    categories: string[];
}
const Card: React.FC<CardProps> = async ({ image, title, date, author, categories }) => {
    return (
        <>
            <div className="card w-[328px] mt-8">
                <Image src={image} alt='' width='328' height='432' />
                <div className="flex gap-2 mt-[16px]">
                    {categories.map((category, index) => (
                        <a href="" key={index} className="hover:bg-black hover:shadow-lg px-[8px] py-[4px] border-2 border-gray-300 rounded-[14px] text-[16px] hover:text-white">{category}</a>
                    ))}
                    <a href="" className="hover:bg-black hover:shadow-lg px-2 py-1 text-center border-2 border-gray-300 rounded-[50%] text-[16px] hover:text-white">&#8226;&#8226;&#8226;</a>
                </div>
                <div className="mt-[16px]">
                <h1 className="text-[22px] font-light leading-[32px]">{title}</h1>
                </div>
                <div className="mt-[16px] flex items-center gap-2">
                <p className="text-[16px] "><span className="text-[#060606] opacity-25 uppercase">{date}</span> &#8226; By {author}</p>
                </div>
            </div>
        </>
    )
}

export default Card;