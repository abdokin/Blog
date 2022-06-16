import { MetaTags } from '@redwoodjs/web'
import PostsCell from 'src/components/PostsCell/PostsCell'

const BlogPage = () => {
  return (
    <div className="container">
      <MetaTags title="Blog" description="Blog page" />

      <h1 className="text-xl">All the posts</h1>
      <hr></hr>
      <div className="grid p-5 m-4">
      <PostsCell />
      </div>
    </div>
  )
}

export default BlogPage
