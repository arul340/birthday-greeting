const Heading = () => {
  return (
    <div className="relative flex items-center  h-48 overflow-hidden pt-16 mt-20">
      {/* Teks Background (COUPONS) */}
      <h1 className="absolute text-[10rem] lg:text-[9rem] font-[900] font-montserrat text-gray-500 opacity-10 z-10 -top-8 left-1 ">
        COUPONS
      </h1>

      {/* Teks Utama */}
      <h2 className="text-4xl lg:text-[4.3rem] font-bold font-georama text-black tracking-wide z-20">
        for your special day &lt;3
      </h2>
    </div>
  );
};

export default Heading;
