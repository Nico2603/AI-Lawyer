import Image from 'next/image';
import Header from '@/components/Header';
import ChatWindow from '@/components/ChatWindow';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center p-4 md:p-8">
        <div className="container max-w-6xl mx-auto">
          <section className="mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 mb-4">
              AI Lawyer
            </h1>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Asesoría legal inteligente especializada en leyes colombianas
            </p>
          </section>
          
          <ChatWindow />
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 