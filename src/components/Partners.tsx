"use client";

import Image from "next/image";
import { useRef, useEffect } from "react";

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null);

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

      if (Math.abs(x) >= first.clientWidth + 250) {
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
      `}</style>

      <section
        id="partners"
        className="relative bg-white pt-[120px] pb-0"
        style={{ minHeight: "558px" }}
      >
        {/* Heading */}
        <div className="mx-auto w-full max-w-[1440px] px-[72px]">
          <div className="mx-auto mb-[64px] flex flex-col items-center gap-4"
               style={{ maxWidth: "1143px" }}>
            <p className="font-['Manrope'] text-[18px] font-medium text-center text-black">
              Partner Ecosystem
            </p>

            <h2 className="text-center font-['TASA_Orbiter'] text-[32px] font-bold text-black">
              <span className="whitespace-nowrap">
                We work with industry-leading OEMs to deliver enterprise-grade solutions
              </span>
              <br />
              <span className="whitespace-nowrap">
                that meet the highest standards of quality, performance, and security.
              </span>
            </h2>
          </div>
        </div>

        {/* Logo Marquee */}
        <div
          className="relative w-full overflow-hidden mask-fade"
          style={{
            height: "93px",          // EXACT Figma height
            backgroundColor: "#D9D9D9",
            display: "flex",
            alignItems: "center",
            marginTop: "30px",
          }}
        >
          <div
            ref={scrollRef}
            className="flex items-center will-change-transform"
            style={{
              width: "max-content",
              gap: "250px",         // EXACT Figma gap
              paddingLeft: "250px",
            }}
          >
            {[...logos, ...logos].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt="Partner logo"
                height={75}         // EXACT Figma visual height
                width={200}
                className="object-contain w-auto flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
