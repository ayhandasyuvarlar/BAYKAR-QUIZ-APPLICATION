import { useEffect, useState } from "react";
import useFetch from "../../hook/useFetch";
import AnswerTable from "../../components/AnswerTable";
import Countdown from "../../components/Countdown";

const Quiz = () => {
  // VITE_QUESTIONS_URL = http://localhost:8000/questions
  const { data, isLoading, error } = useFetch(
    import.meta.env.VITE_QUESTIONS_URL
  );
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [disabled, setDisabled] = useState(true);
  useEffect(() => {
    setDisabled(true);
  }, [index]);

  const handleAnswerSelect = (answerOption) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      let updatedAnswers;
      if (answerOption) {
        updatedAnswers = [...prevSelectedAnswers, answerOption];
      } else {
        updatedAnswers = [
          ...prevSelectedAnswers,
          { optionText: "Boş", isCorrect: false },
        ];
      }

      return updatedAnswers;
    });

    setIndex((prevIndex) => prevIndex + 1);
  };

  const handleTimeout = () => {
    setIndex((prevIndex) => prevIndex + 1);
    handleAnswerSelect(null);
  };

  return index > 9 ? (
    <div className="flex w-full md:w-10/12 flex-col gap-10 max-w-screen-xl h-screen justify-center items-center mx-auto">
      <h1 className="text-3xl font-bold text-indigo-900">Sınav Tamamlandı!</h1>
      <AnswerTable data={selectedAnswers} />
    </div>
  ) : (
    <section className="flex w-full md:w-10/12 flex-col gap-10 max-w-screen-xl h-screen justify-center items-center mx-auto">
      <h1 className="w-10/12 font-bold text-center leading-[60px] text-6xl text-gray-900">
        Örnek Quiz Denemesi İçin Hoşgeldiniz
      </h1>
      <Countdown
        totalTime={30}
        setDisabled={setDisabled}
        onTimeout={handleTimeout}
      />
      <div className=" w-9/12 h-2/3 flex flex-col justify-center items-center gap-5">
        <span className="w-20 h-20  flex justify-center items-center rounded-full font-bold text-xl bg-indigo-950 text-white">
          {index + 1}/10
        </span>

        {error ? (
          error.message
        ) : isLoading ? (
          "Loading..."
        ) : (
          <>
            <div className="flex ">
              <h1 className="font-bold text-center leading-[60px] text-4xl text-gray-900">
                {data[index]?.questionText}
              </h1>
            </div>
            <div className=" flex flex-wrap w-8/12 gap-2 justify-center">
              {data[index]?.answerOptions?.map((answerOption, key) => {
                return (
                  <div className="w-5/12" key={key}>
                    <button
                      disabled={disabled}
                      className={`w-full disabled:bg-red-500 disabled:opacity-50 text-left ml-2 rounded-lg font-bold border h-full p-3 ${
                        selectedAnswers.includes(answerOption)
                          ? "bg-gray-300"
                          : ""
                      }`}
                      onClick={() => handleAnswerSelect(answerOption)}
                    >
                      {answerOption.optionText}
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      {index > 8 ? (
        <button
          disabled={disabled}
          onClick={() => {
            setIndex(10);
            handleAnswerSelect(null);
          }}
          className=" border w-9/12 py-5 rounded-lg bg-indigo-950 text-white font-bold text-xl  disabled:bg-red-500 disabled:opacity-50"
        >
          Sınavı Bitir
        </button>
      ) : (
        <button
          disabled={disabled}
          onClick={() => {
            handleAnswerSelect(null);
          }}
          className=" border w-9/12 py-5 rounded-lg bg-indigo-950 text-white font-bold text-xl disabled:bg-red-500 disabled:opacity-50"
        >
          Sonraki soru
        </button>
      )}
    </section>
  );
};

export default Quiz;
