const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}
const BlogPost = ({ post }) => {
  return (
    <article className="border p-4">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>{post.author.name}</p>
      <p>{timeTag(post.createdAt)}</p>
    </article>
  )
}

export default BlogPost
