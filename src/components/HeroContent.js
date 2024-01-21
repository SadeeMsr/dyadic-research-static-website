export default function HeroContent() {
  return (
    <div className="relative text-white">
      <div className="w-[40%] absolute flex flex-col h-screen justify-center items-center">
        <div className="ms-20" style={{ zIndex: 5 }}>
          <p className="text-6xl font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <p className="text-2xl mt-10">Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
}
