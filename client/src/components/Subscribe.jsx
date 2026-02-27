import React from "react";

const Subscribe = () => {
  return (
    <section className="mt-20 px-24 max-sm:px-5">
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-slate-200 px-8 py-10 text-center">
        
        <h3 className="text-2xl font-serif text-gray-900">
          Get My Latest Posts in Your Inbox
        </h3>

        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          I occasionally write about projects, research, cloud computing,
          and things I learn along the way. No spam — unsubscribe anytime.
        </p>

        <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-72 h-11 px-4 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-400 transition"
          />

          <button
            type="submit"
            className="h-11 px-6 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800 transition"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-4 text-xs text-gray-400">
          Backend integration coming soon.
        </p>
      </div>

    </section>
  );
};

export default Subscribe;
