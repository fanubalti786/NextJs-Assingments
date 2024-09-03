import Link from 'next/link'
import React from 'react'
export default function page({params}:any) {
  return (
    <div>
      <div>Iformation About {params.Ids} </div>
      <Link href="/Blog/Categories/DirectorNames"><button>Back</button></Link>
    </div>
  )
}
