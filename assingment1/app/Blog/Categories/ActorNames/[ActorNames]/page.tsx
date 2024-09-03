import Link from 'next/link'
import React from 'react'

export default function ActorNames({params}:any) {
  return (
    <div>
      <div>All Blogs About {params.ActorNames}</div>
      <Link href="/Blog/Categories/ActorNames/Fawad/Fawad-doe-20230903">Profile</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Haumuyu/INC2010">Moives</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Alizafar/INC010">Awards</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Alizafar/INC0120">Biography</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Alizafar/INC200">Contact Us</Link><br/>


      
    </div>
  )
}