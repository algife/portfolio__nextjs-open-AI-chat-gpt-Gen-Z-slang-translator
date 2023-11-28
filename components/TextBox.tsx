"use client";
import { ChangeEventHandler } from "react";

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
  return (
    <div className="relative flex flex-col w-full h-full m-0 p-0">
      <h4 className="mx-auto text-center mb-2 text-xl ">{textTypeTitle}:</h4>
      <div className="relative mb-12 lg:mb-0 lg:grid-cols-2 m-0 p-0">
        <div className="relative bg-[hsla(0,0%,100%,0.9)] backdrop-blur-[25px] backdrop-saturate-[200%] block rounded-lg m-0 p-4 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,15%,0.9)] dark:shadow-black/20">
          <textarea
            className="w-full h-full bg-transparent rounded border-0 p-0 m-0 outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-300 motion-reduce:transition-none"
            rows={7}
            value={text}
            contentEditable={true}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
}
