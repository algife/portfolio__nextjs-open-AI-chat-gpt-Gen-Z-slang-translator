export const transcribeToGenZSlang = (text: string) =>
  Promise.resolve("this is slang!!." + text);

export const transcribeFromGenZSlang = (text: string) =>
  Promise.resolve("this is standard text. " + text);
