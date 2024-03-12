
import '../assets/sass/style.css';
import MasterPage from '../components/Masterpage';

export default function MyApp({ Component, pageProps }) {
  return (
    <MasterPage>
    <Component {...pageProps} />
    </MasterPage>
  );
}
