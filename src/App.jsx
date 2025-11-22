import Hero from './components/Hero';
import MessageSection from './components/MessageSection';
import Gallery from './components/Gallery';
import FinalSection from './components/FinalSection';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function App() {
  // Message content placeholders
  const messages = [
    "{{PARA_1}}",
    "{{PARA_2}}",
    "{{PARA_3}}",
    "{{PARA_4}}",
    "{{PARA_5}}"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Message Sections */}
      <div className="py-20 message-sections">
        {messages.map((message, index) => (
          <MessageSection
            key={index + 1}
            sectionNumber={index + 1}
            content={message}
            delay={index * 0.2}
          />
        ))}
      </div>

      {/* Photo Gallery */}
      <Gallery />

      {/* Final Section */}
      <FinalSection />

      {/* Background Music */}
      <BackgroundMusic />
    </div>
  );
}

export default App;
