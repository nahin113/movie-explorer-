import Navbar from '../components/common/Navbar';
import AboutInfo from '../components/about/AboutInfo';
import Footer from '../components/common/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <AboutInfo />
      </main>
      <Footer />
    </div>
  );
}
