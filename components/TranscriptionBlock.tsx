"use client";
import { heroData } from "@/app/constants";
import {
  transcribeFromGenZSlang,
  transcribeToGenZSlang,
} from "@/services/api.service";
import { ChangeEvent, useEffect, useState } from "react";
import TextBox from "./TextBox";

const placeholderText1 = `Fellow Americans, instead of asking what your country can do for you, I urge you to ask what you can do for your country. Together, we can forge a path toward peace and global collaboration. We are committed to defending freedom around the world and will work tirelessly to eliminate poverty, foster scientific innovation, and promote human rights. United, we can build a better future for all.`;
const placeholderText2 = `Yo, fam! Instead of bein' all like, "What's my country gonna do for me?" Let's switch it up and be like, "What can I do for my country?" Let's vibe globally, you feel? We're all about defending freedom worldwide, smashing poverty, and flexing our sci-tech game. We're gonna ride that wave of human rights, create a sick future for everyone. Let's get lit! 🌎🔥 #UnitedWeStand #DoItForTheCulture`;

export default function TranscriptionBlock() {
  const [text1, setText1] = useState<string>("");
  const [text2, setText2] = useState<string>("");
  const [lastEdited, setLastEdited] = useState<number>(0);

  const writtenTextAnimation = () => {
    const charSteps = 3;
    let i = 0 + charSteps; // Start with some text already written.
    const maxIndex = placeholderText1.length - 1;
    const intv = setInterval(() => {
      if (i <= maxIndex && lastEdited === 0) {
        setText1(placeholderText1.slice(0, i + 1));
        i = i + charSteps;
        return;
      }
      if (i >= maxIndex && lastEdited === 0) {
        i = 0;
        clearInterval(intv);
        setText2(placeholderText2);
      }
    }, 100);
  };

  useEffect(() => {
    writtenTextAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleText1Change = (changeEvent: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = changeEvent.target;
    setText1(value);
    setLastEdited(1); // Empty the peer
  };

  const handleText2Change = (changeEvent: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = changeEvent.target;
    setText2(value);
    setLastEdited(2); // Empty the peer
  };

  const handleBtnClick = async () => {
    setText2("🕒...");

    let transcript = "";
    switch (lastEdited) {
      case 1:
        /* Transcribe from original to Gen-Z slang */
        transcript = await transcribeToGenZSlang(text1);
        setText2(transcript);
        setLastEdited(0);
        break;
      case 2:
        /* Transcribe from Gen-Z slang to standard */
        transcript = await transcribeFromGenZSlang(text2);
        setText1(transcript);
        setLastEdited(0);
        break;
      default:
        // ...
        break;
    }
  };

  return (
    <div className="relative w-full">
      <section className="relative w-full grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left gap-2">
        <TextBox
          textTypeTitle="Standard Text"
          text={text1}
          onChange={handleText1Change}
        />
        <TextBox
          textTypeTitle="Gen-Z equivalent"
          text={text2}
          onChange={handleText2Change}
        />
      </section>

      <p className="opacity-60 mt-2 text-[hsl(200,20%,15%)] dark:text-[hsl(218,81%,85%)] text-sm">
        {heroData.authoritySellingPoint}
      </p>

      {/* BUTTON */}
      <div className="fixed right-10 bottom-10 button-container">
        <button
          // className="bottom-10 rounded-xl w-7xl px-auto bg-orange-600 text-center hover:bg-orange-400 text-black font-bold py-2 px-4 inline-flex items-center"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-600 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
          onClick={handleBtnClick}
        >
          <span className="text-center w-full p-2 px-1">Transcribe it!</span>
        </button>
      </div>
    </div>
  );
}
