"use client";

import React from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiWifi, FiWifiOff } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isConnected, setIsConnected] = React.useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-soft">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AL</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-neutral-800">AI Lawyer</span>
              <span className="text-xs text-neutral-500">Asesoría Legal</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-neutral-800 hover:text-primary-500 font-medium transition-colors">
              Inicio
            </Link>
            <Link href="/recursos" className="text-neutral-600 hover:text-primary-500 transition-colors">
              Recursos Legales
            </Link>
            <Link href="/integraciones" className="text-neutral-600 hover:text-primary-500 transition-colors">
              Integraciones
            </Link>
            <Link href="/contacto" className="text-neutral-600 hover:text-primary-500 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Connection Status */}
          <div className="hidden md:flex items-center gap-2">
            {isConnected ? (
              <>
                <FiWifi className="text-green-500" />
                <span className="text-sm text-green-600">Conectado</span>
              </>
            ) : (
              <>
                <FiWifiOff className="text-red-500" />
                <span className="text-sm text-red-600">Desconectado</span>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-800 hover:bg-neutral-100 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-neutral-200">
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-800 bg-neutral-50">
              Inicio
            </Link>
            <Link href="/recursos" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800">
              Recursos Legales
            </Link>
            <Link href="/integraciones" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800">
              Integraciones
            </Link>
            <Link href="/contacto" className="block px-3 py-2 rounded-md text-base font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-800">
              Contacto
            </Link>
            <div className="flex items-center gap-2 px-3 py-2">
              {isConnected ? (
                <>
                  <FiWifi className="text-green-500" />
                  <span className="text-sm text-green-600">Conectado</span>
                </>
              ) : (
                <>
                  <FiWifiOff className="text-red-500" />
                  <span className="text-sm text-red-600">Desconectado</span>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 