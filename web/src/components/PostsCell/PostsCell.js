import BlogPost from '../BlogPost/BlogPost'

export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      content
      author {
        name
      }
      createdAt
      updatedAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }) => {
  return (
    <>
      {posts.map((item) => {
        return <BlogPost key={item.id} post={item} />
      })}
    </>
  )
}
