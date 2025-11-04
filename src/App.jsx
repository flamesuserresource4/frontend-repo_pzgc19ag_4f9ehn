import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import ValuePropsAndFeatures from './components/ValuePropsAndFeatures';
import SocialProofAndDownload from './components/SocialProofAndDownload';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <HeroSection />
      <HowItWorks />
      <ValuePropsAndFeatures />
      <SocialProofAndDownload />
    </div>
  );
}

export default App;
