import NavigationTabs from "../components/NavigationTabs";
import TableComponent from "../components/TableComponent";
import Form from "../components/Form";
import { useState } from "react";

const Sales = () => {
  const [formState, setFormState] = useState(false);

  return (
    <>
        <Form state={formState} />
      <div className="flex justify-between items-center ">
        <h3 className="text-green-600 font-bold text-xl">
          Hello, User Welcome Back
        </h3>
        <NavigationTabs />
      </div>

      <div className="flex justify-end gap-2 mt-4">
        <button
          onClick={() => setFormState(true)}
          type="button"
          class="px-3 py-2 text-xs font-medium text-center text-white bg-green-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 border-green-700"
        >
          add new product
        </button>

        <button
          type="button"
          class="px-3 py-2 text-xs font-medium text-center text-green-600 bg-white-600 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          + sales report
        </button>
      </div>

      <div className="flex gap-6 mt-10 ml-10">
        <a
          href="#"
          class="block w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-grey-900 dark:text-white text-grey-500">
            net revenue
          </h5>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-grey-900 dark:text-white text-green-500">
            $54000
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            january 2025
          </p>
        </a>

        <a
          href="#"
          class="block w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-grey-900 dark:text-white text-grey-500">
            weekly sales
          </h5>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-grey-900 dark:text-white text-blue-500">
            $54000
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            january 2025
          </p>
        </a>

        <a
          href="#"
          class="block w-60 p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-grey-900 dark:text-white text-grey-500">
            total visitor
          </h5>
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-grey-900 dark:text-white text-yellow-500">
            $54000
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            january 2025
          </p>
        </a>
      </div>

      <div className="">
        <h3 className="font-bold">Orders</h3>
        <form class="flex mt-4 ml-0 max-w-sm mx-auto">
          <label for="simple-search" class="sr-only">
            Search
          </label>
          <div class="relative w-full">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                class="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search branch name..."
              required
            />
          </div>
          <button
            type="submit"
            class="p-2.5 ms-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              class="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search</span>
          </button>
        </form>

        <TableComponent />
      </div>
    </>
  );
};

export default Sales;
