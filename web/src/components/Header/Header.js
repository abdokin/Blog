import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
const Header = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <nav>
        <ul className="bg-black flex gap-3 p-5 text-base align-top">
          <li className="flex">
            <Link to={routes.home()}>Home</Link>
          </li>

          {isAuthenticated ? (
            <>
              <li className="flex ">
                <Link to={routes.about()}>About</Link>
              </li>
              <li className="flex-1 ">
                <Link to={routes.blog()}>Blog</Link>
              </li>
            </>
          ) : (
            <li className="flex-1 ">
              <Link to={routes.about()}>About</Link>
            </li>
          )}
          <li className="flex">
            {isAuthenticated ? (
              <div>
                <span className="px-3">Welcome {currentUser.name}</span>
                <button
                  type="button"
                  onClick={logOut}
                  className="rounded-sm border border-fuchsia-100 text-red-400 p-2 bg-white hover:bg-red-100"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex gap-1">
                <div className="rounded-sm border border-fuchsia-100 text-red-400 p-2 bg-white hover:bg-red-100">
                  <Link to={routes.login()}>Login</Link>
                </div>
                <div className="rounded-sm border border-fuchsia-100 text-red-400 p-2 bg-white hover:bg-red-100">
                  <Link to={routes.signup()}>Sign up</Link>
                </div>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
