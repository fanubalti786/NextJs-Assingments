import React from 'react'

export default function page({params}:any) {
  return (
    <div>
      <div>information about {params.CategoryName} with Some Blogs</div>
    </div>
  )
}
