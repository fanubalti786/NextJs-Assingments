import Link from 'next/link'
import React from 'react'

export default function Blog() {
  return (
    <div>
      <div>Content of Blog Page with Multiple Blogs</div>
      <Link href="/Blog/Categories">Categories</Link>

    </div>
  )
}
