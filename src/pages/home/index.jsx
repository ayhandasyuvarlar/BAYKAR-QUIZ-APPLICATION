import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex w-full flex-col gap-20 max-w-screen-xl h-screen justify-center items-center mx-auto">
      <h1 className="w-6/12 font-bold text-center leading-[60px] text-6xl text-gray-900">
        Örnek Quiz Denemesi İçin Hoşgeldiniz
      </h1>
      <Link
        to={"/quiz"}
        className="border p-5 rounded-lg font-semibold text-xl bg-indigo-950 text-white px-20"
      >
        Sınava Başla
      </Link>
    </section>
  );
};

export default Home;
