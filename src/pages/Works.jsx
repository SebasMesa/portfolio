import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { PiArrowBendUpRight } from "react-icons/pi";
import Tablet from "../assets/mockuper.png";
import ReTodo from "../assets/retodo.png"
import ReTodo2 from "../assets/retodo2.png"
import Bonco from "../assets/bonco.png"
import Mansory from "../assets/mansory.png"
import MansoryPhone from "../assets/mansoryphone.png"
import TakeATrip from "../assets/takeatrip.png"
import { Languages } from "lucide-react";
import { div } from "three/tsl";

const allWorks = [
  {
    nombre: "Mansory",
    descripcion: "Tienda de ropas ubicada en medellin colombia con gran variedad de productos",
    descripcionBreve: "Breve descripción del proyecto 3",
    image: Mansory,
    imageMobile: MansoryPhone,
    link: "https://mansoryportfolio.page.gd/",
    category: "Website",
    languages: ["PHP", "TailwindCSS", "MySQL"]
  },
  {
    nombre: "Bonco S.A.S",
    descripcion: "La marca necesitaba digitalizar su catálogo de productos y establecer una presencia online profesional que permitiera a los clientes visualizar colecciones de moda de manera fluida y elegante.",
    descripcionBreve: "Breve descripción del proyecto 2",
    image: Bonco,
    imageMobile: Bonco,
    link: "https://bonco.com.co",
    category: "Website",
    languages: ["PHP", "TailwindCSS", "MySQL"]
  },
  {
    nombre: "ReTodo Repuestos",
    descripcion: "Tienda de repuestos ubicada en medellin colombia con gran variedad de productos",
    descripcionBreve: "Pagina sencilla, minimalista de repuestos",
    image: ReTodo,
    link: "https://retodomarcas.ct.ws",
    category: "Website",
    languages: ["PHP", "TailwindCSS", "MySQL"]
  },
  {
    nombre: "Take a Trip",
    descripcion: "Tienda de repuestos ubicada en medellin colombia con gran variedad de productos",
    descripcionBreve: "Pagina sencilla, minimalista de repuestos",
    image: TakeATrip,
    link: "https://takeatripportfolio.page.gd/",
    category: "Website",
    languages: ["PHP", "TailwindCSS", "MySQL"]
  },
];

const Works = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'start' // Importante para alineación correcta
    },
    [Autoplay({ delay: 7000, stopOnInteraction: true })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const isMobile = window.innerWidth < 768;

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const isMobileView = window.innerWidth < 768;

  return (
    <section className="relative md:px-8">
      <h2 className="text-glass-macos text-3xl md:text-[3.5rem] font-bold text-center">
        Mis proyectos y trabajos
      </h2>
      <p className="text-base md:text-[1.3rem] text-center text-[#a1a1a1] font-light mt-4 md:mt-[1rem] mb-8 md:mb-[4rem]">
        Cada línea de código cuenta una historia 📖
      </p>

      <div className="relative max-w-7xl mx-auto">
        <div className="embla w-full overflow-hidden" ref={emblaRef}>
          <div className="embla__container flex">
            {allWorks.map((work, i) => (
              <div className="embla__slide flex-[0_0_100%]" key={i}>
                <div className="border border-purple-500/20 px-4 md:px-[3rem] pt-[3rem] rounded-[1rem] hover:scale-[1.01] transition-all duration-300 cursor-pointer overflow-hidden min-h-[60vh] md:h-[70vh] group bg-gradient-to-br from-[#2D0066]/10 to-transparent mx-[5px] md:my-[20px] md:mx-[20px] flex flex-col">
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="flex flex-col h-full">

                    <section className="flex items-center justify-between mb-2 md:mb-4">
                      <div className="flex items-center gap-2 md:gap-4">
                        <div className="bg-black w-[50px] h-[50px] md:w-[65px] md:h-[65px] flex justify-center items-center rounded-[12px] border border-[#333] shadow-xl flex-shrink-0">
                          {/* Aquí puedes poner un logo pequeño del proyecto o iniciales */}
                          <span className="text-purple-500 font-bold text-xl">{work.nombre.charAt(0)}</span>
                        </div>
                        <h3 className="text-xl md:text-[2.2rem] font-bold tracking-tight">
                          {work.nombre}
                        </h3>
                      </div>

                      <div className="flex items-center gap-[1.5rem]">
                        <span className="hidden md:block text-[14px] text-[#888] font-mono hover:text-white transition-colors">{work.link.replace('https://', '')}</span>
                        <PiArrowBendUpRight className="text-[2rem] text-purple-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0" />
                      </div>
                    </section>

                    {/* URL para Móvil */}
                    <span className="md:hidden text-xs text-[#888] mb-4 underline">{work.link}</span>

                    {/* CUERPO: Descripción con enfoque en Resultados */}
                    <div className="flex flex-col md:flex-row gap-6 mt-2">
                      <div className="w-full md:w-[55%]">
                        <p className="text-sm md:text-[1.1rem] leading-relaxed text-[#bbb] mb-4">
                          {work.descripcion}
                        </p>

                        {/* NUEVO: Badge de Logro Principal (Muy profesional) */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs md:text-sm font-medium mb-4">
                          <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
                          {work.logroPrincipal || "Optimización de carga y gestión dinámica"}
                        </div>
                      </div>

                      {/* STACK TECNOLÓGICO: Más limpio */}
                      <div className="flex flex-wrap gap-2 h-fit md:justify-end w-full md:w-[45%]">
                        {work.languages?.map((lang, langIndex) => (
                          <span key={langIndex} className="bg-[#111] border border-[#333] text-[#eee] text-[10px] md:text-xs uppercase tracking-widest rounded-md px-3 py-1.5 font-semibold group-hover:border-purple-500/50 transition-colors">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* IMAGEN: Con efecto de elevación profesional */}
                    <section className="relative mt-auto pt-8">
                      <div
                        className="relative w-full h-[300px] md:h-[350px] rounded-t-[12px] shadow-2xl group-hover:translate-y-[-10px] transition-all duration-500 flex-shrink-0 bg-cover bg-top border-t border-l border-r border-[#333]"
                        style={{ backgroundImage: `url(${isMobileView ? work.imageMobile : work.image})` }}
                      >
                        {/* Overlay sutil para profundidad */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-[12px]" />
                      </div>
                    </section>

                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {!isMobile && (
          <>
            <button
              onClick={scrollPrev}
              className="absolute top-1/2 -left-12 md:-left-16 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full text-[#00F5FF] hover:scale-110 transition text-3xl"
              aria-label="Proyecto anterior"
            >
              ❮
            </button>

            <button
              onClick={scrollNext}
              className="absolute top-1/2 -right-12 md:-right-16 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-full text-[#00F5FF] hover:scale-110 transition text-3xl"
              aria-label="Siguiente proyecto"
            >
              ❯
            </button>
          </>
        )}

        <div className="flex justify-center mt-8 md:mt-[4rem] gap-2 md:gap-3">
          {allWorks.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${i === selectedIndex
                ? "bg-[#00f5ff] scale-125"
                : "border border-[#00f5ff] hover:bg-[#00f5ff]/50"
                }`}
              aria-label={`Ir al proyecto ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;