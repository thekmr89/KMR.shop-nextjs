import Link from 'next/link';

export default function MasterPage({ children}) {
  return (
    <div>
      <header>
        <div className="header-wrapper">
          <div className="colA">
            <div className="logo">
              <Link href='/'>KMR.<span>shop</span></Link>
            </div>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
      <footer>
        <div className="footer-wrapper">
          <div className="logo">
              <Link href='/'>KMR.<span>shop</span></Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
