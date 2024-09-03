import Link from 'next/link'
import React from 'react'
export default function Home() {
  return (
    <div>

      <Link href="/Blog"><button className="bg-pink-300 text-black border-2
       border-pink-800 p-1 mb-2 mt-4">Blog</button></Link><br/>

        <Link href="/About"><button className="bg-pink-300 text-black border-2
       border-pink-800 p-1 ">About</button></Link><br/>
       <br/>
      
      <div>Content Of Home Page</div>
    </div>
  )
}
