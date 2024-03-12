import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
          <title>About</title>
      </Head>
      <div className="home-banner">
          <h1>About</h1>
          <Link href='/'>Go to Home</Link>
      </div>
    </>
  );
}
