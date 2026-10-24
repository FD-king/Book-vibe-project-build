import Image from "next/image";

const HeroSectionPage = () => {
  return (
    <section className="w-full px-4 py-2 sm:px-6 lg:px-4">
      <div className="mx-auto flex min-h-[300px] w-full max-w-[1400px] flex-col items-center justify-between gap-8 rounded-[20px] bg-[#f2f2f2] px-6 py-10 sm:px-10 md:min-h-[400px] md:flex-row md:px-12 lg:px-24">
        {/* Left Content */}
        <div className="flex w-full flex-col items-start md:w-3/5">
          <h2 className="max-w-[550px] font-serif text-4xl font-bold leading-tight tracking-tight text-[#171717] sm:text-5xl lg:text-[48px] lg:leading-[1.4]">
            Books to freshen up
            <br className="hidden sm:block" /> your bookshelf
          </h2>

          <button className="mt-8 rounded-md bg-[#18c20b] px-6 py-4 text-base font-bold text-white transition-colors duration-200 hover:bg-[#14a309] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700">
            View The List
          </button>
        </div>

        {/* Right Book Image */}
        <div className="relative flex items-center justify-center md:w-2/5 md:justify-end">
          <Image
            src="/assets/hero_img.jpg"
            alt="Featured book"
            width={999}
            height={999}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSectionPage;
