import React from "react";
import { Link } from "react-router-dom";
import rockPaperScissor from "../../../public/image/exercise/rock-paper-scisson.png";

const Rock_papper_scisson = () => {
  return (
    <>
      <div className="flex items-center gap-5 px-10 text-text_primary text-sm mt-5">
        <Link
          to="/"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          Home
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <Link
          to="/course/javascript-course"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          JavaScript
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <Link
          to="/course/javascript/exercise"
          className="text-blue-600 hover:underline hover:underline-offset-2"
        >
          Exercise practice
        </Link>
        <i class="fa-solid fa-greater-than"></i>
        <p className="">Rock Paper Scissor</p>
      </div>
      <div className="flex px-[12%] py-[2%] dark:text-text_primary gap-10 flex-col xl:flex-row">
        {/* right side */}
        <div className="sm:w-[600px] lg:w-[900px] xg:w-[1100px]">
          <div>
            <h1 className="text-[30px] font-bold mb-5">Rock Paper Scissor</h1>
            <div className="flex items-center gap-2 mb-5">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
            </div>
            <img
              src={rockPaperScissor}
              alt="js-amazone-practice"
              className="w-[90%] border-2 border-black"
            />
          </div>
          <div className="mt-5">
            <div className="flex flex-col lg:flex-row lg:gap-[60%] items-center">
              <p className="text-xl mb-5 font-bold">Descriptions</p>
              <a
                href="https://tochratana.github.io/Game-project/Rock-papper-scisson/index.html"
                className="flex items-center gap-2 text-blue-600"
                target="_black"
              >
                <i class="fa-solid fa-arrow-up-right-from-square"></i>
                <p className="hover:underline hover:underline-offset-2">
                  Live Preview
                </p>
              </a>
            </div>
            <hr />
            <p className="my-2">
              Rock paper scissor is a small project that I create it to learn
              more about javascript and now I share it for you to learn. It's
              the practice wiht condition, function in javascript.Rock, Paper,
              Scissors is a simple hand game usually played between two people.
              It’s often used as a decision-making tool or as a quick game to
              settle a dispute. The game has three basic elements: Rock, Paper,
              and Scissors. Each player simultaneously forms one of these three
              shapes with their hand, and the winner is determined by a set of
              rules.
            </p>
            <p className="my-5">Rule</p>
            <ul className="list-disc pl-5 space-y-2 ml-2">
              <li>Rock crushes Scissors — Rock wins.</li>
              <li>Scissors cut Paper — Scissors win.</li>
              <li>Paper covers Rock — Paper wins.</li>
              <p>If both players choose the same shape, the result is a tie.</p>
            </ul>
            <p className="my-5">How to Play</p>
            <ul className="list-disc pl-5 space-y-2 ml-2">
              <li>
                Players count to three, either out loud or in sync, and then
                simultaneously choose one of the three shapes (rock, paper, or
                scissors).
              </li>
              <li>
                After showing their shapes, the outcome is decided based on the
                rules mentioned above.
              </li>
              <li>
                The game can be played in one round, or best of three, five,
                etc., depending on how players want to decide a winner.
              </li>
            </ul>
            <p className="my-5">How it work ?</p>
            <div className="ml-5">
              <p className="mb-2">
                1. Choices: The game has three choices — Rock, Paper, and
                Scissors.
              </p>
              <p className="mb-2">
                2. Computer’s Choice: A random choice is made using
                Math.random().
              </p>
              <p className="mb-2">
                3. Determine the Winner: Based on the player's and computer’s
                choices, the winner is determined according to the rules.
              </p>
              <p className="mb-2">
                4. User Input: Prompts the player for a choice and alerts the
                results.
              </p>
              <p className="mb-2">
                This simple game provides a great exercise to understand
                conditional logic and randomness in programming! Would you like
                more details or a web-based version with HTML/CSS?
              </p>
            </div>
          </div>
        </div>
        {/* left side */}
        <div className="w-[300px] sm:w-[400px] border-2 border-text_primary rounded-md h-[350px]">
          <div className="flex justify-between p-5">
            <p>Free download</p>
            <div className="flex items-center gap-2">
              <p>License</p>
              <i class="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <hr />
          <a
            className="text-white mt-5 flex items-center gap-5 w-[80%] h-14 m-auto rounded-lg justify-center bg-gradient-to-l from-[#8336ad] via-[#4a409a] to-[#142898]"
            href="../../../document/project-practice/rock-papper-scisson.zip"
            download="rock-paper-scissor.zip"
          >
            <p>Download</p>
            <i class="fa-solid fa-cloud-arrow-down"></i>
          </a>
          <div className="my-5">
            <div className=" flex items-center gap-5 ml-5">
              <i class="fa-solid fa-check text-[#8336ad]"></i>
              <p>Open source</p>
            </div>
            <div className=" flex items-center gap-5 ml-5">
              <i class="fa-solid fa-check text-[#8336ad]"></i>
              <p>Practice in real project</p>
            </div>
            <div className=" flex items-center gap-5 ml-5">
              <i class="fa-solid fa-check text-[#8336ad]"></i>
              <p>Life time update</p>
            </div>
          </div>
          <hr />
          <div className="flex gap-3 items-center mt-5 p-5">
            <i class="fa-solid fa-cloud-arrow-down"></i>
            <p>1</p>
            <p>Downloads</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rock_papper_scisson;
