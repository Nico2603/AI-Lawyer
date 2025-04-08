import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, ExternalLink, Search, BookOpen, Scale, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ResourceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  url: string;
}

export default function RecursosPage() {
  const legalCodes: ResourceCard[] = [
    {
      title: "Constitución Política de Colombia",
      description: "Norma fundamental y suprema del ordenamiento jurídico colombiano.",
      icon: <Scale size={24} />,
      url: "https://www.corteconstitucional.gov.co/inicio/Constitucion%20politica%20de%20Colombia.pdf"
    },
    {
      title: "Código Civil Colombiano",
      description: "Regula las relaciones civiles de las personas naturales y jurídicas.",
      icon: <FileText size={24} />,
      url: "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Codigo/1827111"
    },
    {
      title: "Código Sustantivo del Trabajo",
      description: "Normativa que regula las relaciones laborales en Colombia.",
      icon: <User size={24} />,
      url: "https://www.mintrabajo.gov.co/normatividad/leyes-y-decretos-ley/codigo-sustantivo-del-trabajo"
    },
    {
      title: "Código Penal Colombiano",
      description: "Establece las conductas consideradas delitos y sus sanciones.",
      icon: <BookOpen size={24} />,
      url: "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Leyes/1687084"
    },
    {
      title: "Código de Procedimiento Civil",
      description: "Establece las reglas para los procedimientos civiles en Colombia.",
      icon: <FileText size={24} />,
      url: "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Codigo/1827111"
    },
    {
      title: "Código de Comercio",
      description: "Regula las actividades mercantiles y comerciales en Colombia.",
      icon: <FileText size={24} />,
      url: "https://www.suin-juriscol.gov.co/viewDocument.asp?ruta=Codigo/1833376"
    }
  ];

  const institutions: ResourceCard[] = [
    {
      title: "Corte Constitucional",
      description: "Vela por la integridad y la supremacía de la Constitución.",
      icon: <Scale size={24} />,
      url: "https://www.corteconstitucional.gov.co/"
    },
    {
      title: "Corte Suprema de Justicia",
      description: "Máximo tribunal de la jurisdicción ordinaria.",
      icon: <Scale size={24} />,
      url: "https://cortesuprema.gov.co/"
    },
    {
      title: "Consejo de Estado",
      description: "Máximo tribunal de la jurisdicción contencioso administrativa.",
      icon: <Scale size={24} />,
      url: "http://www.consejodeestado.gov.co/"
    },
    {
      title: "Fiscalía General de la Nación",
      description: "Investiga los delitos y acusa a los presuntos infractores.",
      icon: <Scale size={24} />,
      url: "https://www.fiscalia.gov.co/"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-primary-500 mb-6">Recursos Legales</h1>
          
          {/* Search Bar */}
          <div className="relative mb-8">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={20} className="text-neutral-500" />
            </div>
            <input
              type="text"
              placeholder="Buscar recursos legales..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
          
          {/* Códigos Legales */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Códigos y Normativas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {legalCodes.map((resource, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-50 rounded-lg mr-4">
                      <div className="text-primary-500">{resource.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 mb-2">{resource.title}</h3>
                      <p className="text-sm text-neutral-600 mb-4">{resource.description}</p>
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:underline inline-flex items-center text-sm"
                      >
                        <span>Ver recurso</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Instituciones Legales */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Instituciones Legales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {institutions.map((institution, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:border-l-4 hover:border-l-primary-500 transition-all">
                  <div className="flex items-start">
                    <div className="p-3 bg-primary-50 rounded-lg mr-4">
                      <div className="text-primary-500">{institution.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-800 mb-2">{institution.title}</h3>
                      <p className="text-sm text-neutral-600 mb-4">{institution.description}</p>
                      <a 
                        href={institution.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:underline inline-flex items-center text-sm"
                      >
                        <span>Visitar sitio oficial</span>
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* Solicitud de Recursos */}
          <section className="bg-primary-50 rounded-lg p-6 text-center">
            <h2 className="text-xl font-bold text-primary-500 mb-3">¿No encuentras lo que buscas?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Si necesitas acceso a un recurso legal específico que no está listado aquí, 
              podemos ayudarte a encontrarlo o añadirlo a nuestra base de datos.
            </p>
            <Button className="bg-primary-500 hover:bg-primary-600 text-white">
              Solicitar Recurso
            </Button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 