import { MetaTags } from '@redwoodjs/web'
import PostsCell from 'src/components/PostsCell/PostsCell'

const BlogPage = () => {
  return (
    <>
      <MetaTags>
        <title>Blog</title>
      </MetaTags>
      <section className="flex w-full max-w-screen-sm flex-col gap-3 p-4 sm:w-2/3 md:w-1/2">
        <figure className="bg-slate-100 p-8 dark:bg-black">
          <img
            className="mx-auto h-24 w-24 rounded-full"
            src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250"
            alt=""
          />
          <div className="space-y-4 pt-6">
            <blockquote>
              <p className="text-sm font-normal sm:text-base sm:font-medium md:text-lg lg:text-xl 2xl:text-2xl">
                “Tailwind CSS is the only framework that I've seen scale on
                large teams. It’s easy to customize, adapts to any design, and
                the build size is tiny.”
              </p>
            </blockquote>
            <figcaption className="font-medium">
              <div className="text-sky-500 dark:text-sky-400">Sarah Dayan</div>
              <div cla>Staff Engineer, Algolia</div>
            </figcaption>
          </div>
        </figure>
      </section>
      <section className="w-full">
        <div className="container my-12 mx-auto px-4 md:px-12 ">
          <h1 className="py-3 text-center text-2xl underline">Projects</h1>
          <div className="mx-8 grid gap-2 md:gap-4 sm:-mx-2 justify-center sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 ">
            <PostsCell />
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogPage
