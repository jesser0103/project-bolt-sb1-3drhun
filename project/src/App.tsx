import { Header } from '@/components/layout/Header';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { Features } from '@/components/home/Features';
import { Hero } from '@/components/home/Hero';
import { TherapistCard } from '@/components/therapist/TherapistCard';

function App() {
  // Sample therapist data
  const therapist = {
    name: 'Dr. Sarah Thompson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop',
    specialties: ['Anxiety', 'Depression', 'CBT', 'Trauma'],
    rating: 4.9,
    reviews: 128,
    nextAvailable: 'Tomorrow at 2:00 PM',
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <div className="container py-12">
          <h2 className="mb-8 text-2xl font-bold">Featured Therapist</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <TherapistCard therapist={therapist} />
          </div>
        </div>
        <div className="container py-12">
          <h2 className="mb-8 text-2xl font-bold">Chat Demo</h2>
          <ChatInterface />
        </div>
      </main>
    </div>
  );
}

export default App;