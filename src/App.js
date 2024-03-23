import './App.css';

import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

// hooks
import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

// context
import { AuthProvider } from './context/AuthContext';

//pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Materials from './pages/Materials/Materials';
import Newsletter from './pages/Newsletter/Newsletter';
import Contact from './pages/Contact/Contact';
import Associates from './pages/Associates/Associates';
import Associate from './pages/Associate/Associate';
import Login from './pages/Admin/Login/Login';
import AdminNavbar from './components/AdminNavbar';
import HomeAdm from './pages/Admin/HomeAdm/HomeAdm';
import Dashboard from './pages/Admin/Dashboard/Dashboard';
import CreatePost from './pages/Admin/CreatePost/CreatePost';
import CreateNewsletter from './pages/Admin/CreateNewsletter/CreateNewsletter';
import CreateMaterials from './pages/Admin/CreateMaterials/CreateMaterials';
import Register from './pages/Admin/Register/Register';
import MaterialsHome from './pages/MaterialsHome/MaterialsHome';
import NewsletterHome from './pages/NewsletterHome/NewsletterHome';
import Users from './pages/Admin/Users/Users';
import EditUserPage from './components/Admin/EditUserPage';
import ProfileAdmin from './pages/Admin/ProfileAdmin/ProfileAdmin';
import NewsletterPage from './pages/NewsletterPage/NewsletterPage';
import Category from './pages/Category/Category';
import Profile from './pages/Profile/Profile';
import Indicate from './pages/Indicate/Indicate';
import Form from './pages/Form/Form';
import Restore from './pages/Restore/Restore';
import SideBar from './pages/Profile/SideBar/SideBar';
import Business from './pages/Business/Business';
import Partners from './pages/Partners/Partners';
import Billing from './pages/Billling/Billing';

function App() {

  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()

  const loadingUser = user === undefined

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    });
  }, [auth]);

  if(loadingUser) {
    return <p>Carregando ...</p>
  }
  
  return (
    <div className="App">
      <AuthProvider value={{user}} >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeLayout />} />
        <Route path='/about' element={<AboutLayout />} />
        <Route path='/materials' element={<MaterialsLayout />} />
        <Route path='/newsletter' element={<NewsletterLayout />} />
        <Route path='/newsletter/post/:id' element={<NewsletterPageLayout />} />
        <Route path='/contact' element={<ContactLayout />} />
        <Route path='/associates' element={<AssociatesLayout />} />
        <Route path='/associate' element={<AssociateLayout />} />
        <Route path='/formassociate' element={<FormLayout />} />
        <Route path='/indicate' element={<IndicateLayout />} />
        <Route path='/newsletter/all' element={<AllCategoriesPageLayout />} />
        <Route path='/newsletter/:category' element={<NewsletterLayout />} />
        <Route path='/materialshome' element={<MaterialsHomeLayout /> } />
        <Route path='/newsletterhome' element={<NewsletterHomeLayout />} />
        <Route path='/register' element={<Register />} />
        <Route path='/restore' element={<RestoreLayout />} />
        <Route path='/profile/home' element={<HomeProfileLayout />} />
        <Route path='/profile/business' element={<BusinessProfileLayout />} />
        <Route path='/profile/partners' element={<PartnersProfileLayout />} />
        <Route path='/profile/billing' element={<BillingProfileLayout />} />
    
        <Route path="/admin" element={!user ? <Login /> : <Navigate to="/admin/index" />} />
        <Route path='/admin/index' element={user ? <HomeAdmLayout /> : <Navigate to="/admin/"/>} />
        <Route path='/admin/dashboard' element={user ? <DashboardLayout /> : <Navigate to="/admin/"/>} />
        <Route path='/admin/createpost' element={user ? <CreatePostLayout /> : <Navigate to="/admin/"/>} />
        <Route path='/admin/createpost/creatematerials' element={user ? <CreateMaterialsLayout /> : <Navigate to="/admin/"/>} />
        <Route path='/admin/createpost/createnewsletter' element={user ? <CreateNewsletterLayout /> : <Navigate to="/admin/"/>} />
        <Route path='/admin/users' element={user ? <UsersLayout /> : <Navigate to="/admin/"/>} />
        <Route path='/admin/users/edit/:userId' element={user ? <EditUserPageLayout /> : <Navigate to="/admin/"/>} />
        <Route path='/admin/profile/' element={user ? <ProfileAdminLayout /> : <Navigate to="/admin/"/>} />

        UsersLayout
      </Routes>
    </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">
        {children}
      </div>
      <Footer />
    </>
  );
}

