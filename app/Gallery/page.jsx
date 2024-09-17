import React from 'react'
import Image from 'next/image';
import bannerimg from '../../public/banner2.jpg';

function page() {
  // const bgimg =bannerimg.src;
  return (
    <div className="text-center ">
      <h1>Gallery</h1>
      <h4>Optimization image</h4>
      {/* next image tag */}
      <Image src={bannerimg} width={500} height={100} className="mx-auto mb-5"/>

      {/* html image tag */}
      {/* <img src={bannerimg.src} alt="" /> */}
    </div>
  )
}

export default page
