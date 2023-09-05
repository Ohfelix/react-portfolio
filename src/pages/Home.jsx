import React, { useEffect, useRef } from 'react';
import heroImg from '../assets/images/flyer.png';
import taskImg from '../assets/images/task.png'
import faqImg from '../assets/images/faqs.jpg'
import About from '../components/About/About';
import ServicesList from '../components/Services/ServicesList';
import FaqList from '../components/Faq/FaqList';
import Contact from './Contact';



const Home = () => {

  return (
    <section  className='hero__section pt-1 2xl:h-[600px]'>
      <div className='container'>
        <div className='flex flex-col lg:flex-row gap-10 items-center justify-between'>
          <div className='lg:w-[570px]'>
            <h1 className='text-4xl leading-10 text-headingColor font-semibold md:text-5xl md:leading-12 text-center mb-3'>
              Comodidade e Variedade
              <br />
              <span className='text-green-500'>no seu Condomínio!</span>
            </h1>
            <h3 className='text-center text-lg pt-4 font-bold mb-5'>
              "Descubra o Minimercado que Chegou para Facilitar suas Compras!"
            </h3>
            <span className='w-100 h-2 bg-purple-500 rounded-full block mt-5'></span>
            <p className='text-lg mt-3'>
              A rede de minimercados pensado
              para trazer conforto e comodidade
              para ganho de tempo de quem vive
              em condomínios, seja residencial ou
              comercial, trazendo o essencial dos
              itens de mercado com toda
              personalidade e praticidade de uma
              conveniência a um elevador de
              distância.
            </p>

          </div>
          <div className='flex justify-end lg:w-[570px]'>
            <img className='w-full' src={heroImg} alt="" />
          </div>
        </div>
      </div>
      <About />
      <section>
        <div className='container'>
          <h1 className='text-4xl leading-10 p-3 text-headingColor font-semibold md:text-5xl md:leading-12 text-center mb-3'>Quais as
            vantagens em levar um
            minimercado ao seu condomínio ?
          </h1>
          <div className='xl:w-[800px] mx-auto'>
            <p className='text__para text-center  pt-3'>
              Nos disponibilizamos a proporcionar a melhor experiência em
              comodidade e valorização do tempo dos nossos clientes oferecendo o
              melhor e mais completo mercado autônomo.
            </p>
          </div>
          <ServicesList />
          <div className='xl:w-[800px] mx-auto'>
            <p className='text__para text-center pt-3'>
              Trabalhamos com infraestruturas prontas oferecida pelo condomínio ou podemos disponibiliza-las, criando
              nosso próprio modulo no espaço mais adequado Lista de itens são feitos de modo
              personalizado para cada condomínio Além de contar com a segurança de monitoramento 24h e
              câmeras com detecção de movimento e comunicação ativa.
            </p>
          </div>

        </div>

      </section>
      <section className=''>
        <div className='container'>
          <div className='flex items-center justify-between flex-col lg:flex-row'>
            <div className='xl:w-[670px]'>
              <h2 className='heading text-center'>
                Como o minimercado funciona?
              </h2>
              <ul className='pl-4 text-center'>
                <li className='text__para'>
                  1. Trabalhamos com as melhores marcas de produtos disponíveis no mercado, nosso portfólio de produtos incluem: congelados, bebidas em geral, destilados e vinhos, marmitas fit, hortifruti, temperos naturais, itens pet e acessórios para churrasco além do produtos sazonais.
                </li>
                <li className='text__para'>
                  2. Para proporcionar ao seu condomínio a melhor experiência possível fazemos uma pesquisa de produtos, conseguimos assim entender com mais clareza as necessidades dos moradores.
                </li>
                <li className='text__para'>
                  3. Nosso sistema monitora a saída de cada item, controla quantidades mínimas e validade dos produtos. Então, programamos a reposição.
                </li>
                <li className='text__para'>
                  4. Inventariamos nossas lojas mensalmente, assim conseguimos identificar nossas perdas, seja por validade ou furtos/roubos.
                </li>
              </ul>
            </div>
            <div className='relative z-10 xl:w-[770px] flex justify-center mt-10 lg:mt-0'>
              <img src={taskImg} alt="" className='w-3/4' />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container'>
          <div className='flex justify-between gap-[50px] lg:gap-0'>
            <div className='w-full pt-[150px] pr-10 hidden md:block p-3'>
              <img src={faqImg} className='rounded-lg w-full' alt="" />
            </div>
            <div className='w-full md:-1/2 text-center p-2'>
              <h2 className='text-4xl leading-10 p-3 text-headingColor font-semibold md:text-5xl md:leading-12 text-center mb-3'> As perguntas mais frequentes sobre nosso negocio !</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      <section className='bg-gray-900'>
        <Contact />
      </section>

    </section>
  );
};

export default Home;
