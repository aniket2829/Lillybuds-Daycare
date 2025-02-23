export default function HeroSection() {
  return (
    <div className="bg-[url('/images/hero_section.png')] h-screen bg-cover bg-center bg-no-repeat text-white flex items-center p-4">
      <div className="bg-blue-900 p-8 text-yellow-300 space-y-4 ml-0 md:ml-16 lg:ml-24">
        <h1 className="font-extrabold text-4xl">Lily Buds Daycare</h1>
        <p>
          A Safe and Nurturing Environment
          <br />
          for Your Little Ones
        </p>
        <a
          className="bg-yellow-300 text-blue-900 p-2 inline-block rounded-sm"
          href="#contact-us"
        >
          Enroll now
        </a>
      </div>
    </div>
  );
}
