import Image from "next/image";
import Link from 'next/link'
import { request } from "@/server/request";

async function getData() {
  try {
    return request("category");
  } catch (err) {
    console.log(err);
  }
}

export default async function Home() {
  const { data: categories } = await getData();
  return (
    <main className="container">
      {/* <Image
        src="https://kursi24.uz/upload/iblock/3fe/3fed21cae9c2e2a1cfd173f40697379d.jpg"
        alt="Najot ta'lim"
        width={300}
        height={500}
      /> */}
      <h1>Mahsulotlar kategoriyasi</h1>
      <div className="cards">
      {categories?.map((ctg) => (
        <div key={ctg._id}>
          <Link href={`category/${ctg._id}`}>
            <div className="card">
            <img style={{height:"300px", width:"400px"} }src={ctg.images.url} alt="" />
            {ctg.name}
            </div>
            </Link>
        </div>
      ))}
      </div>
    </main>
  );
}
