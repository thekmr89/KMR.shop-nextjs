import Link from 'next/link'; 
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
            <title>KMR.shop</title>
        </Head>
      <div className="home-banner">
          <h1>Home</h1>
          <Link href='/about'>Go to About</Link>
      </div>
    </>
  );
}
