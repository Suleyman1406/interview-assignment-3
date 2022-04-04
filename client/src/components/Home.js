import React from "react";

/**
 * It takes the historyMap and renders it as a table
 * @returns The return value is a React component.
 */
const Home = ({ historyMap }) => {
  return (
    <div className="w-full  ">
      <div class="relative  h-[70vh] overflow-auto   overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm  text-left text-gray-500 dark:text-gray-400">
          <thead class="text-base text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3 ">
                Tarih
              </th>
              <th scope="col" class="px-6 py-3">
                Toplam İşlem Miktarı (MWh)
              </th>
              <th scope="col" class="px-6 py-3">
                Toplam İş Tutarı (TL)
              </th>
              <th scope="col" class="px-6 py-3">
                Ağırlıklı Ortalama Fiyat (TL/MWh)
              </th>
            </tr>
          </thead>
          <tbody>
            {Array.from(historyMap).map((item, id) => (
              <tr
                key={id}
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center duration-75 cursor-pointer hover:opacity-95"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {item[1].date}
                </th>
                <td class="px-6 py-4">
                  {item[1].totalOperationCount.toFixed(2)}
                </td>
                <td class="px-6 py-4">
                  ₺ {item[1].totalOperationAmount.toFixed(2)}
                </td>
                <td class="px-6 py-4">{item[1].avaragePrice.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
