import axios from "axios";
import { useState } from "react";

export default function App() {
  const [getAdvice, setGetAdvice] = useState("");
  const [error, setError] = useState("");

  const fetchAdvice = async () => {
    try {
      const response = await axios.get("https://api.adviceslip.com/advicee");
      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch data, something went wrong ${response.status}`,
        );
      }
      console.log(response);
      setGetAdvice(response.data.slip.advice);
    } catch (error) {
      console.log("Error caught:", error);
      setError(error.message);
      setGetAdvice("");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-tl from-rose-300 to-sky-500 text-white">
      <div
        className={`max-w-5xl gap-14 rounded-md p-16 text-center ${getAdvice ? "outline outline-1 " : ""}`}
      >
        {getAdvice ? (
          <h1 className="font-Modimi text-5xl leading-snug tracking-wider">
            {getAdvice}
          </h1>
        ) : (
          <p className="text-lg text-red-500">{error}</p>
        )}
        <button
          className="mt-14 rounded-xl bg-sky-600 bg-gradient-to-tr from-rose-300 to-sky-400 px-4 py-2 text-2xl text-white outline outline-1 outline-rose-200 transition-all duration-300 ease-linear hover:scale-125"
          onClick={fetchAdvice}
        >
          Get Advice
        </button>
      </div>
    </div>
  );
}
