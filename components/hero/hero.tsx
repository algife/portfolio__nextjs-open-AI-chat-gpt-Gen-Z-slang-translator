import { heroData } from "@/app/constants";
import "./hero.module.scss";

export default function Hero() {
  return (
    <div className="text-center w-full lg:pb-10 ">
      <div className="mt-12 lg:mt-0" style={{ zIndex: 10 }}>
        <h1 className="mt-0 mb-6 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl text-gray-700 dark:text-[hsl(218,81%,95%)]">
          {heroData.title.line1}
          <br />
          <span className="text-[hsl(218,81%,75%)]">
            {heroData.title.line2}
          </span>
        </h1>
        <h2 className="text-2xl opacity-70 dark:text-[hsl(218,81%,85%)]">
          {heroData.subHeadline}
        </h2>
        <p className="opacity-50 mt-6 dark:text-[hsl(218,81%,85%)]">
          {heroData.description}
        </p>
      </div>
    </div>
  );
}
