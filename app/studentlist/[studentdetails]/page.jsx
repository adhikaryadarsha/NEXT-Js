'use client'
import Link from 'next/link'


import React from 'react'

const page = ({params}) => {

  return (
    <div>
      <p className="text-lg text-red-600">Student name : {params.studentdetails}</p>
      <div className="bg-green-950 w-28 text-center text-white mt-5">
               <Link href="/studentlist">Back to page</Link>
      </div>
   
    </div>
  )
}

export default page
