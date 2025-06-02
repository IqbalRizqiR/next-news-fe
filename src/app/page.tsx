import Image from "next/image";
import Navbar from "./components/navbar";
import Card from "./components/Card";
import image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown, faArrowRight, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Button from "./components/button1";
import Categories from "./components/categories";
import Link from "next/link";




type Post = {
  images: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
};



const fetchData = async (): Promise<Post[]> => {
  const response = await fetch("https://dummyjson.com/posts?limit=7");
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

      <div className="block justify-center max-sm:p-[40px] 2xl:p-[200px] px-[68px] py-[120px] max-sm:pt-[222px]">
        <div className="flex items-center gap-2">
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px] text-center">EMPOWERING</h1>
          <p className="opacity-[25%] max-sm:w-[220px] sm:w-[220px] md:w-[440px] lg:w-[440px] 2xl:w-[880px] xl:w-[440px] text-[#060606] max-sm:text-[5px] sm:text-[10px] md:text-[10px] lg:text-[16px] 2xl:text-[32px] xl:text-[16px]">Explore the stories that shape culture, redefine creativity And ignite conversations. WWW is where today’s voices connect and thrive.</p>
        </div>
        <div className="flex items-center gap-2 pl-15">
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px] text-center">A</h1>
          <h1 className="px-[32px] border-2 border-black rounded-[128px] font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px] text-center">NEWWW</h1>
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px]">GENERATION</h1>
        </div>
        <div className="flex items-center gap-2 pl-44 max-sm:pl-[20px]">
          <p className="opacity-[25%] max-sm:w-[100px] lg:w-[160px] 2xl:w-[340px] text-[#060606] max-sm:text-[5px] sm:text-[10px] md:text-[10px] lg:text-[16px] 2xl:text-[32px] xl:text-[16px] text-right x">From the latest trends to immersive designs and events</p>
          <h1 className="font-regular max-sm:text-[25px] sm:text-[50px] md:text-[50px] lg:text-[50px] 2xl:text-[200px] xl:text-[100px]">CREATIVE THINKERS</h1>
        </div>
      </div>
      <div className="block px-[34px] py-[80px] max-sm:py-[20px ]">
        <Button
          title="Features" href={"/ayam"} />
        <div className="justify-center gap-[20px] grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-4 py-[32px]">
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
          <div className="block items-center mt-8 px-[20px] pt-[80px] 2xl:pt-40 border-2 border-bl lg:w-[328px] 2xl:w-[600px] max-sm:h-[400px] 2xl:h-[600px]">
            <h1 className="font-regular text-[32px] text-center">Subscribe so you don't miss out!</h1>
            <div className="block pt-[100px] 2xl:pt-45">
              <div className="flex items-center gap-15 max-sm:gap-50 2xl:gap-80">
                <input type="text" placeholder="Enter your mail" />

                <FontAwesomeIcon className="opacity-25 text-[#060606] lg:text-[18px]" icon={faArrowRight} />
              </div>
              <hr className="mt-1"></hr>
            </div>

          </div>
        </div>
      </div>


      <div className="mx-[34px]">
        <Button
          title="Features" href={"/ayam"} />
        <div className="grid mt-[32px]"></div>
        <div className="block bg-[#FF4400] w-[444px] h-[628px]">
          <div className="px-[34px] py-[34px]">
            <Categories categories={["Events", "Music", "Movies", "Festivals"]} href={""} />
            <h2 className="pt-[16px] font-light text-[44px] text-white">Punk in Drublic: Craft Beer & Music Festival
              Spring 2024</h2>
            <div className="flex items-center gap-4 pt-[32px]">
              <Link href="" className="px-6 py-2 border-1 border-white rounded-3xl font-light text-white text-lg">Buy Tickets</Link>
              <FontAwesomeIcon className="p-[12] border-1 border-white rounded-full font-extralight text-[18px] text-white px]" icon={faArrowRightLong} />

            </div>
            <div className="flex gap-2 pt-35">
              <p className="opacity-25 font-light text-white text-lg">19 Mar 2024 </p>
              <span className="opacity-100 font-light text-white text-lg">• At Henry Maier Festival Park</span></div>

          </div>
        </div>


      </div>



    </>
  );
}
