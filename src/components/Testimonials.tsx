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
  // Card positions from Figma
  const cardPositions = [
    { x: 82, y: 384 },   // Card 1
    { x: 515, y: 384 },  // Card 2
    { x: 941, y: 384 },  // Card 3
  ];

  return (
    <section
      id="testimonials"
      className="relative bg-white"
      style={{
        width: "100%",
        height: "800px",
        minHeight: "800px",
      }}
    >
      <div
        className="relative mx-auto"
        style={{
          width: "1440px",
          maxWidth: "100%",
          height: "800px",
          position: "relative",
        }}
      >
        {/* Decorative Image 1 - Group 22 */}
        <div
          className="absolute hidden lg:block"
          style={{
            left: "82px",
            top: "120px",
            width: "283px",
            height: "218.29px",
          }}
        >
          <Image
            src="/testimonials-decorative-1.svg"
            alt=""
            width={283}
            height={218}
            className="h-auto w-auto"
          />
        </div>

        {/* Decorative Image 2 - Group 24 */}
        <div
          className="absolute hidden lg:block"
          style={{
            left: "668px",
            top: "695px",
            width: "104.2px",
            height: "46.1px",
          }}
        >
          <Image
            src="/testimonials-decorative-2.svg"
            alt=""
            width={105}
            height={47}
            className="h-auto w-auto"
          />
        </div>

        {/* Heading Section - Frame 22 */}
        <div
          className="absolute flex flex-col items-center"
          style={{
            left: "330px",
            top: "120px",
            width: "766px",
            gap: "16px",
          }}
        >
          {/* Frame 24 - Testimonials label */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "100%",
            }}
          >
            <p
              className="font-['Manrope'] text-black text-center"
              style={{
                fontSize: "18px",
                fontWeight: 500,
                lineHeight: "1.366",
              }}
            >
              Testimonials
            </p>
          </div>

          {/* Frame 23 - Main heading */}
          <div
            className="flex justify-center items-center"
            style={{
              width: "792px",
            }}
          >
            <h2
              className="font-['TASA_Orbiter'] text-black text-center"
              style={{
                fontSize: "36px",
                fontWeight: 700,
                lineHeight: "1.222",
                width: "522px",
              }}
            >
              Trusted by Enterprises. Proven Through Experience
            </h2>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="relative z-10 hidden lg:block">
          {testimonials.map((testimonial, index) => {
            const authorName = testimonial.author || testimonial.name || "";
            const roleText = testimonial.role.startsWith("—")
              ? testimonial.role
              : `— ${testimonial.role}`;
            const position = cardPositions[index] || cardPositions[0];

            return (
              <div
                key={`testimonial-${index}`}
                className="absolute bg-white rounded-[13px] border border-[#D9D9D9]"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                  width: "411px",
                  height: "258px",
                }}
              >
              {/* Testimonial content - positioned at x: 24, y: 17 with padding 10px */}
              <div
                className="flex flex-col"
                style={{
                  position: "absolute",
                  left: "24px",
                  top: "17px",
                  padding: "10px",
                  width: "363px",
                  height: "223px",
                }}
              >
                {/* Frame 56 - Name and role section */}
                <div
                  className="flex flex-col"
                  style={{
                    width: "100%",
                    gap: "16px",
                  }}
                >
                  {/* Frame 55 - Name and role */}
                  <div
                    className="flex flex-col"
                    style={{
                      gap: "8px",
                    }}
                  >
                    {/* Frame 53 - Name */}
                    <div
                      className="flex items-center"
                    >
                      <p
                        className="font-['Manrope'] text-black"
                        style={{
                          fontSize: "22px",
                          fontWeight: 400,
                          lineHeight: "1.366",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {authorName}
                      </p>
                    </div>

                    {/* Frame 54 - Role */}
                    <div
                      className="flex items-center"
                    >
                      <p
                        className="font-['Manrope'] text-black"
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "1.366",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {roleText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Paragraph - Quote */}
                <div
                  className="flex"
                  style={{
                    width: "100%",
                    marginTop: "16px",
                    flex: 1,
                  }}
                >
                  <p
                    className="font-['Manrope'] text-black"
                    style={{
                      fontSize: "16px",
                      fontWeight: 300,
                      lineHeight: "1.75",
                      letterSpacing: "0.02em",
                      width: "100%",
                    }}
                  >
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        </div>

        {/* Mobile/Tablet Cards */}
        <div className="relative z-10 flex flex-wrap justify-center gap-[14.33px] px-6 lg:hidden">
          {testimonials.map((testimonial, index) => {
            const authorName = testimonial.author || testimonial.name || "";
            const roleText = testimonial.role.startsWith("—")
              ? testimonial.role
              : `— ${testimonial.role}`;

            return (
              <div
                key={`testimonial-mobile-${index}`}
                className="bg-white rounded-[13px] border border-[#D9D9D9]"
                style={{
                  width: "411px",
                  maxWidth: "100%",
                  minHeight: "258px",
                }}
              >
                <div
                  className="flex flex-col"
                  style={{
                    padding: "10px",
                    width: "100%",
                    minHeight: "238px",
                    gap: "16px",
                  }}
                >
                  <div
                    className="flex flex-col"
                    style={{
                      gap: "8px",
                    }}
                  >
                    <div className="flex items-center">
                      <p
                        className="font-['Manrope'] text-black"
                        style={{
                          fontSize: "22px",
                          fontWeight: 400,
                          lineHeight: "1.366",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {authorName}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <p
                        className="font-['Manrope'] text-black"
                        style={{
                          fontSize: "12px",
                          fontWeight: 400,
                          lineHeight: "1.366",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {roleText}
                      </p>
                    </div>
                  </div>
                  <div className="flex" style={{ flex: 1 }}>
                    <p
                      className="font-['Manrope'] text-black"
                      style={{
                        fontSize: "16px",
                        fontWeight: 300,
                        lineHeight: "1.75",
                        letterSpacing: "0.02em",
                        width: "100%",
                      }}
                    >
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

