
/*
--react-router
a fully-featured client and server-side routing library for React

BrowserRouter : react application과 브라우저 url을 하나로 연동시키고, 하위 컴포넌트에서 라우터 기능을 사용할 수 있게 해준다
Link : url 변경
NavLink : 해당 url일 경우 className="active" 자동 적용

nested Route : /product
dynamic Route : /user
lazy load and Suspense Route : /about
  code split을 통해, 해당 페이지에 접속할때 내용을 다운받아, 최초 페이지 접속 시간을 줄일수 있다
  import 대신 React.lazy(() => import(path))를 사용하며, export default여야 적용이 가능하다
  해당 페이지 loading 동안 보여줄 내용을 Suspense fallback에 넣어줘야한다
authentication Route : /profile
*/
import React, { Suspense } from 'react'
import {Routes, Route, useLocation} from 'react-router-dom'
import HomeContent from './views/home/HomeContent'
import OrderContent from './views/order/OrderContent'
import ProductContent from './views/product/ProductContent'
import FeaturedContent from './views/product/FeaturedContent'
import NewContent from './views/product/NewContent'
import UserContent from './views/user/UserContent'
import DetailContent from './views/user/DetailContent'
import AdminContent from './views/user/AdminContent'
import Login from './views/profile/Login'
import ProfileContent from './views/profile/ProfileContent'
import AuthPrivateRoute from './views/profile/AuthPrivateRoute'
// import AboutContent from './views/about/AboutContent'
const LazyAboutContent = React.lazy(() => import('./views/about/AboutContent'))

const ROLE = {
  admin: 'admin',
  user: 'user',
}

export default () => {
    const location = useLocation()
    return(
        <Routes location={location}>
          <Route path="/" element={<HomeContent />} />
          <Route path="/about" element={<Suspense fallback="Loading..."><LazyAboutContent /></Suspense>} />
          <Route path="/order" element={<OrderContent />} />
          <Route path="/product" element={<ProductContent />}>
            <Route index element={<FeaturedContent />} />
            <Route path="featured" element={<FeaturedContent />} />
            <Route path="new" element={<NewContent />} />
          </Route>
          <Route path="/user" element={<UserContent />} />
          <Route path="/user/:id" element={<DetailContent />} />
          <Route path="/user/admin" element={<AdminContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<AuthPrivateRoute component={<h3>profile layout</h3>} roles={[ROLE.admin]}><ProfileContent /></AuthPrivateRoute>} />
          <Route path="*" element={<h2>Not Found ㅠㅅㅠ</h2>} />
        </Routes>
    )
}