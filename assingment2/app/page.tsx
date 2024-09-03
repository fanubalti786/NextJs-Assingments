import Link from 'next/link'
import React from 'react'
export default function Root() {
  return (
    <div>
      <div>All Contant Of Root Page</div>
      <Link href="/Home"><button className="bg-pink-300 text-black border-2
       border-pink-800 p-1 ">Get start</button></Link>
    </div>
  )
}
