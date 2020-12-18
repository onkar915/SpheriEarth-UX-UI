
import './App.css';
import Home from './Home';
import Nav from './Nav';
import Footer from './Footer'
import About from './About'
import Product from './Product'
import Videos from './Videos'
import Blog from './Blog'
import Contact from './Contact'
import ScrollBar from './ScrollBar'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import BreadCrumbs from './BreadCrumbs';
import ScrollDown from './ScrollDown';
import BlogDetail from './BlogDetail';
import Icons from './Icons';



function App() {
  return (
     <Router>
    <div className="app">
     
     <Nav/>
     <Icons/>
    
    
     <ScrollBar/>

<Switch>
  <Route path="/Contact">
     <BreadCrumbs/>

     <Contact/>
       <ScrollDown/>
     </Route>
   <Route path="/Blog">
       <BreadCrumbs/>
     <Blog/>
       <ScrollDown/>
  
     </Route>

      <Route path="/BlogDetail">
        <BreadCrumbs/>
        <BlogDetail/>
          <ScrollDown/>
         
      </Route>
   <Route path="/Videos">
      <BreadCrumbs/>
        
     <Videos/>
      <ScrollDown/>
     </Route>
   <Route path="/About">
      <BreadCrumbs/>
     <About/>
       <ScrollDown/>
    
     </Route>
     <Route path="/Product">
        <BreadCrumbs/>
     <Product/>
       <ScrollDown/>
    
     </Route>
  <Route path="/">
     <Home/>
     <ScrollDown/>
     </Route>

   </Switch>
     <Footer/>
    
    </div>
     </Router>
  );
}

export default App;
