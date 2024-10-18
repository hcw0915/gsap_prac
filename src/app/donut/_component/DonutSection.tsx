"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import { ChevronLeft, ChevronRight } from "lucide-react";

export const DonutSection = () => {
  const blueBerryTextRef = useRef(null);
  const blueBerryRef = useRef(null);
  const greenAppleRef = useRef(null);

  const handleNext = () => {
    const tl = gsap.timeline();
    tl.to(
      blueBerryTextRef.current,
      {
        y: 700,
      },
      "next"
    );
    tl.to(
      blueBerryRef.current,
      {
        y: -620,
        rotate: 180,
        scale: 0.4,
      },
      "next"
    );
    tl.to(
      greenAppleRef.current,
      {
        y: "-150%",
        rotate: 180,
        scale: 1,
      },
      "next"
    );
  };

  useEffect(() => {
    handleNext();
  }, []);

  return (
    <div
      className="h-screen flex justify-center items-center overflow-hidden"
      style={{ background: "radial-gradient(circle, #e0b8ff, #744eb2)" }}
    >
      <div className="w-full h-full relative">
        <h1
          ref={blueBerryTextRef}
          className="text-[15vw] w-full text-center uppercase font-anton absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          Blue Berry
        </h1>
        {/* donut images */}
        <Image
          ref={blueBerryRef}
          width={800}
          height={800}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="blue berry donut"
          src={"/blueberry.png"}
        />
        {/* green apple donut */}
        <Image
          ref={greenAppleRef}
          width={800}
          height={800}
          className="absolute top-[110%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 size-[500px]"
          alt="green apple donut"
          src={"/green-apple.png"}
        />

        {/* leaf images */}
        <Image
          width={128}
          height={224}
          alt="leaf-img"
          src={"/leaf.png"}
          className="absolute top-[5%] left-[15%] -rotate-[58deg]"
        />
        <Image
          width={100}
          height={100}
          alt="leaf1-img"
          src={"/leaf1.png"}
          className="absolute top-[5%] right-[15%]"
        />
        <Image
          width={128}
          height={224}
          alt="leaf-img"
          src={"/leaf.png"}
          className="absolute bottom-[5%] right-[15%] -rotate-[58deg]"
        />
        <Image
          width={100}
          height={100}
          alt="leaf1-img"
          src={"/leaf1.png"}
          className="absolute bottom-[5%] left-[15%]"
        />

        {/* swipe animation */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-between px-4">
          <ChevronLeft className="size-12 cursor-pointer" />
          <ChevronRight
            className="size-12 cursor-pointer"
            onClick={handleNext}
          />
        </div>
      </div>
    </div>
  );
};