function HomeLayout() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}

function AboutLayout() {
  return (
    <Layout>
      <About />
    </Layout>
  );
}

function MaterialsLayout() {
  return (
    <Layout>
      <Materials />
    </Layout>
  );
}

function NewsletterLayout() {
  return (
    <Layout>
      <Newsletter />
    </Layout>
  );
}

function NewsletterPageLayout() {
  return (
    <Layout>
      <NewsletterPage />
    </Layout>
  );
}

function ContactLayout() {
  return (
    <Layout>
      <Contact />
    </Layout>
  );
}

function AssociatesLayout() {
  return (
    <Layout>
      <Associates />
    </Layout>
  );
}

function IndicateLayout() {
  return (
    <Layout>
      <Indicate />
    </Layout>
  );
}

function AssociateLayout() {
  return (
    <Layout>
      <Associate />
    </Layout>
  );
}

function FormLayout() {
  return (
    <Layout>
      <Form />
    </Layout>
  );
}

function MaterialsHomeLayout() {
  return (
    <Layout>
      <MaterialsHome />
    </Layout>
  );
}

function NewsletterHomeLayout() {
  return (
    <Layout>
      <NewsletterHome />
    </Layout>
  );
}

function CategoryLayout() {
  return (
    <Layout>
      <Category />
    </Layout>
  );
}

function AllCategoriesPageLayout() {
  return (
    <Layout>
      <Category />
    </Layout>
  );
}

function RestoreLayout() {
  return (
    <Layout>
      <Restore />
    </Layout>
  );
}

function ProfileLayout({ children }) {
  return (
    <>
     <Navbar />
    <div className='section'>
        <div className='header'>
          <div className='container'>
            <div className='banner'>
              <h1>Perfil de usuário</h1>
              <p>Acesse ou altere as suas informações de cadastro na Amicro</p>
            </div>
          </div>
        </div>
        </div>
     
        <div className="profile">
          <div className="profileSeparator">
            <div className='sidebar'>
              <SideBar />
            </div>
            <div className='content'>
              {children}
            </div>
          </div>
        </div>
      <Footer />
    </>
  );
}

function HomeProfileLayout(){
  return (
    <ProfileLayout>
      <Profile />
    </ProfileLayout>
  )
}

function BusinessProfileLayout(){
  return (
    <ProfileLayout>
      <Business />
    </ProfileLayout>
  )
}

function PartnersProfileLayout(){
  return (
    <ProfileLayout>
      <Partners />
    </ProfileLayout>
  )
}

function BillingProfileLayout(){
  return (
    <ProfileLayout>
      <Billing />
    </ProfileLayout>
  )
}

function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <div className="admin-container">
        {children}
      </div>
    </>
  );
}

function HomeAdmLayout() {
  return(
    <>
    <AdminLayout>
      <HomeAdm />
    </AdminLayout>
    </>
  )
}

function DashboardLayout() {
  return(
    <>
    <AdminLayout>
      <Dashboard />
    </AdminLayout>
    </>
  )
}

function CreatePostLayout() {
  return(
    <>
    <AdminLayout>
      <CreatePost />
    </AdminLayout>
    </>
  )
}

function CreateNewsletterLayout() {
  return(
    <>
    <AdminLayout>
      <CreateNewsletter />
    </AdminLayout>
    </>
  )
}

function CreateMaterialsLayout() {
  return(
    <>
    <AdminLayout>
      <CreateMaterials />
    </AdminLayout>
    </>
  )
}

function UsersLayout() {
  return(
    <>
    <AdminLayout>
      <Users />
    </AdminLayout>
    </>
  )
}

function EditUserPageLayout() {
  return(
    <>
    <AdminLayout>
      <EditUserPage />
    </AdminLayout>
    </>
  )
}

function ProfileAdminLayout() {
  return(
    <>
    <AdminLayout>
      <ProfileAdmin />
    </AdminLayout>
    </>
  )
}

export default App;
