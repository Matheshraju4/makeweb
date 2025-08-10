import SplitText from "@/components/gsap-animation/split-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col gap-6 justify-center items-center h-screen relative z-10">
        <div className="flex justify-center items-center text-white">
          <Badge
            variant={"secondary"}
            className="text-sm font-bold border-black text-black py-1 px-6 rounded-lg backdrop-blur-md  transition-all duration-300 shadow-xl border-opacity-30"
          >
            <Image
              src="/logo.png"
              alt="MakeWeb"
              width={20}
              height={20}
              className="mr-2"
            />{" "}
            Crafting Digital Excellence
          </Badge>
        </div>

        <div className="max-w-2xl ">
          <h1 className=" text-4xl md:text-6xl font-semibold text-white drop-shadow-2xl ">
            <SplitText text="Welcome to MakeWeb" splitType="words" />
          </h1>
          <p className="text-gray-300 text-lg mt-6 text-center leading-tight">
            We are crafting ourselves to craft yours.
          </p>
        </div>
        <Button
          className="bg-white text-black hover:bg-white/95 hover:text-black"
          asChild
        >
          <Link
            href="mailto:matheshraju@makeweb.digital"
            className="text-black font-semibold"
          >
            Contact Us
          </Link>
        </Button>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#1e40af_100%)]"></div>
    </>
  );
};
