const timeTag = (datetime) => {
  const date = new Date(datetime)
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {date.getFullYear()}/{date.getMonth()}/{date.getDate()}
      </time>
    )
  )
}
const BlogPost = ({ post }) => {
  return (
    <div className="my-1 px-3">
      <article className="max-w-sm overflow-hidden rounded-lg border border-white bg-black text-white shadow-sm">
        <a href="/">
          <img
            alt="Placeholder"
            className="block h-auto w-full"
            src="https://picsum.photos/600/400/?random"
          />
        </a>

        <header className="flex items-center justify-between p-2 leading-tight md:p-4">
          <h1 className="text-base">
            <a className="no-underline hover:underline text-sm" href="/">
              {post.title}
            </a>
          </h1>
          <p className="text-sm">{timeTag(post.createdAt)}</p>
        </header>

        <footer className="flex items-center justify-between p-2 leading-none md:p-4">
          <a
            className="flex items-center no-underline hover:underline"
            href="/"
          >
            <img
              alt="Placeholder"
              className="block rounded-full"
              src="https://picsum.photos/32/32/?random"
            />
            <p className="ml-2 text-sm">{post.author.name}</p>
          </a>
          <a className="hover:text-red-dark text-white no-underline" href="/">
            <span className="hidden">Like</span>
            <i className="fa fa-heart"></i>
          </a>
        </footer>
      </article>
    </div>
  )
}

export default BlogPost
