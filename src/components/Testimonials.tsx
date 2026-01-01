import Image from "next/image";

type Testimonial = {
  quote: string;
  author?: string;
  name?: string;
  role: string;
};

type TestimonialsProps = {
  testimonials: readonly Testimonial[];
};

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section
      id="testimonials"
      className="relative bg-[#F8F8F8] py-16 sm:py-20 lg:py-24 xl:py-[100px] overflow-hidden"
    >
      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[72px]">
        {/* Header Section - Quote marks positioned absolutely, heading centered */}
        <div className="relative mb-12 sm:mb-14 lg:mb-16 xl:mb-[70px]">
          {/* Large Decorative Quote Marks - Positioned absolutely on left */}
          <div className="absolute left-0 top-0">
            <Image
              src="/testimonials-grid.svg"
              alt=""
              width={281}
              height={217}
              className="w-[100px] h-[65px] sm:w-[140px] sm:h-[108px] md:w-[180px] md:h-[139px] lg:w-[220px] lg:h-[170px] xl:w-[281px] xl:h-[217px]"
            />
          </div>

          {/* Heading Section - Centered on the page */}
          <div className="text-center pt-8 sm:pt-10 lg:pt-12 xl:pt-[60px]">
            <p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] lg:text-[16px] font-medium leading-[1.366] mb-3 sm:mb-4 lg:mb-5">
              Testimonials
            </p>
            <h2 className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[30px] md:text-[36px] lg:text-[40px] xl:text-[44px] font-bold leading-[1.22] max-w-[400px] sm:max-w-[450px] lg:max-w-[522px] mx-auto">
              Trusted by Enterprises. Proven Through Experience
            </h2>
          </div>
        </div>

        {/* Testimonial Cards - 3 column grid with proper spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 xl:gap-[28px]">
          {testimonials.map((testimonial, index) => {
            const authorName = testimonial.author || testimonial.name || "";
            const roleText = testimonial.role.startsWith("—")
              ? testimonial.role
              : `— ${testimonial.role}`;

            return (
              <div
                key={`testimonial-${index}`}
                className="bg-white rounded-[13px] border border-[#E5E5E5] w-full"
              >
                <div className="flex flex-col p-5 sm:p-6 lg:p-[28px_32px] h-full min-h-[220px] sm:min-h-[240px] lg:min-h-[260px]">
                  {/* Name and Role */}
                  <div className="flex flex-col gap-1 sm:gap-2 mb-4 sm:mb-5">
                    <p className="font-['Manrope'] text-black text-[18px] sm:text-[20px] lg:text-[22px] font-medium leading-[1.366] tracking-[0.02em]">
                      {authorName}
                    </p>
                    <p className="font-['Manrope'] text-black/60 text-[11px] sm:text-[12px] font-normal leading-[1.366] tracking-[0.02em]">
                      {roleText}
                    </p>
                  </div>

                  {/* Quote */}
                  <p className="font-['Manrope'] text-black/80 text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.7] tracking-[0.02em] grow">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

