import Link from 'next/link'
import React from 'react'
export default function Directors() {
  return (
    <div>
      <div>Information About Some Directors</div>
      <div>
      <Link href="/Blog/Categories/DirectorNames/khaleel-ur-Rahman">khaleel-ur-Rahman</Link><br/>
      <Link href="/Blog/Categories/DirectorNames/Hamza-Abbasi">Hamza-Abbasi</Link><br/>
      <Link href="/Blog/Categories/DirectorNames/Shahzer-Butt">Shahzer-Butt</Link><br/>
      </div>
    </div>
  )
}
