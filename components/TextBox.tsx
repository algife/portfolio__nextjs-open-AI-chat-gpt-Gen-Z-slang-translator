"use client";
import { ChangeEvent, ChangeEventHandler } from "react";

type Props = {
  textTypeTitle: string;
  text: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
};

export default function TextBox({
  textTypeTitle = "Text",
  text,
  onChange,
}: Props) {
  const id = `textbox--${Math.random()}`;

  const handleChangeAndResize = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // 1. Handle onchange event
    onChange(e);

    // 2. Resize to fit content's height
    const myDiv = document.getElementById(id)!;
    myDiv.style.height = "auto";
    myDiv.style.height = `${myDiv.scrollHeight}px`;
  };

  return (
    <div className="relative w-full flex flex-col m-0 p-0">
      <h4 className="mx-auto text-center  text-xl">{textTypeTitle}:</h4>
      <textarea
        id={id}
        className="rounded-lg border-0 mt-2 p-2 outline-none bg-[hsla(0,0%,100%,0.9)] block shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20 font-medium text-gray-400 dark:text-gray-400 text-sm"
        rows={6}
        value={text}
        contentEditable={true}
        onChange={handleChangeAndResize}
      />
    </div>
  );
}
