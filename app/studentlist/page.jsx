import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div className="text-center mt-5">
        <h1 className="text-xl text-red-700 font-bold">Student List</h1>
      <ul className="border-2 border-indigo-600 w-56 mx-auto mt-3">
        <li><Link href="/studentlist/Anil">Anil</Link></li>
        <li><Link href="/studentlist/Basu">Basu</Link></li>
        <li><Link href="/studentlist/Ram">Ram</Link></li>
        <li><Link href="/studentlist/Sam">Sam</Link></li>
        <li><Link href="/studentlist/Om">Om</Link></li>
      </ul>
    </div>
  )
}

export default page
