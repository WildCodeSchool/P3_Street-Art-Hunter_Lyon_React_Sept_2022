import React, { useState, useEffect } from "react";

import ModalMessage from "./ModalMessage";

const backURL = import.meta.env.VITE_BACKEND_URL;

export default function MessageList() {
  const [show, setShow] = useState(true);

  const [mess, setMess] = useState([]);

  useEffect(() => {
    fetch(`${backURL}/messages`)
      .then((results) => results.json())
      .then((datas) => {
        setMess(datas);
      });
  }, []);

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 w-full mt-28">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-main-font text-gray-900">Message reçu</h1>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-main-font text-gray-900 sm:pl-6"
                    >
                      UserName
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-main-font text-gray-900"
                    >
                      object
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-main-font text-gray-900"
                    >
                      message
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-200 bg-white">
                  {mess.map((inbox) => (
                    <tr key={inbox.id}>
                      <button onClick={() => setShow(!setShow)} type="button">
                        <td className="whitespace-nowrap px-3 py-4 font-bold text-sm text-gray-500">
                          {inbox.UserName}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 font-bold text-sm text-gray-500">
                          {inbox.objet}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4font-bold text-sm text-gray-500">
                          {inbox.message}
                        </td>
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {show ? (
              ""
            ) : (
              <button
                className="relative bottom-80"
                onClick={() => setShow(!show)}
                type="button"
              >
                <ModalMessage />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
