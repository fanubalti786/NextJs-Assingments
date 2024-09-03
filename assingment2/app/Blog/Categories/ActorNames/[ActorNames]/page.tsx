import Link from 'next/link'
import React from 'react'

export default function ActorNames({params}:any) {
  return (
    <div>
      <div>All Blogs About {params.ActorNames}</div>
      <Link href="/Blog/Categories/ActorNames/Fawad/Profile_20230903">Profile</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Movies/Movie_INC2010">Moives</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Awards/Awards_INC010">Awards</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Biography/Biography_INC0120">Biography</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Contact/Contact_INC200">Contact Us</Link><br/>


      
    </div>
  )
}