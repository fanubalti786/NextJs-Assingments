import Link from 'next/link'
import React from 'react'
export default function page({params}:any) {
  return (
    <div>
      <div>Iformation About {params.Ids} </div>
      <Link href="/Blog/Categories/DirectorNames"><button className="bg-pink-300 text-black border-2
       border-pink-800 p-1">Back</button></Link>
    </div>
  )
}
