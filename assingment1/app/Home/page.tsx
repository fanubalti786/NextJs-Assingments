import Link from 'next/link'
import React from 'react'
export default function Home() {
  return (
    <div>
      <Link href="/About" className="bg-black">About</Link><br/>
      <Link href="/Blog">Blog</Link><br/>
      <div>Content Of Home Page</div>
    </div>
  )
}
