/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState, useRef, useEffect } from "react";
import "../index.css";

const Section = ({ children, opacity, right }) => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      sectionRef.current.style.opacity = opacity;
    }
  }, [opacity]);

  return (
    <section
      ref={sectionRef}
      className={`section-wrapper ${right ? "items-end" : "items-start"}`}
    >
      <div>{children}</div>
    </section>
  );
};

export const Cards = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 6, 1 / 3));
  });

  return (
    <Scroll html>
      <div className="py-8">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-3xl">
            ThreeJs with Blender!
          </h1>
          <p className="text-gray-900">
            This excercise combine awesome tools from 3d Web development as the
            following ones:
          </p>
          <ul className="leading-9">
            <li>Blender to modeling the assets</li>
            <li>React (To run on the web, I mean)</li>
            <li>
              ThreeJs to bring to the web the blender models, all the 3D web
              related
            </li>
            <li>GSAP library to include the scroll animations</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Nowadays these visuals are taking huge approach on web development
            🔥
          </h1>
          <p className="mt-3">
            <b>Full frontend skills</b>
          </p>
          <ul className=" space-y-4 leading-9">
            <li className="flex items-center">React</li>
            <li className="flex items-center">Three Fiber</li>
            <li className="flex items-center">Blender</li>
            <li className="flex items-center">VueJS</li>
            <li className="flex items-center">Tailwind</li>
          </ul>
          <p className="animate-bounce  mt-6">↓</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="mx-auto font-semibold font-serif text-2xl ">
            Do you like it?
          </h1>
          <p className="text-gray-500">Take a look on other 3D projects!</p>
          <p className="mt-6 p-3 bg-slate-200 rounded-lg">
            📌{" "}
            <a href="https://juanpablogiraldo.vercel.app/">
              juanpablogiraldo.vercel.app
            </a>
          </p>
        </Section>
      </div>
    </Scroll>
  );
};
