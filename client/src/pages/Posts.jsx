import React from "react";
import posts from "../data/posts";
import Subscribe from "../components/Subscribe";

const Posts = () => {

  // Sort by latest date first
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="mt-6 px-24 max-sm:px-5">

      {/* Page Title */}
      <div className="mb-20">
        <h1 className="text-5xl font-serif text-gray-900">
          posts.
        </h1>
        <p className="mt-4 text-2xl font-serif text-gray-500">
          reflections, achievements, and milestones.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l border-slate-300 ml-4">

        {sortedPosts.map((post) => (
          <article key={post.id} className="relative pl-10 mb-24">

            {/* Dot */}
            <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-slate-800"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

              {/* LEFT */}
              <div className="md:col-span-2">
                <div className="text-sm text-gray-400">
                  {post.date} · {post.readTime}
                </div>

                <h2 className="mt-4 text-3xl font-serif text-gray-900 leading-tight">
                  {post.title}
                </h2>

                <p className="mt-8 text-l text-gray-700 leading-7 whitespace-pre-line">
                  {post.content}
                </p>
              </div>

              {/* RIGHT IMAGE */}
              {post.image && (
                <div className="flex justify-center md:justify-end">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="rounded-lg max-h-[300px] object-cover shadow-sm"
                  />
                </div>
              )}

            </div>
          </article>
        ))}

      </div>

      <Subscribe />
    </section>
  );
};

export default Posts;
