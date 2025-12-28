"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Animation runs on all screen sizes
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frame: number;
    let x = 0;
    const SPEED = 0.4;

    const animate = () => {
      x -= SPEED;

      const first = container.firstElementChild as HTMLElement;
      if (!first) return;

      // Responsive gap based on screen width
      const gap =
        window.innerWidth < 640
          ? 60
          : window.innerWidth < 1024
          ? 150
          : 250;

      if (Math.abs(x) >= first.clientWidth + gap) {
        container.appendChild(first);
        x = 0;
      }

      container.style.transform = `translateX(${x}px)`;
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  const logos = [
    "/aruba-logo.png",
    "/Microsoft-logo.png",
    "/Dlink-logo.png",
    "/Palolato-logo.png",
    "/Grandstream-logo.png",
  ];

  return (
    <>
      <style>{`
        .mask-fade {
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }
        @media (min-width: 768px) {
          .mask-fade {
            mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 12%,
              black 88%,
              transparent 100%
            );
            -webkit-mask-image: linear-gradient(
              to right,
              transparent 0%,
              black 12%,
              black 88%,
              transparent 100%
            );
          }
        }
      `}</style>

      <section
        id="partners"
        className="relative bg-white py-10 sm:py-16 lg:pt-[120px] lg:pb-10"
      >
        {/* Heading */}
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-[72px]">
          <div
            className="mx-auto mb-8 sm:mb-12 lg:mb-[64px] flex flex-col items-center gap-3 sm:gap-4"
            style={{ maxWidth: "1143px" }}
          >
            <p className="font-['Manrope'] text-sm sm:text-base lg:text-[18px] font-medium text-center text-black">
              Partner Ecosystem
            </p>

            <h2 className="text-center font-['TASA_Orbiter'] text-lg sm:text-xl md:text-2xl lg:text-[32px] font-bold text-black px-2">
              We work with industry-leading OEMs to deliver enterprise-grade
              solutions that meet the highest standards of quality, performance,
              and security.
            </h2>
          </div>
        </div>

        {/* Animated Marquee - All Screen Sizes */}
        <div
          className="relative w-full overflow-hidden mask-fade mt-4 sm:mt-6 lg:mt-[30px] flex items-center h-[50px] sm:h-[70px] lg:h-[93px]"
          style={{
            backgroundColor: "#D9D9D9",
          }}
        >
          <div
            ref={scrollRef}
            className="flex items-center will-change-transform"
            style={{
              width: "max-content",
            }}
          >
            {[...logos, ...logos].map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 px-[30px] sm:px-[75px] lg:px-[125px]"
              >
                <Image
                  src={src}
                  alt="Partner logo"
                  height={75}
                  width={200}
                  className="object-contain w-auto h-[30px] sm:h-[50px] lg:h-[75px]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
