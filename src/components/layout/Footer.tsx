import React from 'react';
import Link from 'next/link';
import { FiGithub, FiLinkedin, FiTwitter, FiBookOpen } from 'react-icons/fi';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-neutral-200 py-6">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AL</span>
              </div>
              <span className="font-bold text-lg text-neutral-800">AI Lawyer</span>
            </div>
            <p className="text-neutral-600 text-sm mb-4">
              Asistente legal impulsado por inteligencia artificial, especializado en leyes colombianas,
              proporcionando asesoramiento legal preciso y accesible.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-500 hover:text-primary-500">
                <FiGithub size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-primary-500">
                <FiLinkedin size={20} />
              </a>
              <a href="#" className="text-neutral-500 hover:text-primary-500">
                <FiTwitter size={20} />
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="font-medium text-neutral-800 mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-neutral-600 hover:text-primary-500 text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/recursos" className="text-neutral-600 hover:text-primary-500 text-sm">
                  Recursos Legales
                </Link>
              </li>
              <li>
                <Link href="/integraciones" className="text-neutral-600 hover:text-primary-500 text-sm">
                  Integraciones
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-neutral-600 hover:text-primary-500 text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Recursos legales */}
          <div>
            <h3 className="font-medium text-neutral-800 mb-4">Recursos legales</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 text-sm flex items-center gap-1">
                  <FiBookOpen size={14} />
                  <span>Código Civil Colombiano</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 text-sm flex items-center gap-1">
                  <FiBookOpen size={14} />
                  <span>Código Penal</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 text-sm flex items-center gap-1">
                  <FiBookOpen size={14} />
                  <span>Constitución Política</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-600 hover:text-primary-500 text-sm flex items-center gap-1">
                  <FiBookOpen size={14} />
                  <span>Jurisprudencia</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-neutral-200 my-6"></div>

        {/* Copyright y nota legal */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} AI Lawyer. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="text-neutral-500 hover:text-primary-500 text-sm">
              Política de privacidad
            </Link>
            <Link href="/terminos" className="text-neutral-500 hover:text-primary-500 text-sm">
              Términos de uso
            </Link>
            <div className="text-neutral-500 text-sm">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              Servicios activos
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 