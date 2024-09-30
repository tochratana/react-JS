import React from "react";

const Connect = () => {
  return (
    <div>
      <section className="text-text_primary">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-4xl text-white font-bold text-center">
            Connect me
          </h2>
          <p>
            If you want to know about something you can connect on the form or
            you a phone number DM to me and always happy to with you message
          </p>
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-lg">
                You can connect my on this or can find{" "}
                <a
                  href="https://maps.app.goo.gl/Bp7GNLY95KWCAArd9"
                  className="underline underline-offset-2"
                >
                  The location on google map
                </a>
              </p>

              <div className="mt-8">
                <a href="#" className="text-2xl font-bold text-pink-600">
                  {" "}
                  088 64 65 190{" "}
                </a>

                <address className="mt-2 not-italic">
                  street 371, home 41D, Phnom Penh
                </address>
              </div>
            </div>

            <div className="rounded-lg p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" for="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-bg_primaryOld"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" for="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-bg_primaryOld"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>
                  <div>
                    <label className="sr-only" for="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-bg_primaryOld"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" for="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm dark:bg-bg_primaryOld"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg hover:bg-black px-5 py-3 font-medium hover:text-white sm:w-auto border-2 duration-500 dark:border-gray-200 dark:bg-transparent text-black dark:text-white"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connect;
