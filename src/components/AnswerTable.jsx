const AnswerTable = (data) => {
  return (
    <>
      {data.data.length > 0 && (
        <div className="flex flex-col bg-indigo-950  rounded-lg  w-10/12 lg:w-6/12">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full  sm:px-6">
              <div className="">
                <table className="min-w-full text-left text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        #
                      </th>
                      <th scope="col" className="px-6 py-4">
                       Verdiğiniz   Cevaplar
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.data.map((selectedOption, index) => (
                      <tr
                        key={index}
                        className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {index + 1})
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {selectedOption.optionText}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AnswerTable;
