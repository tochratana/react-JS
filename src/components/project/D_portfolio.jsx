import React from 'react'
import { Link } from 'react-router-dom'

const D_portfolio = () => {
  return (
	<>
		<div className="text-text_primary">
      <div>
        <Link
          to="/about/project"
          className="flex items-center gap-2 rounded-md p-10 w-[150px]"
        >
          <div className="w-5 h-5 border-2 border-bg_primaryOld bg-text_primary rounded-full flex justify-center items-center text-black">
            <i className="fa-solid fa-chevron-left"></i>
          </div>
          <p>Back</p>
        </Link>
      </div>
      <div className="w-[960px] m-auto">
        <h2 className="text-3xl w-[600px] text-black dark:text-white font-bold">
          Grate of the business website and make you to easy.
        </h2>
        <div className="flex gap-5 items-center my-3">
          <i class="fa-regular fa-calendar"></i>
          <p>Update : September 13, 2024</p>
          <a
            href="#"
            className="w-10 h-10 border-2 border-text_primary flex justify-center items-center rounded-full hover:dark:text-white hover:dark:border-white hover:border-black hover:text-black"
          >
            <i class="fa-brands fa-youtube"></i>
          </a>
          <a
            href="https://tochratana.github.io/Portfolio/"
            target="_blank"
            className="w-10 h-10 border-2 border-text_primary flex justify-center items-center rounded-full hover:dark:text-white hover:dark:border-white hover:border-black hover:text-black"
          >
            <i class="fa-solid fa-link"></i>
          </a>
          <a
            href="https://github.com/tochratana/Portfolio"
            target="_blank"
            className="w-10 h-10 border-2 border-text_primary flex justify-center items-center rounded-full hover:dark:text-white hover:dark:border-white hover:border-black hover:text-black"
          >
            <i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
      <div className="flex justify-center">
        <video src="/Video/video.mp4" controls></video>
      </div>
      <div className="w-[960px] m-auto">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iure
          ipsa doloremque dolorem beatae eius minima, quae dignissimos nihil
          tempore maxime assumenda quasi nisi voluptas fugiat dicta at? Error,
          iure! Architecto fuga id, laboriosam deserunt corporis asperiores
          provident ullam. Deleniti, delectus. Dicta earum tempora quos
          corrupti, at assumenda beatae laborum, sit eveniet esse itaque
          pariatur quia deserunt, iusto sed repellat.
        </p>
      </div>
    </div>
	</>
  )
}

export default D_portfolio