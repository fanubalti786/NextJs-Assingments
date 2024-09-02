import Link from 'next/link'
import React from 'react'
export default function Root() {
  return (
    <div>
      <div>All Contant Of Root Page</div><br/>
      <Link href="/Home">Home</Link><br/>
      <Link href="/About">About</Link><br/>
      <Link href="/Blog">Blog</Link><br/>
    </div>
  )
}
