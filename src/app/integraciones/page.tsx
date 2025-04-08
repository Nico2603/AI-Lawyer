import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Cpu, Mic, Video, Database, Code, GitBranch, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface IntegrationCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  status: 'active' | 'coming-soon' | 'in-development';
  color: string;
}

export default function IntegracionesPage() {
  const integrations: IntegrationCard[] = [
    {
      title: "OpenAI",
      description: "Motor de razonamiento basado en GPT-4 para análisis y respuestas legales precisas.",
      icon: <Cpu size={28} />,
      status: 'active',
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      title: "LangChain / LangGraph",
      description: "Orquestación avanzada de IA y cadenas de razonamiento para respuestas complejas.",
      icon: <GitBranch size={28} />,
      status: 'active',
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "LiveKit",
      description: "Comunicación en tiempo real con video, audio y chat para consultas virtuales.",
      icon: <Video size={28} />,
      status: 'coming-soon',
      color: "bg-purple-50 text-purple-600"
    },
    {
      title: "Deepgram",
      description: "Transcripción y análisis de voz en tiempo real para consultas orales.",
      icon: <Mic size={28} />,
      status: 'in-development',
      color: "bg-rose-50 text-rose-600"
    },
    {
      title: "Cartesia",
      description: "Visualización dinámica de flujos legales y representación de conocimiento.",
      icon: <Code size={28} />,
      status: 'in-development',
      color: "bg-amber-50 text-amber-600"
    },
    {
      title: "VectorDB",
      description: "Base de conocimiento con legislación colombiana y jurisprudencia actualizada.",
      icon: <Database size={28} />,
      status: 'active',
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  // Function to get status badge
  const getStatusBadge = (status: 'active' | 'coming-soon' | 'in-development') => {
    switch (status) {
      case 'active':
        return <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Activo</span>;
      case 'coming-soon':
        return <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Próximamente</span>;
      case 'in-development':
        return <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">En Desarrollo</span>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-primary-500 mb-4">Integraciones Tecnológicas</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              AI Lawyer se integra con tecnologías de vanguardia para ofrecer un servicio legal 
              integral y de alta calidad. Nuestras integraciones potencian la experiencia de 
              asesoría legal automatizada.
            </p>
          </div>
          
          {/* Integrations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all">
                <div className={`w-12 h-12 rounded-lg ${integration.color} flex items-center justify-center mb-4`}>
                  {integration.icon}
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-neutral-800 text-lg">{integration.title}</h3>
                  {getStatusBadge(integration.status)}
                </div>
                
                <p className="text-neutral-600 mb-4">
                  {integration.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="text-primary-500 hover:bg-primary-50 p-0 h-auto"
                  disabled={integration.status !== 'active'}
                >
                  <span>Ver detalles</span>
                  <ArrowRight size={16} className="ml-1" />
                </Button>
              </div>
            ))}
          </div>
          
          {/* Integration Benefits */}
          <section className="bg-primary-50 rounded-lg p-8 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary-500 mb-2">
                Beneficios de Nuestras Integraciones
              </h2>
              <p className="text-neutral-600">
                Cada integración está diseñada para mejorar aspectos específicos de la experiencia legal.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-primary-500 mb-2">Asesoría Precisa</h3>
                <p className="text-sm text-neutral-600">
                  Respuestas fundamentadas en la legislación colombiana actualizada y jurisprudencia relevante.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-primary-500 mb-2">Comunicación Natural</h3>
                <p className="text-sm text-neutral-600">
                  Interacción mediante texto o voz, adaptándose a tus preferencias y necesidades.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="font-semibold text-primary-500 mb-2">Visualización Clara</h3>
                <p className="text-sm text-neutral-600">
                  Representación gráfica de procesos y conceptos legales complejos para mejor comprensión.
                </p>
              </div>
            </div>
          </section>
          
          {/* Integration Request */}
          <section className="bg-primary-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Tienes una integración que te gustaría ver?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Estamos constantemente expandiendo nuestras capacidades. Si tienes una sugerencia 
              para una nueva integración que podría mejorar la experiencia de AI Lawyer, 
              nos encantaría escucharla.
            </p>
            <Button variant="outline" className="bg-white text-primary-500 hover:bg-white/90">
              Sugerir Integración
            </Button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 