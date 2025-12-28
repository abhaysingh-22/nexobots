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
      className="relative bg-white py-16 sm:py-20 lg:py-24 xl:py-[120px] overflow-hidden"
    >
      {/* Decorative Images - Desktop only, positioned relative to section */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative Image 1 - Top Left */}
        <div className="hidden xl:block absolute left-[40px] 2xl:left-[82px] top-[100px]">
          <Image
            src="/testimonials-decorative-1.svg"
            alt=""
            width={283}
            height={218}
            className="w-[200px] h-auto 2xl:w-[283px]"
          />
        </div>

        {/* Decorative Image 2 - Bottom Center-Right */}
        <div className="hidden xl:block absolute left-1/2 bottom-[40px] 2xl:bottom-[60px]">
          <Image
            src="/testimonials-decorative-2.svg"
            alt=""
            width={105}
            height={47}
            className="w-[80px] h-auto 2xl:w-[105px]"
          />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 lg:px-[72px]">
        {/* Heading Section */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="font-['Manrope'] text-black text-[14px] sm:text-[16px] lg:text-[18px] font-medium leading-[1.366] mb-3 sm:mb-4">
            Testimonials
          </p>
          <h2 className="font-['TASA_Orbiter'] text-black text-[24px] sm:text-[30px] lg:text-[36px] font-bold leading-[1.3] sm:leading-[1.222] max-w-[320px] sm:max-w-[450px] lg:max-w-[522px] mx-auto">
            Trusted by Enterprises. Proven Through Experience
          </h2>
        </div>

        {/* Testimonial Cards - Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 justify-items-center">
          {testimonials.map((testimonial, index) => {
            const authorName = testimonial.author || testimonial.name || "";
            const roleText = testimonial.role.startsWith("—")
              ? testimonial.role
              : `— ${testimonial.role}`;

            return (
              <div
                key={`testimonial-${index}`}
                className="bg-white rounded-[13px] border border-[#D9D9D9] shadow-sm w-full max-w-[411px] min-h-[240px] sm:min-h-[258px]"
              >
                <div className="flex flex-col p-5 sm:p-6 lg:p-[24px_34px] h-full">
                  {/* Name and Role */}
                  <div className="flex flex-col gap-2 mb-4">
                    <p className="font-['Manrope'] text-black text-[18px] sm:text-[20px] lg:text-[22px] font-normal leading-[1.366] tracking-[0.02em]">
                      {authorName}
                    </p>
                    <p className="font-['Manrope'] text-black text-[11px] sm:text-[12px] font-normal leading-[1.366] tracking-[0.02em]">
                      {roleText}
                    </p>
                  </div>
                  
                  {/* Quote */}
                  <p className="font-['Manrope'] text-black text-[14px] sm:text-[15px] lg:text-[16px] font-light leading-[1.6] sm:leading-[1.75] tracking-[0.02em] flex-grow">
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

