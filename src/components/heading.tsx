interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading = ({ title, subtitle }: HeadingProps) => {
  return (
    <div className="relative flex items-center h-48 overflow-hidden pt-16">
      <h1 className="absolute text-[4.5rem] lg:text-[9rem] font-[900] font-montserrat text-gray-500 opacity-10 z-10 lg:-top-8 top-5 left-1 ">
        {title}
      </h1>

      {/* Teks Utama */}
      <h2 className="text-4xl lg:text-[4.3rem] font-bold font-georama text-black tracking-wide z-20">
        {subtitle}
      </h2>
    </div>
  );
};

export default Heading;
