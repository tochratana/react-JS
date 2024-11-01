import React from "react";
import { Link } from "react-router-dom";
import ticTacToe from "../../../public/image/exercise/tic-tac-toe.png";

const Tic_tac_toe = () => {
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
        <p className="">Tic Tac Toe</p>
      </div>
      <div className="flex px-[12%] py-[2%] dark:text-text_primary gap-10 flex-col xl:flex-row">
        {/* right side */}
        <div className="sm:w-[600px] lg:w-[900px] xg:w-[1100px]">
          <div>
            <h1 className="text-[30px] font-bold mb-5">Tic Tac Toe</h1>
            <div className="flex items-center gap-2 mb-5">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <img
              src={ticTacToe}
              alt="js-amazone-practice"
              className="w-[90%] border-2 border-black"
            />
          </div>
          <div className="mt-5">
            <div className="flex flex-col lg:flex-row lg:gap-[60%] items-center">
              <p className="text-xl mb-5 font-bold">Descriptions</p>
              <a
                href="/"
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
              Creating a Tic-Tac-Toe game using JavaScript is a great project to
              understand basic programming concepts like game logic, user
              interaction, and DOM manipulation. Here’s a breakdown of how you
              can create it and the structure:
            </p>
            <p className="mb-2">1. HTML setup</p>
            <p className="pl-5">
              You'll need a basic HTML structure to display the game board. This
              will consist of a 3x3 grid of cells (usually div elements or
              buttons), and perhaps a section to display messages, like whose
              turn it is or the result of the game.
            </p>
            <p className="mb-2">2. CSS for Styling (Optional)</p>
            <p className="pl-5">
              You can use CSS to style the cells, making it look visually
              appealing, and Tailwind CSS would work well for fast and modern
              styling.
            </p>
            <p className="mb-2">3. JavaScript Logic</p>
            <p>
              Here’s the core part! The JavaScript will manage the game logic.
              You will implement functions to:
            </p>
            <ul className="list-disc pl-5 space-y-2 ml-2">
              <li>Track the current player ('X' or 'O').</li>
              <li>
                Track the game board's state (e.g., an array of 9 elements).
              </li>
              <li>Check for a winning condition.</li>
              <li>Restart the game.</li>
            </ul>
            <p className="pl-5">
              You can use CSS to style the cells, making it look visually
              appealing, and Tailwind CSS would work well for fast and modern
              styling.
            </p>
            <p className="my-5">How it work ?</p>
            <p className="mb-2">
              1. HTML: Create a simple 3x3 grid with clickable cells.
            </p>
            <p className="mb-2">
              2. CSS: Adds styles for a pleasant visual experience.
            </p>
            <p className="mb-2">3. JavaScript:</p>
            <ul className="list-disc pl-5 space-y-2 ml-2">
              <li>
                Game state and logic: A variable gameState holds the state of
                each cell.
              </li>
              <li>
                Winning conditions: Defined in winningConditions as possible
                combinations to win.
              </li>
              <li>
                Event handling: Click events update the game state, check for
                wins, and switch turns.
              </li>
              <li>Restart: Clears the board and resets the game.</li>
            </ul>

            <p className="my-5">Key Key Takeaways</p>
            <ul className="list-disc pl-5 space-y-2 ml-2">
              <li>
                You can expand this basic structure with animations, scoring, or
                AI-based opponents. 5
              </li>
              <li>
                Using vanilla JavaScript is great for learning fundamentals, but
                libraries like React can make state management easier as your
                game logic becomes more complex.
              </li>
            </ul>
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
            className="mt-5 flex items-center gap-5 w-[80%] h-14 m-auto rounded-lg justify-center bg-gradient-to-l from-[#8336ad] via-[#4a409a] to-[#142898]"
            href="../../../document/project-practice/javascript-amazon-project.zip"
            download="javascript-amazone-project.zip"
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
            <p>6</p>
            <p>Downloads</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tic_tac_toe;
