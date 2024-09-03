import Link from 'next/link'
import React from 'react'
export default function Root() {
  return (
    <div>
      <div>All Contant Of Root Page</div>
      <Link href="/Home"><button>Get start</button></Link>
    </div>
  )
}
