"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-stone-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Organic background shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className={`absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-orange-300 rounded-full blur-3xl ${isClient ? 'animate-pulse' : ''}`}></div>
          <div className={`absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full blur-3xl ${isClient ? 'animate-pulse' : ''}`}></div>
          <div className={`absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-gray-200 to-stone-200 rounded-full blur-2xl ${isClient ? 'animate-pulse' : ''}`}></div>
        </div>

        <div className="relative container mx-auto px-6 py-20 z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Left side - Text content */}
              <div className="text-center lg:text-left space-y-10">
                {/* Restaurant name with elegant typography */}
                <div className={`space-y-6 ${isClient ? 'animate-fade-in-up' : ''}`}>
                  <h1 className="text-7xl md:text-9xl font-serif font-bold text-gray-800 leading-none">
                    Tu casa
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-light text-gray-600 italic -mt-4">
                    restaurantes
                  </h2>
                </div>

                {/* Elegant slogan */}
                <div className={`relative ${isClient ? 'animate-fade-in-up' : ''}`}>
                  <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
                    <span className="text-orange-500 font-serif italic text-4xl">&ldquo;</span>
                    El buen sabor, hecho con amor
                    <span className="text-orange-500 font-serif italic text-4xl">&rdquo;</span>
                  </p>
                  <div className="absolute -bottom-2 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0 w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
                </div>

                {/* Organic action buttons */}
                <div className={`flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center pt-8 ${isClient ? 'animate-fade-in-up' : ''}`}>
                  <a
                    href="https://menu.tucasarestaurantes.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-6 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 organic-shadow hover:organic-shadow-lg min-w-[280px]"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-.78-.78-2.05-.78-2.83 0-.78.78-.78 2.05 0 2.83l7.02 7.01zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.20-1.10-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41-6.51-6.75z" />
                      </svg>
                      Ver nuestro menú
                    </span>
                  </a>

                  <div className="flex gap-4">
                    <a
                      href="https://fromtherestaurant.com/tu-casa/menu/70-Washington-Ave/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 organic-shadow hover:organic-shadow-lg"
                    >
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 7c0-1.1-.9-2-2-2h-3V3c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7zM9 3h6v2H9V3zm10 16H5V7h3v1c0 .55.45 1 1 1s1-.45 1-1V7h4v1c0 .55.45 1 1 1s1-.45 1-1V7h3v12z" />
                          <path d="M12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        </svg>
                        Delivery
                      </span>
                    </a>

                    <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 organic-shadow hover:organic-shadow-lg">
                      <span className="flex items-center gap-2">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z" />
                          <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z" />
                        </svg>
                        Pickup
                      </span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - Food showcase */}
              <div className={`relative ${isClient ? 'animate-fade-in-up' : ''}`}>
                <div className="relative group">
                  {/* Soft shadow behind image */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-300/20 to-green-300/20 rounded-3xl blur-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>

                  {/* Main food image */}
                  <div className="relative bg-white rounded-3xl p-6 organic-shadow-lg transform -rotate-2 group-hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                      alt="Deliciosa comida de Tu Casa Restaurantes"
                      width={600}
                      height={500}
                      className="rounded-2xl object-cover w-full h-[400px] md:h-[500px] transition-all duration-500 group-hover:scale-105"
                      priority
                    />

                    {/* Organic floating elements */}
                    <div className={`absolute -top-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-sm organic-shadow transform rotate-12 flex items-center gap-2 ${isClient ? 'animate-bounce' : ''}`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      ¡Especialidad del chef!
                    </div>

                    <div className={`absolute -bottom-3 -left-3 bg-green-600 text-white px-4 py-2 rounded-full font-medium text-xs organic-shadow transform -rotate-12 flex items-center gap-2 ${isClient ? 'animate-pulse' : ''}`}>
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                      </svg>
                      Ingredientes frescos
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section with warm feeling */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-gray-50">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">

            {/* Warm invitation */}
            <div className={`mb-16 ${isClient ? 'animate-fade-in-up' : ''}`}>
              <h3 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 mb-6">
                ¿Listo para disfrutar?
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
                Nuestro equipo está esperando para prepararte una experiencia culinaria inolvidable.
                <span className="text-orange-500 font-semibold block mt-2">¡Contáctanos ahora!</span>
              </p>
            </div>

            {/* Contact options with restaurant feel */}
            <div className={`flex flex-col md:flex-row gap-8 justify-center items-center ${isClient ? 'animate-fade-in-up' : ''}`}>
              <a
                href="tel:+15514822835"
                className="group relative bg-white hover:bg-gray-50 text-gray-800 px-10 py-8 rounded-2xl transition-all duration-300 transform hover:scale-105 organic-shadow hover:organic-shadow-lg min-w-[320px]"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-orange-500 p-4 rounded-full organic-shadow">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-xl text-gray-800">Llamar ahora</div>
                    <div className="text-orange-500 font-bold text-lg">+1 551 482 2835</div>
                    <div className="text-gray-500 text-sm">Atención inmediata</div>
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/12076305414"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-green-600 hover:bg-green-700 text-white px-10 py-8 rounded-2xl transition-all duration-300 transform hover:scale-105 organic-shadow hover:organic-shadow-lg min-w-[320px]"
              >
                <div className="flex items-center gap-6">
                  <div className="bg-white/20 p-4 rounded-full organic-shadow">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-xl">WhatsApp</div>
                    <div className="text-green-100 font-bold text-lg">Mensaje directo</div>
                    <div className="text-green-200 text-sm">Respuesta rápida</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us - Restaurant style with improved cards */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-stone-100">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section header */}
            <div className={`text-center mb-20 ${isClient ? 'animate-fade-in-up' : ''}`}>
              <h3 className="text-5xl font-serif font-bold text-gray-800 mb-6">
                Nuestra promesa
              </h3>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Cada platillo cuenta una historia de tradición, calidad y pasión por la cocina
              </p>
            </div>

            {/* Improved Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">

              {/* Feature 1 - Enhanced Card */}
              <div className={`group ${isClient ? 'animate-fade-in-up' : ''}`}>
                <div className="relative bg-white rounded-3xl p-8 organic-shadow hover:organic-shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl mx-auto flex items-center justify-center organic-shadow group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.5 2C13.81 2 15.29 3.42 15.29 5.14C15.29 6.86 13.81 8.29 12.5 8.29C11.19 8.29 9.71 6.86 9.71 5.14C9.71 3.42 11.19 2 12.5 2ZM21 9V20C21 21.1 20.1 22 19 22H5C3.9 22 3 21.1 3 20V9C3 7.9 3.9 7 5 7H8L10 5H14L16 7H19C20.1 7 21 7.9 21 9ZM19 9H16.83L15.83 8H8.17L7.17 9H5V20H19V9ZM12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18ZM12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8Z" />
                        </svg>
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full mx-auto mt-6"></div>
                    </div>

                    {/* Text content */}
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">
                        Ingredientes frescos
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Seleccionamos cuidadosamente cada ingrediente para garantizar la máxima frescura y sabor en cada bocado
                      </p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-orange-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Feature 2 - Enhanced Card */}
              <div className={`group ${isClient ? 'animate-fade-in-up' : ''}`}>
                <div className="relative bg-white rounded-3xl p-8 organic-shadow hover:organic-shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-green-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl mx-auto flex items-center justify-center organic-shadow group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13,2.05V5.08C16.39,5.57 19,8.47 19,12C19,12.9 18.82,13.75 18.5,14.54L21.12,16.07C21.68,14.83 22,13.45 22,12C22,6.82 18.05,2.55 13,2.05M12,19A7,7 0 0,1 5,12C5,8.47 7.61,5.57 11,5.08V2.05C5.94,2.55 2,6.81 2,12A10,10 0 0,0 12,22C15.3,22 18.23,20.39 20.05,17.91L17.45,16.38C16.17,18.37 14.21,19 12,19Z" />
                        </svg>
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mt-6"></div>
                    </div>

                    {/* Text content */}
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors duration-300">
                        Servicio rápido
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Nuestro equipo trabaja con eficiencia para que disfrutes tu comida caliente y en el tiempo perfecto
                      </p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-green-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Feature 3 - Enhanced Card */}
              <div className={`group ${isClient ? 'animate-fade-in-up' : ''}`}>
                <div className="relative bg-white rounded-3xl p-8 organic-shadow hover:organic-shadow-lg transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon container */}
                    <div className="mb-8">
                      <div className="w-20 h-20 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl mx-auto flex items-center justify-center organic-shadow group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                        </svg>
                      </div>
                      <div className="w-12 h-1 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full mx-auto mt-6"></div>
                    </div>

                    {/* Text content */}
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-600 transition-colors duration-300">
                        Preparado con amor
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-lg">
                        Cada platillo es preparado con dedicación y cariño, como si fuera para nuestra propia familia
                      </p>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-6 right-6 w-3 h-3 bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons - Subtle and elegant */}
      <a
        href="tel:+15514822835"
        className="fixed bottom-28 right-6 w-16 h-16 bg-orange-500 hover:bg-orange-600 text-white rounded-full organic-shadow hover:organic-shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Llamar al restaurante"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      </a>

      <a
        href="https://wa.me/12076305414"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 hover:bg-green-600 text-white rounded-full organic-shadow hover:organic-shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
        aria-label="Escribir por WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </a>
    </main>
  );
}
