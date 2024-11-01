import React from "react";
import { Link } from "react-router-dom";

const GeminiChatBot = () => {
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
        <p className="">Gemini Clone Using API</p>
      </div>
      <div className="flex px-[12%] py-[2%] dark:text-text_primary gap-10 flex-col xl:flex-row">
        {/* right side */}
        <div className="sm:w-[600px] lg:w-[900px] xg:w-[1100px]">
          <div>
            <h1 className="text-[30px] font-bold mb-5">Gemini Clone</h1>
            <div className="flex items-center gap-2 mb-5">
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-solid fa-star text-yellow-400"></i>
              <i className="fa-regular fa-star"></i>
              <i className="fa-regular fa-star"></i>
            </div>
            <img
              src="../../../public/image/exercise/geminiClone.png"
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
              Here's a breakdown of the concept for building a chatbot using
              Google's APIs:
            </p>
            <p className="my-5">1. Choose a Google API</p>
            <ul className="list-disc pl-5 space-y-3 ml-2">
              <li className="leading-8">
                Define the bot's purpose: What tasks should it be able to
                perform? What kind of information should it provide?
              </li>
              <li className="leading-8">
                Create conversational flows: Map out the different paths a
                conversation can take, including possible user inputs and the
                bot's responses.
              </li>
              <li className="leading-8">
                Identify intents and entities: Intents represent the user's
                goal, while entities are specific pieces of information within
                the user's query.
              </li>
            </ul>

            <p className="my-5">2. Design the Chatbot's Functionality</p>
            <ul className="list-disc pl-5 space-y-3 ml-2">
              <li className="leading-8">
                Dialogflow: This is a great option for building conversational
                chatbots that can understand and respond to natural language. It
                handles intent recognition, entity extraction, and fulfillment.
              </li>
              <li className="leading-8">
                Cloud Natural Language API: This API can be used for tasks like
                sentiment analysis, entity recognition, and text classification.
                It's useful for analyzing user input and tailoring responses.
              </li>
              <li className="leading-8">
                Cloud Text-to-Speech API: This API allows you to convert text
                into natural-sounding speech, which can be used to generate
                audio responses for your chatbot.
              </li>
              <li className="leading-8">
                Cloud Speech-to-Text API: This API can transcribe audio input
                into text, enabling your chatbot to understand spoken commands
                and questions.
              </li>
            </ul>
            <p className="my-5">3. Develop the Chatbot:</p>
            <ul className="list-disc pl-5 space-y-3 ml-2">
              <li className="leading-8">
                Set up a Google Cloud project: Create a project and enable the
                necessary APIs
              </li>
              <li className="leading-8">
                Create an agent in Dialogflow: This is where you'll define
                intents, entities, and responses.
              </li>
              <li className="leading-8">
                Train the agent: Provide training data (examples of user queries
                and desired responses) to improve the bot's accuracy.
              </li>
              <li className="leading-8">
                Integrate with a platform: Choose a platform like Google Chat,
                Slack, or a website to deploy your chatbot.
              </li>
              <li className="leading-8">
                Write code to handle interactions: Use the chosen API to process
                user input, generate responses, and send them to the user.
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
            href="../../../document/project-practice/AI.zip"
            download="gemini.zip"
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
            <p>3</p>
            <p>Downloads</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GeminiChatBot;
