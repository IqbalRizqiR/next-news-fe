import Image from "next/image";
import Navbar from "./components/navbar";
import Card from "./components/Card";
import image from "next/image";

type Post = {
  images: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
};



const fetchData = async (): Promise<Post[]> => {
  const response = await fetch("https://dummyjson.com/posts?limit=8");
  const data = await response.json();

  console.log(data);




  return data.posts;
};


// const postbackup = [
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
//   {
//     images: "/art.png",
//     title: "Post 1",
//     date: "2023-06-01",
//     author: "John Doe",
//     tags: ["Technology", "Coding"],
//   },
// ];










export default async function Home() {
  const postData = await fetchData();
  // const posts = postbackup;



  return (
    <>
      <div className="block px-[68px] max-sm:px-[22px] py-[120px]">
        <div className="flex items-center gap-2">
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px] text-center">EMPOWERING</h1>
          <p className="opacity-[25%] max-sm:w-[220px] sm:w-[220px] md:w-[440px] lg:w-[440px] 2xl:w-[880px] xl:w-[440px] text-[#060606] max-sm:text-[5px] sm:text-[10px] md:text-[10px] lg:text-[16px] 2xl:text-[32px] xl:text-[16px]">Explore the stories that shape culture, redefine creativity And ignite conversations. WWW is where today’s voices connect and thrive.</p>
        </div>
        <div className="flex items-center gap-2 pl-15">
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px] text-center">A</h1>
          <h1 className="px-[32px] border-2 border-black rounded-[128px] font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px] text-center">NEWWW</h1>
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px]">GENERATION</h1>
        </div>
        <div className="flex items-center gap-2 pl-20">
          <p className="opacity-[25%] w-[160px] max-sm:w-[100px] text-[#060606] max-sm:text-[5px] sm:text-[10px] md:text-[10px] lg:text-[16px] 2xl:text-[32px] xl:text-[16px] text-right max">From the latest trends to immersive designs and events</p>
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px]">CREATIVE THINKERS</h1>
        </div>
      </div>
      <div className="block px-[34px] py-[80px] max-sm:py-[20px]">
        <div className="flex items-center gap-5">
          <h1 className="font-light text-[36px] max-sm:text-[20px]">Features</h1>
          <a href="" className="px-[16px] py-[8px] border-2 border-black rounded-[24px] text-[16px] max-sm:text-[8px]">View All</a>
        </div>
        <div className="gap-[20px] grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 py-[32px]">
          {postData.map((post, index) => (
            <Card
              key={index}
              title={post.title}
              date={"2023-06-01"}
              author={"jhiancok"}
              categories={post.tags}
              images={'/art.png'}
            />
          ))}
        </div>
      </div>

      <div className="grid"></div>
    </>
  );
}
