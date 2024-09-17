"use client"
import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


function page() {
    const router = useRouter();
  return (
    <div className="flex justify-between p-5 bg-slate-600 text-white">
      <div className="logo">
            <h1><Link href="/">NEXT</Link></h1>
      </div>
      <div className="menu">
        <ul className="flex">
            <li className="ml-2"><Link href="/Home">Home</Link></li>
            <li className="ml-2"><Link href="/About">About</Link></li>
            <li className="ml-2"><Link href="/Service">Service</Link></li>
            <li className="ml-2"><Link href="/studentlist">StudentList</Link></li>
            <li className="ml-2"><Link href="/Gallery">Gallery</Link></li>
            <li className="ml-2"><Link href="/Contact">Contact Us</Link></li>
            <li className="ml-2"><button className="btn bg-yellow-300 " onClick={()=>router.push("/Login")}>Login</button></li>
        </ul>
      </div>
    </div>
  )
}

export default page
   