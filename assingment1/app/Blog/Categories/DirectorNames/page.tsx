import Link from 'next/link'
import React from 'react'
export default function Directors() {
  return (
    <div>
      <div>Information About Some Directors</div>
      <div>
      <Link href="/Blog/Categories/DirectorNames/irfan">About-Irfan</Link><br/>
      <Link href="/Blog/Categories/DirectorNames/Mumtaz">About-Mumtaz</Link><br/>
      <Link href="/Blog/Categories/DirectosNames/Sohail">About-Sohail</Link><br/>
      </div>
    </div>
  )
}
