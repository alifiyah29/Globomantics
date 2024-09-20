import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <h1>Sessions</h1>
    <h2>
        <Link href="/conference">Back to Conference</Link>
      </h2>
    </>
  )
}

export default page