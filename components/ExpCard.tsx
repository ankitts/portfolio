"use client";
import { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image
} from "@nextui-org/react";

export function ExpCard({className}: {className:any}) {
  // State to store the gradient position and rotation
  const [gradient, setGradient] = useState({ x: 50, y: 50 });
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  // Handle mouse movement to update gradient and rotation
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef?.current) return;

    const card = cardRef.current.getBoundingClientRect();
    const offsetX = e.clientX - card.left;
    const offsetY = e.clientY - card.top;

    const centerX = card.width / 2;
    const centerY = card.height / 2;

    // Calculate gradient position
    const xPercent = (offsetX / card.width) * 100;
    const yPercent = (offsetY / card.height) * 100;

    setGradient({ x: xPercent, y: yPercent });

    // Calculate rotation angles based on mouse position
    const rotateX = ((offsetY - centerY) / centerY) * -10; // Adjust multiplier for desired tilt effect
    const rotateY = ((offsetX - centerX) / centerX) * 10;

    setTransform({ rotateX, rotateY });
  };

  // Reset gradient and rotation when the mouse leaves the card
  const handleMouseLeave = () => {
    setGradient({ x: 50, y: 50 }); // Reset gradient to center
    setTransform({ rotateX: 0, rotateY: 0 }); // Reset rotation to default
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`max-w-[400px] h-80 border border-midnight hover:border-zinc-500 ${className}`}
      style={{
        background: `radial-gradient(circle at ${gradient.x}% ${gradient.y}%, rgba(6, 6, 46, 0.5), rgba(0, 0, 0, 0.8))`,
        transition: "transform 0.1s ease, background 0.3s ease",
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md text-white">NextUI</p>
          <p className="text-small text-default-500">nextui.org</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p className="text-white">Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Image src="/ts-logo.png" width={40} radius="none" />
        <Image src="/js-logo.png" width={40} radius="none" className="ml-2" />
        <Image src="/react-logo.png" width={40} radius="none" className="ml-2" />
        <Image src="/python-logo.png" width={40} radius="none" className="ml-2" />
        <Image src="/django-logo.png" width={80} radius="none" className="ml-2" />
      </CardFooter>
    </Card>
  );
}
