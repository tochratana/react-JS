import React from "react";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div className="px-[20%] py-10">
      <ol class="relative border-s border-gray-200 dark:border-gray-700">
        {/* Primary school */}
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2012-2017
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://maps.app.goo.gl/uhPfZHzqDYoSMArn9" target="_blank">
              Svay Bopharam Primary School
            </a>
          </h3>
          <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            I learn at Svay Bopharam in grade 1 to grade 6 and about studying is
            medium.
          </p>
        </li>
        {/* Secondary School */}
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2018-2020
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://maps.app.goo.gl/CV5xUvDPXpc4emKY7" target="_blank">
              Russey Kraing Secondary School
            </a>
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            I learn at Russey Kraing in grade 7 to grade 9 and about studying is
            good and also I have been able to previously tested for outstanding
            students in 9th grade in the province.
          </p>
        </li>
        {/* Kraloampluk High School */}
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2021-2023
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://maps.app.goo.gl/fR3kZ9XRUcko6jJy5" target="_blank">
              Kraloampluk High School
            </a>
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Study heard and get grade A at the end of 12.
          </p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            2024
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://maps.app.goo.gl/pnwf3MmRisshywXAA" target="_blank">
              Freshman at SETEC institute
            </a>
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            Year 1 of institute and do some project about website.In the year I
            always learn bout coding and another in my school like design or
            network I don't like it.
          </p>
        </li>
        <li class="mb-10 ms-4">
          <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            (15 July 2024)-(27 September 2024)
          </time>
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
            <a href="https://maps.app.goo.gl/Fgs2vEHb5zbiBqLB9" target="_blank">
              Pre-University training course
            </a>
          </h3>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">
            2 months of complete tranning course with web design frontend at{" "}
            <a
              href="https://istad.co/"
              className="underline underline-offset-2"
            >
              CSTAD
            </a>
          </p>
          <Link
            to="/edu_cstad"
            class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 mt-5"
          >
            Learn more{" "}
            <svg
              class="w-3 h-3 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default Education;
