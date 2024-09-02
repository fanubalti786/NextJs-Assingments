import Link from 'next/link'
import React from 'react'
export default function Actors() {
  return (
    <div>
      <div>Actors</div>
      <Link href="/Blog/Categories/ActorNames/Fawad">Fawad</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Haumuyu">Haumuyu</Link><br/>
      <Link href="/Blog/Categories/ActorNames/Alizafar">Alizafar</Link><br/>
    </div>
  )
}
