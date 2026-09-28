import Navbar from '../components/common/Navbar';
import HeroBanner from '../sections/HeroBanner';
import Footer from '../components/common/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <HeroBanner />
      </main>
      <Footer />
    </div>
  );
}
