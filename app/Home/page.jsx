import React from 'react'

function page() {
  return (
    <div>
      <h1 className="text-9xl text-center font-black text-orange-600 mt-32">Home</h1>
    </div>
  )
}

export default page

export function generateMetadata(){
  return{
  title:"Home page",
  description:"Home description",
}
}