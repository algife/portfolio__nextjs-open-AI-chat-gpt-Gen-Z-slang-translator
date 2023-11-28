"use client";
import { ChangeEvent, useState } from "react";
import TextBox from "./TextBox";
import {
  transcribeFromGenZSlang,
  transcribeToGenZSlang,
} from "@/services/api.service";

export default function TranslateBlock() {
  const [text1, setText1] = useState<string>(
    `Fellow Americans, instead of asking what your country can do for you, I urge you to ask what you can do for your country. Together, we can forge a path toward peace and global collaboration. We are committed to defending freedom around the world and will work tirelessly to eliminate poverty, foster scientific innovation, and promote human rights. United, we can build a better future for all.`
  );
  const [text2, setText2] = useState<string>(
    `Yo, fam! Instead of bein' all like, "What's my country gonna do for me?" Let's switch it up and be like, "What can I do for my country?" Let's vibe globally, you feel? We're all about defending freedom worldwide, smashing poverty, and flexing our sci-tech game. We're gonna ride that wave of human rights, create a sick future for everyone. Let's get lit! 🌎🔥 #UnitedWeStand #DoItForTheCulture`
  );
  const [lastEdited, setLastEdited] = useState<number>(1);

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
    <div className="flex flex-col w-full max-w-5xl">
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
      {/* BUTTON */}
      <button
        className="mr-0 ml-auto mt-2 w-7xl px-auto bg-orange-600 text-center hover:bg-orange-400 text-black font-bold py-2 px-4 rounded inline-flex items-center"
        onClick={handleBtnClick}
      >
        <span className="text-center w-full">Transcribe it!</span>
      </button>
    </div>
  );
}
