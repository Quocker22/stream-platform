import { Product } from "@/components/product";

export default function Home() {
  return (
    <>
      <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-8">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Khóa học phổ biến
            </h2>
            <a
              href="#"
              title=""
              className="text-base font-medium text-gray-900 underline hover:no-underline dark:text-white"
            >
              {" "}
              See all categories
            </a>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller.svg"
                  alt="controller"
                />
                <img
                  className="mx-auto mb-4 hidden h-60 dark:block md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg"
                  alt="controller"
                />
              </a>
              <span className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                <svg
                  className="me-1.5 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
                  />
                </svg>
                Up to 25% off today
              </span>
              <a
                href="#"
                className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
              >
                Find great deals on the most popular video games and gaming
                consoles
              </a>
              <a
                href="#"
                title=""
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
              >
                See more gaming deals
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-light.svg"
                  alt="laptop"
                />
                <img
                  className="mx-auto mb-4 hidden h-60 dark:block md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/macbook-pro-dark.svg"
                  alt="laptop"
                />
              </a>
              <span className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                <svg
                  className="me-1.5 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
                  />
                </svg>
                Up to 50% off today
              </span>
              <a
                href="#"
                className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
              >
                MacBook Pro Accessories, from Apple, Belkin, Logitech, Anker,
                and more
              </a>
              <a
                href="#"
                title=""
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
              >
                See more laptop deals
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <a href="#">
                <img
                  className="mx-auto mb-4 h-60 dark:hidden md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"
                  alt="keyboard"
                />
                <img
                  className="mx-auto mb-4 hidden h-60 dark:block md:mb-6"
                  src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg"
                  alt="keyboard"
                />
              </a>
              <span className="inline-flex items-center bg-gray-100 text-gray-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                <svg
                  className="me-1.5 h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.9 15.1 15 9m-5-.6h0m3.1 7.2h0M14 4a2.8 2.8 0 0 0 2.3.9 2.8 2.8 0 0 1 2.9 3 2.8 2.8 0 0 0 .9 2.1 2.8 2.8 0 0 1 0 4.2 2.8 2.8 0 0 0-.9 2.2 2.8 2.8 0 0 1-3 2.9 2.8 2.8 0 0 0-2.1.9 2.8 2.8 0 0 1-4.2 0 2.8 2.8 0 0 0-2.2-.9 2.8 2.8 0 0 1-2.9-3 2.8 2.8 0 0 0-.9-2.1 2.8 2.8 0 0 1 0-4.2 2.8 2.8 0 0 0 .9-2.2 2.8 2.8 0 0 1 3-2.9A2.8 2.8 0 0 0 9.9 4a2.8 2.8 0 0 1 4.2 0Z"
                  />
                </svg>
                Up to 25% off today
              </span>
              <a
                href="#"
                className="mt-4 block font-medium text-gray-900 hover:underline dark:text-white"
              >
                Find great deals on PC games, and desktops, accessories and more
                from top brands.
              </a>
              <a
                href="#"
                title=""
                className="mt-4 inline-flex items-center gap-1.5 font-medium text-primary-700 hover:text-primary-600 hover:underline dark:text-primary-500 dark:hover:text-primary-400"
              >
                See more electronics deals
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 12H5m14 0-4 4m4-4-4-4"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-4 antialiased dark:bg-gray-900 md:py-6">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          {/* TOP BAR */}
          <div className="mb-1 divide-y divide-gray-200 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:divide-gray-700 dark:border-gray-700 dark:bg-gray-800 md:p-6">
            <div className="items-center justify-between pb-4 md:flex">
              <h2 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white md:mb-0">
                Khóa học dành cho bạn
              </h2>
            </div>
          </div>
          {/* PRODUCT CARDS */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                {/* Carousel wrapper */}
                <div className="relative mb-4 min-h-72 overflow-hidden rounded-lg">
                  {/* Item 1 */}
                  <div
                    className="hidden duration-1000 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 2 */}
                  <div
                    className="hidden duration-1000 ease-in-out"
                    data-carousel-item="active"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 3 */}
                  <div
                    className="hidden duration-1000 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 4 */}
                  <div
                    className="hidden duration-1000 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-prev=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12l4-4m-4 4 4 4"
                        />
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <span id="carousel-current-item">1</span> of{" "}
                    <span id="carousel-total-items">4</span>
                  </span>
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-next=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iMac 27"
                </a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, Apple M3
                  8-Core, macOS Sonoma
                </p>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:underline dark:text-primary-600"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Buy in installments with Flowbite Wallet
              </a>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $1199
                </p>
                <div className="flex items-center justify-end gap-2">
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Black"
                      className="sr-only"
                    />
                    <span id="color-choice-1-label" className="sr-only">
                      {" "}
                      Black{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-900 border-opacity-10 bg-gray-900"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-primary-700 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Blue"
                      className="sr-only"
                    />
                    <span id="color-choice-2-label" className="sr-only">
                      {" "}
                      Blue{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-primary-700 border-opacity-10 bg-primary-700"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-pink-600 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-3-label" className="sr-only">
                      {" "}
                      Pink{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-pink-600 border-opacity-10 bg-pink-600"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-teal-500 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-4-label" className="sr-only">
                      {" "}
                      Teal{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-teal-500 border-opacity-10 bg-teal-500"
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    />
                  </svg>
                  Wishlist
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy now
                </button>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                {/* Carousel wrapper */}
                <div className="relative mb-4 h-72 overflow-hidden rounded-lg">
                  {/* Item 1 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 2 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-side.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-side-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 3 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-controller-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 4 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ps5-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-prev=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12l4-4m-4 4 4 4"
                        />
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <span id="carousel-current-item">1</span> of{" "}
                    <span id="carousel-total-items">4</span>
                  </span>
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-next=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  PlayStation 5 Slim Console
                </a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Up to 120fps with 120Hz output, 1TB HDD, 2 Controllers, Ray
                  Tracing.
                </p>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:underline dark:text-primary-600"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Buy in installments with Flowbite Wallet
              </a>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $499
                </p>
                <div className="flex items-center justify-end gap-2">
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Black"
                      className="sr-only"
                    />
                    <span id="color-choice-5-label" className="sr-only">
                      {" "}
                      Black{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-900 border-opacity-10 bg-gray-900"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-primary-700 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Blue"
                      className="sr-only"
                    />
                    <span id="color-choice-6-label" className="sr-only">
                      {" "}
                      Blue{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-primary-700 border-opacity-10 bg-primary-700"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-300 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-7y-label" className="sr-only">
                      {" "}
                      Gray{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-300 border-opacity-10 bg-gray-300"
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    />
                  </svg>
                  Wishlist
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy now
                </button>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                {/* Carousel wrapper */}
                <div className="relative mb-4 h-72 overflow-hidden rounded-lg">
                  {/* Item 1 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-side.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-side-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 2 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 3 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-keyboard-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 4 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/ipad-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-prev=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12l4-4m-4 4 4 4"
                        />
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <span id="carousel-current-item">1</span> of{" "}
                    <span id="carousel-total-items">4</span>
                  </span>
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-next=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  iPad Pro 13-Inch (M4): XDR Display
                </a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Ultra Retina XDR Display, 256GB, Landscape 12MP Front
                  Camera/12MP.
                </p>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:underline dark:text-primary-600"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Buy in installments with Flowbite Wallet
              </a>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $1199
                </p>
                <div className="flex items-center justify-end gap-2">
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Black"
                      className="sr-only"
                    />
                    <span id="color-choice-8-label" className="sr-only">
                      {" "}
                      Black{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-900 border-opacity-10 bg-gray-900"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-pink-600 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Blue"
                      className="sr-only"
                    />
                    <span id="color-choice-9-label" className="sr-only">
                      {" "}
                      Blue{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-pink-600 border-opacity-10 bg-pink-600"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-300 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-10-label" className="sr-only">
                      {" "}
                      Gray{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-300 border-opacity-10 bg-gray-300"
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    />
                  </svg>
                  Wishlist
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy now
                </button>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                {/* Carousel wrapper */}
                <div className="relative mb-4 h-72 overflow-hidden rounded-lg">
                  {/* Item 1 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-controller.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-controller-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 2 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 3 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-side.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-side-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 4 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/xbox-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-prev=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12l4-4m-4 4 4 4"
                        />
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <span id="carousel-current-item">1</span> of{" "}
                    <span id="carousel-total-items">4</span>
                  </span>
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-next=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Xbox Series S 1TB SSD
                </a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  All-Digital Gaming Console 1440p Gaming 4K Streaming Carbon
                  Black.
                </p>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:underline dark:text-primary-600"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Buy in installments with Flowbite Wallet
              </a>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $499
                </p>
                <div className="flex items-center justify-end gap-2">
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Black"
                      className="sr-only"
                    />
                    <span id="color-choice-11-label" className="sr-only">
                      {" "}
                      Black{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-900 border-opacity-10 bg-gray-900"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-100 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-12-label" className="sr-only">
                      {" "}
                      Gray{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-100 border-opacity-10 bg-gray-100"
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    />
                  </svg>
                  Wishlist
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy now
                </button>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                {/* Carousel wrapper */}
                <div className="relative mb-4 h-72 overflow-hidden rounded-lg">
                  {/* Item 1 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 2 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-camera.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-camera-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 3 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/airpods-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 4 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-light.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/iphone-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-prev=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12l4-4m-4 4 4 4"
                        />
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <span id="carousel-current-item">1</span> of{" "}
                    <span id="carousel-total-items">4</span>
                  </span>
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-next=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  Apple iPhone 15 Pro Max
                </a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  256GB, Natural Titanium, 6.7 Inches - Unlocked (Renewed),
                  Unlocked for All Carriers.
                </p>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:underline dark:text-primary-600"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Buy in installments with Flowbite Wallet
              </a>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $1299
                </p>
                <div className="flex items-center justify-end gap-2">
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Black"
                      className="sr-only"
                    />
                    <span id="color-choice-0-label" className="sr-only">
                      {" "}
                      Black{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-900 border-opacity-10 bg-gray-900"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-purple-500 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Blue"
                      className="sr-only"
                    />
                    <span id="color-choice-0-label" className="sr-only">
                      {" "}
                      Blue{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-purple-500 border-opacity-10 bg-purple-500"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-300 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-0-label" className="sr-only">
                      {" "}
                      Gray{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-300 border-opacity-10 bg-gray-300"
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    />
                  </svg>
                  Wishlist
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy now
                </button>
              </div>
            </div>
            <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
              <div
                id="controls-carousel"
                className="relative w-full"
                data-carousel="static"
              >
                {/* Carousel wrapper */}
                <div className="relative mb-4 h-72 overflow-hidden rounded-lg">
                  {/* Item 1 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-front-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 2 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-back-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 3 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item=""
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-components-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                  {/* Item 4 */}
                  <div
                    className="hidden duration-700 ease-in-out"
                    data-carousel-item="active"
                  >
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side.svg"
                      className="absolute left-1/2 top-1/2 block h-full -translate-x-1/2 -translate-y-1/2 dark:hidden"
                      alt="..."
                    />
                    <img
                      src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/imac-side-dark.svg"
                      className="absolute left-1/2 top-1/2 hidden h-full -translate-x-1/2 -translate-y-1/2 dark:block"
                      alt="..."
                    />
                  </div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-prev=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 12h14M5 12l4-4m-4 4 4 4"
                        />
                      </svg>
                      <span className="hidden">Previous</span>
                    </span>
                  </button>
                  <span className="text-base font-medium text-gray-500 dark:text-gray-400">
                    <span id="carousel-current-item">1</span> of{" "}
                    <span id="carousel-total-items">4</span>
                  </span>
                  <button
                    type="button"
                    className="group flex h-full cursor-pointer items-center justify-center rounded-lg p-1.5 hover:bg-gray-50 focus:outline-none dark:hover:bg-gray-800"
                    data-carousel-next=""
                  >
                    <span className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
                      <svg
                        className="h-7 w-7"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                      <span className="hidden">Next</span>
                    </span>
                  </button>
                </div>
              </div>
              <div>
                <a
                  href="#"
                  className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
                >
                  iMac 24" (2021)
                </a>
                <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
                  Retina 4.5K, 8GB, 256GB SSD, 8-core GPU, Orange, INT KB.
                </p>
              </div>
              <a
                href="#"
                title=""
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 hover:underline dark:text-primary-600"
              >
                <svg
                  className="h-4 w-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8H5m12 0a1 1 0 0 1 1 1v2.6M17 8l-4-4M5 8a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.6M5 8l4-4 4 4m6 4h-4a2 2 0 1 0 0 4h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z"
                  />
                </svg>
                Buy in installments with Flowbite Wallet
              </a>
              <div className="flex items-center justify-between gap-4">
                <p className="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">
                  $1999
                </p>
                <div className="flex items-center justify-end gap-2">
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-gray-900 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Black"
                      className="sr-only"
                    />
                    <span id="color-choice-16-label" className="sr-only">
                      {" "}
                      Black{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-gray-900 border-opacity-10 bg-gray-900"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-sky-600 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Blue"
                      className="sr-only"
                    />
                    <span id="color-choice-17-label" className="sr-only">
                      {" "}
                      Blue{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-sky-600 border-opacity-10 bg-sky-600"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-orange-400 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Gray"
                      className="sr-only"
                    />
                    <span id="color-choice-18-label" className="sr-only">
                      {" "}
                      Orange{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-orange-400 border-opacity-10 bg-orange-400"
                    />
                  </label>
                  <label className="relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-teal-400 focus:outline-none has-[:checked]:ring-2">
                    <input
                      type="radio"
                      name="color-choice"
                      defaultValue="Blue"
                      className="sr-only"
                    />
                    <span id="color-choice-17-label" className="sr-only">
                      {" "}
                      Teal{" "}
                    </span>
                    <span
                      aria-hidden="true"
                      className="h-7 w-7 rounded-full border border-teal-400 border-opacity-10 bg-teal-400"
                    />
                  </label>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                >
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                    />
                  </svg>
                  Wishlist
                </button>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  <svg
                    className="-ms-2 me-2 h-5 w-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"
                    />
                  </svg>
                  Buy now
                </button>
              </div>
            </div>
          </div>
          {/* Pagination */}
          <nav
            className="mt-6 flex items-center justify-center sm:mt-8"
            aria-label="Page navigation example"
          >
            <ul className="flex h-8 items-center -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-4 w-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m15 19-7-7 7-7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-700 dark:text-white dark:hover:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="z-10 flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-4 w-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </>
  );
}
