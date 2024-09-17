import React from 'react'
import { Poppins } from "next/font/google"



const poppins = Poppins({
weight: '200',
subsets: ['latin'],
display: 'swap',

})


export default function page() {
  return (
    <div >
      <h1 className="text-center text-9xl text-red-700 font-bold" style={{fontFamily: "Protest Guerrilla",fontWeight: 300}}>About</h1>
      <h1 className="text-center text-xl font-bold mb-3">Font optimization or <span style={{color:'red'}}>Dynamic Metadata</span></h1>
      <div className="container mx-auto">
      <p className={poppins.className}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam earum provident pariatur aliquam quod, doloribus voluptates voluptatem, sit repellendus repudiandae atque laborum dolores harum beatae saepe praesentium error aliquid adipisci dicta laudantium quo debitis eligendi nulla. Quam hic, natus repellat quo eligendi fugiat esse tenetur facilis libero, fugit et modi harum cum ratione, quibusdam voluptatem quae maxime sapiente. Iure voluptate illo beatae doloribus? Unde dolores necessitatibus, sequi nulla mollitia natus dolore facilis atque cumque dignissimos magni asperiores aliquam laudantium, hic porro repudiandae sed et odit veritatis aliquid. Possimus, mollitia ea aperiam impedit similique labore? Quisquam necessitatibus culpa repudiandae deleniti molestiae tempore exercitationem qui officiis consequuntur nobis in ipsam perferendis facere voluptatem, quia debitis totam facilis dolor! Nulla voluptate voluptatibus nesciunt itaque quia, perspiciatis magni. Veritatis iusto corrupti, adipisci in nihil animi hic. Beatae unde voluptas itaque necessitatibus totam saepe recusandae ex architecto eos ipsum alias fugiat placeat, consequuntur culpa aut error, blanditiis assumenda nihil distinctio adipisci qui eaque accusamus corrupti. Numquam deserunt sunt sed nesciunt quam earum minima! Quod quidem ex nesciunt totam neque, fugit eveniet consectetur quaerat quibusdam, perspiciatis ut consequatur! Aliquam facilis deleniti corrupti eius odio nesciunt distinctio, molestiae excepturi, ducimus amet tenetur laborum, omnis est impedit aperiam sapiente quia accusamus reiciendis dolor laudantium error pariatur quae nam! Quae quibusdam omnis consequuntur earum voluptatem cumque, alias assumenda nesciunt. Nisi cum obcaecati fugit aperiam rerum. Laborum delectus libero amet. Ex, ab suscipit porro sequi voluptatibus vero. Doloribus aperiam voluptatibus numquam blanditiis rerum veritatis. Tempora quod nostrum excepturi minus voluptatibus adipisci totam iusto inventore alias aut. Vitae asperiores necessitatibus est optio, quo voluptas eaque ab repellat, temporibus doloremque perferendis odio. Molestiae dolores neque, unde eaque libero quo repellat quisquam maiores ut velit necessitatibus obcaecati consequuntur assumenda placeat optio odit iste consectetur quis amet natus nisi ullam aliquam. Sapiente perspiciatis, enim ducimus deleniti officia tenetur, nisi dignissimos nostrum temporibus vitae quidem nihil voluptatum excepturi? Ipsum odio dolor voluptatem aspernatur, expedita aliquam vero molestiae autem animi velit dolores quam doloremque amet praesentium excepturi magni vel eum ipsa? Quisquam suscipit porro minima, expedita laboriosam officiis dolore impedit necessitatibus eius iusto velit at repudiandae fugit nisi quod accusamus ex adipisci amet dolorem aliquam. Aut, nobis reprehenderit sequi voluptatibus sit omnis minima vel veniam vero dolores veritatis enim ea, ipsum illum dolorum facilis quis labore repellendus eos repellat maxime totam voluptas tempora. Nam dolores inventore repudiandae autem dolorem quod rerum odio natus sed illum, necessitatibus amet, exercitationem magnam nostrum cum velit quidem. Repudiandae at expedita vel sapiente quasi, eligendi aperiam velit nesciunt nostrum quae doloremque accusantium dolore assumenda officia sint quia placeat. Omnis voluptatum quod libero dolor minus voluptatibus pariatur quo error iste accusamus, repellat itaque blanditiis eaque saepe minima quibusdam optio laudantium dolore quasi porro vero. Quos temporibus facilis tenetur officia, error, natus aperiam suscipit consequuntur nesciunt neque ratione libero rerum rem sunt! Sit hic tempore quod nam provident dolorem delectus minima facere. Unde voluptas repellendus odit explicabo, corporis commodi soluta quae voluptates, possimus nemo, debitis vitae cum minima laborum delectus quo culpa porro.</p>
      </div>
    </div>
  )
}




// export function generateMetadata({ params }) {
//   return {
//     title: "meta title",
//     description: "meta description"
//   };
// }

export function generateMetadata(){
return{
  title: "meta title",
   description: "meta description"
};
}