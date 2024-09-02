import Link from 'next/link'
import React from 'react'
export default function Categorie() {
  return (
    <div>
      <div>Some Categories are available</div>
      <Link href="/Blog/Categories/Dog">Dog</Link><br/>
      <Link href="/Blog/Categories/Lion">Lion</Link><br/>
      <Link href="/Blog/Categories/Monkey">Monkey</Link><br/>
    </div>
  )
}
