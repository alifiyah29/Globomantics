import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h2>
        <Link href="/blog">Blog</Link>
      </h2>
      <h2>
        <Link href="/settings">Settings</Link>
      </h2>
      <h2>
        <Link href="/conference">Conference</Link>
      </h2>
    </>
  );
};

export default page;
