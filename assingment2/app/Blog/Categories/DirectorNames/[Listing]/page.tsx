import Link from 'next/link'
import React from 'react'
export default function DirectorsName({params}:any) {
  return (
    <div>
       <div>All Blogs About {params.Listing}</div>
      <Link href="/Blog/Categories/DirectorNames/Profile/Profile_20230903">Profile</Link><br/>
      <Link href="/Blog/Categories/DirectorNames/Movie/Movie_INC2010">Moives</Link><br/>
      <Link href="/Blog/Categories/DirectorNames/Awards/Awards_INC010">Awards</Link><br/>
      <Link href="/Blog/Categories/DirectorNames/Biography/Biography_INC0120">Biography</Link><br/>
      <Link href="/Blog/Categories/DirectorNames/Contact/Contact_4784">Contact Us</Link><br/>
    </div>
  )
}
