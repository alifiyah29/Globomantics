import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>Conference</h1>
      <h2>
        <Link href="/conference/speakers">Speakers</Link>
      </h2>
      <h2>
        <Link href="/conference/sessions">Sessions</Link>
      </h2>
    </>
  );
};

export default page;
