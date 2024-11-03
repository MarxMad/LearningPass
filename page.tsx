"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { BugAntIcon, MagnifyingGlassIcon, AcademicCapIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { Address } from "~~/components/scaffold-eth";
import Image from "next/image";

const Home: NextPage = () => {
  const { address: connectedAddress } = useAccount();

  return (
    <>
    {/* Hot Sale Banner */}
      <div className="w-full bg-red-600 text-white py-2 text-center font-semibold">
        ¡Hot Sale! Cursos para nuevos miembros y bono de 100 puntos al inscribirse.
      </div>

      <div className="flex items-center flex-col flex-grow pt-10 bg-gray-100">

        {/* Hero Section */}
        <section className="w-full bg-cover bg-center h-[40rem] relative" style={{ backgroundImage: "url('/images/LearningPass2.png')" }}>
        
          
        </section>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
            
          </div>

        <hr className="w-4/5 border-t-2 border-gray-300 my-10" />
        
        {/* Beneficios */}
        <section className="flex-grow bg-white w-full px-8 py-12 text-center">
          <h2 className="text-2xl font-bold mb-6 text-accent">Beneficios de LearningPass</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col bg-gray-50 p-6 text-center items-center rounded-lg shadow-md border border-accent text-gray-700 relative">
              <AcademicCapIcon className="h-8 w-8 text-primary absolute top-4 left-4" />
              <h3 className="font-bold text-lg mt-8">Motivación Constante</h3>
              <p>La inscripción reembolsable y las recompensas por hitos fomentan el aprendizaje continuo.</p>
            </div>
            <div className="flex flex-col bg-gray-50 p-6 text-center items-center rounded-lg shadow-md border border-accent text-gray-700 relative">
              <GlobeAltIcon className="h-8 w-8 text-primary absolute top-4 left-4" />
              <h3 className="font-bold text-lg mt-8">Validación de Competencias</h3>
              <p>Los NFTs on-chain validan tus habilidades, facilitando la inserción laboral.</p>
            </div>
            <div className="flex flex-col bg-gray-50 p-6 text-center items-center rounded-lg shadow-md border border-accent text-gray-700 relative">
              <BugAntIcon className="h-8 w-8 text-primary absolute top-4 left-4" />
              <h3 className="font-bold text-lg mt-8">Transparencia On-chain</h3>
              <p>Logros registrados en blockchain para una trazabilidad educativa confiable.</p>
            </div>
            <div className="flex flex-col bg-gray-50 p-6 text-center items-center rounded-lg shadow-md border border-accent text-gray-700 relative">
              <MagnifyingGlassIcon className="h-8 w-8 text-primary absolute top-4 left-4" />
              <h3 className="font-bold text-lg mt-8">Oportunidades Laborales</h3>
              <p>Un historial verificable que mejora tu perfil profesional en el ecosistema Web3.</p>
            </div>
          </div>
          <Link href="http://localhost:3000/dashboard">
              <button className="bg-primary hover:bg-secondary text-white font-bold py-12 px-24 rounded-lg mt-10">
                Empieza Ahora
              </button>
            </Link>
        </section>
        {/* Conéctate con tu Billetera */}
        <section className="px-5 py-10 bg-white text-center">
          <h2 className="text-2xl font-bold text-accent mb-4">Conéctate con tu Billetera</h2>
          <div className="flex justify-center items-center space-x-2 flex-col sm:flex-row">
            <p className="my-2 font-medium">Connected Address:</p>
            <Address address={connectedAddress} />
          </div>
        </section>

        <hr className="w-4/5 border-t-2 border-gray-300 my-10" />

        {/* Collaborators Section */}
        <section className="w-full px-5 py-10 bg-gray-200">
          <h2 className="text-2xl font-bold mb-6 text-center text-accent">Colaboradores</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 justify-center items-center">
            <img src="/images/Learning Pass Fondo blanco.png" alt="Colaborador 1" className="h-24 w-24 object-cover rounded-md"/>
            <img src="/images/utonoma-full-logo2x.png" alt="Colaborador 2" className="h-24 w-24 object-cover rounded-md"/>
            <img src="/favicon.png" alt="Colaborador 3" className="h-24 w-24 object-cover rounded-md"/>
            <img src="/images/vottun.jpg" alt="Colaborador 4" className="h-24 w-24 object-cover rounded-md"/>
            <img src="/images/5.png" alt="Colaborador 5" className="h-24 w-24 object-cover rounded-md"/>
            <img src="/images/unamblanco.png" alt="Colaborador 6" className="h-24 w-24 object-cover rounded-md"/>
          </div>
        </section>

        <hr className="w-4/5 border-t-2 border-gray-300 my-10" />

        {/* Getting Started */}
        <section className="w-full bg-white px-8 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-accent">¿Cómo Funciona LearningPass?</h2>
          <div className="flex justify-center items-center gap-8 flex-col sm:flex-row">
            <div className="bg-background p-6 rounded-lg shadow-md max-w-xs text-center text-gray-800">
              <h3 className="font-bold text-xl text-secondary mb-2">Modelo de Inscripción Reembolsable</h3>
              <p>Los estudiantes pueden recuperar su inscripción y obtener recompensas al finalizar el curso.</p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow-md max-w-xs text-center text-gray-800">
              <h3 className="font-bold text-xl text-secondary mb-2">Pasaporte On-chain</h3>
              <p>Obtén NFTs que validan tus habilidades y competencias en blockchain y Web3.</p>
            </div>
          </div>
        </section>

        <hr className="w-4/5 border-t-2 border-gray-300 my-10" />

        {/* Newsletter Section */}
        <section className="w-full px-8 py-12 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold mb-4 text-accent">Suscríbete a Nuestro Newsletter</h2>
          <p className="text-gray-700 mb-6">Recibe actualizaciones y las últimas novedades de LearningPass.</p>
          <input type="email" placeholder="Tu correo electrónico" className="p-3 border border-gray-300 rounded-l-md focus:outline-none"/>
          <button className="bg-primary text-white p-3 rounded-r-md hover:bg-secondary">Suscribirse</button>
        </section>

        <hr className="w-4/5 border-t-2 border-gray-300 my-10" />

        {/* Courses Section */}
        <section className="w-full px-5 py-10 bg-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-center text-accent">Cursos</h2>
          <div className="space-y-10 w-full">
            {[
              { title: "Introducción a Blockchain", description: "Conceptos básicos de blockchain y su funcionamiento.", img: "/images/blockchain.png" },
              { title: "Programación en Solidity", description: "Aprende a programar contratos inteligentes en Solidity.", img: "/images/introduccionP.png" },
              { title: "Desarrollo de DApps", description: "Construye aplicaciones descentralizadas con Ethereum.", img: "/images/solidity.png" },
              { title: "Fundamentos de Criptografía", description: "Conoce los conceptos clave de la criptografía en blockchain.", img: "/images/Nodos.png" },
              { title: "Tokenización y NFTs", description: "Explora cómo crear y gestionar NFTs en la blockchain.", img: "/images/Learning Pass Fondo blanco.png" }
            ].map((course, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-8 w-full">
                {i % 2 === 0 ? (
                  <>
                    <div className="bg-white p-5 flex-1 max-w-full text-left shadow-lg border border-secondary text-gray-800 relative rounded-lg">
                      <AcademicCapIcon className="h-6 w-6 text-secondary absolute top-4 right-4" />
                      <h3 className="font-bold text-xl mb-2 text-accent">{course.title}</h3>
                      <p className="mb-4">{course.description}</p>
                      <div className="flex space-x-4">
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary">Más Info</button>
                        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary">Comenzar Lección</button>
                      </div>
                    </div>
                    <Image src={course.img} alt={`Imagen del curso ${course.title}`} width={300} height={200} className="rounded-lg shadow-md flex-1" />
                  </>
                ) : (
                  <>
                    <Image src={course.img} alt={`Imagen del curso ${course.title}`} width={300} height={200} className="rounded-lg shadow-md flex-1" />
                    <div className="bg-white p-5 flex-1 max-w-full text-left shadow-lg border border-secondary text-gray-800 relative rounded-lg">
                      <AcademicCapIcon className="h-6 w-6 text-secondary absolute top-4 right-4" />
                      <h3 className="font-bold text-xl mb-2 text-accent">{course.title}</h3>
                      <p className="mb-4">{course.description}</p>
                      <div className="flex space-x-4">
                        <button className="bg-secondary text-white py-2 px-4 rounded-lg hover:bg-primary">Más Info</button>
                        <button className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary">Comenzar Lección</button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <hr className="w-4/5 border-t-2 border-gray-300 my-10" />

        
        {/* Certificaciones On-Chain */}
        <section className="w-full px-8 py-12 bg-gray-50 text-center">
          <h2 className="text-2xl font-bold text-accent mb-6">Certificaciones On-Chain</h2>
          <p className="text-gray-700 mb-4">Valida tus habilidades con NFTs únicos que reflejan cada curso completado.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/CertificadoBTC.png" alt="NFT Certificación 1" className="h-24 w-24 mx-auto mb-4"/>
              <h3 className="font-bold text-lg text-accent">Certificado de Blockchain Básico</h3>
              <p className="text-gray-700">Obtén un NFT único al completar el curso de Introducción a Blockchain.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/CertificadoDapps.png" alt="NFT Certificación 2" className="h-24 w-24 mx-auto mb-4"/>
              <h3 className="font-bold text-lg text-accent">Certificado de Solidity</h3>
              <p className="text-gray-700">Demuestra tus habilidades en programación de contratos inteligentes con Solidity.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <img src="/images/certificadoSolidity.png" alt="NFT Certificación 3" className="h-24 w-24 mx-auto mb-4"/>
              <h3 className="font-bold text-lg text-accent">Certificado de Desarrollo de DApps</h3>
              <p className="text-gray-700">Valida tu competencia en desarrollo de aplicaciones descentralizadas.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-accent py-6 text-center text-white">
          <p>&copy; 2024 LearningPass. Todos los derechos reservados.</p>
          <Link href="/about" className="text-primary hover:text-secondary">
            Acerca de Nosotros
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Home;
