import Image from "next/image";
import Navbar from "./components/navbar";
import Card from "./components/Card";

const postCard = [
  {
    image: "/art.png",
    title: "The Art of Skateboarding: A Journey Through the Streets",
    date: "Oct 10, 2023",
    author: "John Doe",
  },
  {
    image: "/art.png",
    title: "The Art of Skateboarding: A Journey Through the Streets",
    date: "Oct 10, 2023",
    author: "John Doe",
  },
  {
    image: "/art.png",
    title: "The Art of Skateboarding: A Journey Through the Streets",
    date: "Oct 10, 2023",
    author: "John Doe",
  },
  {
    image: "/art.png",
    title: "The Art of Skateboarding: A Journey Through the Streets",
    date: "Oct 10, 2023",
    author: "John Doe",
  },
]

export default function Home() {
  return (
    <>
      <div className="block px-[68px] py-[120px]">
        <div className="flex items-center">
          <h1 className="font-regular text-[100px] 2xl:text-[200px] text-center">EMPOWERING</h1>
          <p className="opacity-[25%] ml-10 w-[440px] 2xl:w-[880px] text-[#060606] text-[16px] 2xl:text-[32px] 2xl:mt">Explore the stories that shape culture, redefine creativity And ignite conversations. WWW is where today’s voices connect and thrive.</p>
        </div>
        <div className="flex items-center gap-2 pl-15">
          <h1 className="font-regular text-[100px] 2xl:text-[200px] text-center">A</h1>
          <h1 className="px-[32px] border-2 border-black rounded-[128px] font-regular text-[100px] 2xl:text-[200px]">NEWWW</h1>
          <h1 className="font-regular text-[100px] 2xl:text-[200px]">GENERATION</h1>
        </div>
        <div className="flex items-center gap-12 pl-27">
          <p className="opacity-[25%] ml-10 w-[160px] 2xl:w-[320px] text-[#060606] text-[16px] 2xl:text-[32px] text-right">From the latest trends to immersive designs and events</p>
          <h1 className="font-regular text-[100px] 2xl:text-[200px] text-center">CREATIVE THINKERS</h1>
        </div>
      </div>
      <div className="block px-[34px] py-[80px]">
        <div className="flex items-center gap-5">
          <h1 className="font-light text-[36px]">Features</h1>
          <a href="" className="px-[16px] py-[8px] border-2 border-black rounded-[24px] text-[16px]">View All</a>
        </div>

        <div className="grid grid-cols-4 py-[32px] gap-[20px]">
          {postCard.map((post, index) => (
            <Card
              key={index}
              image={post.image}
              title={post.title}
              date={post.date}
              author={post.author}
            />
          ))}
        </div>
      </div>
    </>
  );
}
