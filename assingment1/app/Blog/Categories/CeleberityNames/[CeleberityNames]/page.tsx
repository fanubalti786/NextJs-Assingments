import Link from 'next/link'
import React from 'react'
export default function CeleberityNames({params}:any) {
  return (
    <div>
       <div>All Blogs About {params.CeleberityNames}</div>
      <Link href="/Blog/Categories/CeleberityNames/Fawad/Fawad-doe-20230903">Profile</Link><br/>
      <Link href="/Blog/Categories/CeleberityNames/Haumuyu/Movie_INC2010">Moives</Link><br/>
      <Link href="/Blog/Categories/CeleberityNames/Alizafar/Awards_INC010">Awards</Link><br/>
      <Link href="/Blog/Categories/CeleberityNames/Alizafar/Biography_INC0120">Biography</Link><br/>
      <Link href="/Blog/Categories/CeleberityNames/Alizafar/Contact">Contact Us</Link><br/>
    </div>
  )
}
