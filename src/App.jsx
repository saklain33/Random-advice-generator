import axios from "axios";
import { useState } from "react";

export default function App() {
  const [getAdvice, setGetAdvice] = useState("");

  const fetchAdvice = async () => {
    const response = await axios.get("https://api.adviceslip.com/advice");
    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch data, something went wrong ${response.status}`,
      );
    }
    console.log(response);
    setGetAdvice(response.data.slip.advice);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-gradient-to-tl from-rose-300 to-sky-500 text-white">
      <h1 className="font-Modimi text-5xl">{getAdvice}</h1>
      <button
        className="rounded-xl bg-sky-600 bg-gradient-to-tr from-rose-300 to-sky-400 px-4 py-2 text-2xl text-white outline outline-1 outline-rose-200 transition-all duration-300 ease-linear hover:scale-125"
        onClick={fetchAdvice}
      >
        Get Advice
      </button>
    </div>
  );
}
