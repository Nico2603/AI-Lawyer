import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Phone, Mail, MapPin, MessageSquare, Clock, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactoPage() {
  // Información de contacto
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-primary-500" />,
      title: "Teléfono",
      details: "+57 300 123 4567",
      action: "Llamar ahora",
      link: "tel:+573001234567"
    },
    {
      icon: <Mail className="h-6 w-6 text-primary-500" />,
      title: "Correo Electrónico",
      details: "contacto@ailawyer.co",
      action: "Enviar correo",
      link: "mailto:contacto@ailawyer.co"
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary-500" />,
      title: "Ubicación",
      details: "Calle 93 #12-14, Bogotá, Colombia",
      action: "Ver en mapa",
      link: "https://maps.google.com"
    }
  ];

  // Oficinas
  const offices = [
    {
      city: "Bogotá",
      address: "Calle 93 #12-14, Oficina 701",
      phone: "+57 300 123 4567",
      email: "bogota@ailawyer.co",
      hours: "Lun - Vie: 8:00 AM - 6:00 PM"
    },
    {
      city: "Medellín",
      address: "Carrera 43A #1-50, Torre Protección, Oficina 1001",
      phone: "+57 301 123 4567",
      email: "medellin@ailawyer.co",
      hours: "Lun - Vie: 8:00 AM - 6:00 PM"
    },
    {
      city: "Cali",
      address: "Avenida 8 Norte #24N-90, Edificio Santa Mónica Central",
      phone: "+57 302 123 4567",
      email: "cali@ailawyer.co",
      hours: "Lun - Vie: 8:00 AM - 6:00 PM"
    }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo agendar una consulta?",
      answer: "Puedes agendar una consulta utilizando nuestro sistema en línea, enviando un correo electrónico a contacto@ailawyer.co o llamando a cualquiera de nuestras oficinas en horario de atención."
    },
    {
      question: "¿Qué información debo proporcionar para mi consulta?",
      answer: "Para una consulta efectiva, es útil proporcionar detalles sobre tu caso, incluyendo fechas importantes, documentos relevantes y una descripción clara de tu situación legal."
    },
    {
      question: "¿Qué métodos de pago aceptan?",
      answer: "Aceptamos pagos por transferencia bancaria, tarjetas de crédito/débito y sistemas de pago en línea como PayU y PSE."
    },
    {
      question: "¿Ofrecen consultas gratuitas?",
      answer: "Ofrecemos una evaluación inicial gratuita de 15 minutos para nuevos clientes, durante la cual podemos discutir brevemente tu caso y explicar cómo podemos ayudarte."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-primary-500 mb-4">Contacto</h1>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Estamos aquí para ayudarte con tus consultas legales. Ponte en contacto con nosotros 
              y te responderemos a la brevedad posible.
            </p>
          </div>
          
          {/* Formas de contacto */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="mx-auto bg-primary-50 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-neutral-800 mb-2">{item.title}</h3>
                <p className="text-neutral-600 mb-4">{item.details}</p>
                <a 
                  href={item.link}
                  className="text-primary-500 font-medium hover:underline inline-flex items-center"
                >
                  {item.action}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </a>
              </div>
            ))}
          </div>
          
          {/* Formulario de contacto y mapa */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Formulario */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-neutral-800 mb-6">Envíanos un mensaje</h2>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                      placeholder="Tu correo"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Asunto de tu mensaje"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="h-4 w-4 text-primary-500 border-gray-300 rounded focus:ring-primary-500"
                  />
                  <label htmlFor="privacy" className="ml-2 block text-sm text-gray-700">
                    Acepto la política de privacidad y tratamiento de datos personales
                  </label>
                </div>
                
                <Button className="w-full bg-primary-500 hover:bg-primary-600">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </div>
            
            {/* Mapa */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-[500px]">
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Mapa de ubicación aquí</p>
                {/* Aquí iría un iframe con el mapa de Google Maps o similar */}
              </div>
            </div>
          </div>
          
          {/* Oficinas */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-neutral-800 mb-6">Nuestras Oficinas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-xl text-primary-500 mb-3">{office.city}</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-neutral-500 mr-3 mt-0.5" />
                      <span className="text-neutral-600">{office.address}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-neutral-500 mr-3" />
                      <span className="text-neutral-600">{office.phone}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-neutral-500 mr-3" />
                      <span className="text-neutral-600">{office.email}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-neutral-500 mr-3" />
                      <span className="text-neutral-600">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          {/* FAQs */}
          <section className="bg-primary-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-primary-500 mb-6 text-center">Preguntas Frecuentes</h2>
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <h3 className="text-lg font-medium text-neutral-800 mb-2 flex items-start">
                    <MessageSquare className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-neutral-600 pl-7">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Call to Action */}
          <section className="bg-primary-500 text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">¿Prefieres agendar una cita?</h2>
            <p className="mb-6 max-w-2xl mx-auto">
              Si prefieres hablar directamente con uno de nuestros abogados, puedes agendar una cita 
              presencial o virtual según tu disponibilidad.
            </p>
            <Button variant="outline" className="bg-white text-primary-500 hover:bg-white/90">
              <Calendar className="w-4 h-4 mr-2" />
              Agendar Cita
            </Button>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
} 