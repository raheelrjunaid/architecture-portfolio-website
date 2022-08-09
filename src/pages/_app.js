import "../../styles/globals.css";
import Navigation from "../components/Nav";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen relative">
      <Navigation />
      <main className="container py-14">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
