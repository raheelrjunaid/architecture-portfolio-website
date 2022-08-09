import "../../styles/globals.css";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen max-w-screen-lg mx-auto grid grid-rows-[auto_1fr_auto]">
      <Navigation />
      <main className="container py-14">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
