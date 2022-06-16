// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import PostsLayout from 'src/layouts/PostsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import MainLayout from 'src/layouts/MainLayout/MainLayout'
const Routes = () => {
  return (
    <Router>
      <Set wrap={PostsLayout}>
        <Route path="/posts/new" page={PostNewPostPage} name="newPost" />
        <Route path="/posts/{id:Int}/edit" page={PostEditPostPage} name="editPost" />
        <Route path="/posts/{id:Int}" page={PostPostPage} name="post" />
        <Route path="/posts" page={PostPostsPage} name="posts" />
      </Set>
      <Set wrap={UsersLayout}>
        <Route path="/admin/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
        <Route path="/admin/users/new" page={UserNewUserPage} name="newUser" />
        <Route path="/admin/users/{id:Int}" page={UserUserPage} name="user" />
        <Route path="/admin/users" page={UserUsersPage} name="users" />
      </Set>
      <Set wrap={MainLayout}>
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />

        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/" page={HomePage} name="home" />
        <Route notfound page={NotFoundPage} />
        <Set private unauthenticated="home">
          <Route path="/blog" page={BlogPage} name="blog" />
        </Set>
      </Set>
    </Router>
  )
}

export default Routes
