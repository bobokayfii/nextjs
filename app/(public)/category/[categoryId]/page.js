"use client";

import { request } from '@/server/request';
import { useParams } from 'next/navigation';
async function getData() {
  try {
    return request(`product?category=$`);
  } catch (err) {
    console.log(err);
  }
}
export default function CategoryPage() {
  const {categoryId} = useParams();
  console.log(categoryId);
  return (
    <main className="">
     
    </main>
  )
}