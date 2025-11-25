// components/HeroSection.jsx


const HeroSection = ({ title, image }) =>{
  return (
    <section className="relative w-full">
      <div className="relative w-full h-80 md:h-96 lg:h-[420px] overflow-hidden rounded-xl shadow-lg border">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" aria-hidden />
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-xl z-10">
          {title}
        </h1>
      </div>
    </section>
  );
}
export default HeroSection;