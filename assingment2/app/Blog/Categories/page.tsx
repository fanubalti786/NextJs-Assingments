import Link from 'next/link'
import React from 'react'
export default function Categorie() {
  return (
    <div>
      <div>Some Categories are available</div>
      <Link href="/Blog/Categories/DirectorNames">Directors</Link><br/>
      <Link href="/Blog/Categories/CeleberityNames">Celeberities</Link><br/>
      <Link href="/Blog/Categories/ActorNames">Actors</Link><br/>
    </div>
  )
}
