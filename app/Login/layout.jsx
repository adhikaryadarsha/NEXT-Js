'use client'
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';


const layout = ({children}) => {
    const pathname = usePathname();

  return (
    <div>
        <h4>Common layout</h4>

           {
            pathname!=="/Login/Teacherlogin"?
      
      <ul className="flex mt-5">
        <li className="mr-2 bg-yellow-300"><Link href="/Login">Login</Link></li>
         <li className="mr-2 bg-red-400"><Link href="/Login/Studentlogin">Student Login</Link></li>
          <li className="mr-2 bg-blue-400"><Link href="/Login/Teacherlogin">Teacher Login</Link></li>
      </ul>   
      :null 
       }
       {children}
    </div>
  )
}

export default layout
