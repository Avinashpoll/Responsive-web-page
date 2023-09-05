
import './App.css';

function App() {

  return (

    <>

    
    <nav className="navbar navbar-inverse    navbar-expand-sm bg-dark navbar-dark" fixed-top   data-spy="scroll" data-target=".navbar" data-offset="50" container-fluid  >
    
    <a className="navbar-brand" href="#logo">
    <img src="https://d8it4huxumps7.cloudfront.net/images/partners/new_organisation_image-2HBIkiyJvt11361128957ueAApSDjO.png" alt="logo" />
     </a>
  
  <ul className="navbar-nav">
  
   <li className="nav-item" active>
      <a className="nav-link" href="#section1">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#section2">About us</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#section3">Contact us</a>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#section4" id="navbardrop" data-toggle="dropdown">
        Services
      </a>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#section41">Link 1</a>
        <a className="dropdown-item" href="#section42">Link 2</a>
      </div>
    </li>


    


 

  </ul>

  <ul className="nav navbar-nav navbar-right">

<li><a href="signup"><span className="glyphicon glyphicon-user" ></span> Sign Up</a></li>
<li><a href="signin"><span className="glyphicon glyphicon-log-in"></span> Login</a></li>
</ul>
  
</nav>
<br/>





<h2 className='content-center'> Dylog Group Of Companies</h2>
<div id="demo" className="carousel slide" data-ride="carousel">


  
  <ul className="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" className="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
    <li data-target="#demo" data-slide-to="2"></li>
  </ul>
  

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://images.idgesg.net/images/idge/imported/imageapi/2022/05/17/10/brain_mind_circuits_connections_artificial_intelligence_by_metamorworks_gettyimages-949321092_1200x800-100767997-large-100928072-large.jpg?auto=webp&quality=85,70" alt="Los Angeles" width="1100" height="500"/>
      <div class="carousel-caption">
        <h3>Dylog Supplies PVT LTD</h3>
        <p>We had such a great time in LA!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://cionews.co.in/wp-content/uploads/2022/06/AI-1.jpg" alt="Chicago" width="1100" height="500"/>
      <div class="carousel-caption">
        <h3>Dylog Global IT Services PVT LTD</h3>
        <p>We had such a great time in LA!</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.analyticsinsight.net/wp-content/uploads/2021/10/The-Scope-of-Artificial-intelligence-in-India.jpg" alt="New York" width="1100" height="500"/>
      <div class="carousel-caption">
        <h3>Dylog ITES,MP</h3>
        <p>We had such a great time in LA!</p>
      </div>
    </div>
  </div>
  
  
  <a className="carousel-control-prev" href="#demo" data-slide="prev">
    <span className="carousel-control-prev-icon"></span>
  </a>
  <a className="carousel-control-next" href="#demo" data-slide="next">
    <span className="carousel-control-next-icon"></span>
  </a>
</div>  

<div id="section1" className="container-fluid bg-success" >
  <h1>Home</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section2" className="container-fluid bg-warning" >
  <h1>About us</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section3" className="container-fluid bg-secondary" >
  <h1>Contact us</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section41" className="container-fluid bg-danger">
  <h1>Services</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>
<div id="section42" className="container-fluid bg-info" >
  <h1>Section 4 Submenu 2</h1>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
  <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
</div>





<div className="container">
  <form   className="form-horizontal" action="/action_page.php" >
    <div className="form-group">
      <label className="control-label col-sm-2" for="email"></label>
      <div class="col-sm-10">
        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
      </div>
    </div>
    <div className="form-group">
      <label className="control-label col-sm-2" for="pwd"></label>
      <div className="col-sm-10">          
        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pwd"/>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <div className="checkbox">
          <label><input type="checkbox" name="remember"/> Remember me</label>
        </div>
      </div>
    </div>
    <div className="form-group">        
      <div className="col-sm-offset-2 col-sm-10">
        <button onclick="myFunction()" className="btn btn-primary">Submit</button>
        <p id="demo"></p>


  


      </div>
    </div>
  </form>
</div>


 



<div className="jumbotron text-center">
  <h1>Company</h1> 
  <p>We specialize in blablabla</p> 
  <form className="form-inline">
    <div className="input-group">
      <input type="email" className="form-control" size="50" placeholder="Email Address" required/>
      <div class="input-group-btn">
        <button type="button" className="btn btn-danger">Subscribe</button>
      </div>
    </div>
  </form>
</div>


<div className="container-fluid">
  <div className="row">
    <div className="col-sm-8">
      <h2>About Company Page</h2>
      <h4>Lorem ipsum..</h4>      
      <p>Lorem ipsum..</p>
      <button className="btn btn-default btn-lg">Get in Touch</button>
    </div>
    <div class="col-sm-4">
      <span className="glyphicon glyphicon-signal logo"></span>
    </div>
  </div>
</div>

<div className="container-fluid bg-grey">
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-globe logo"></span>
    </div>
    <div className="col-sm-8">
      <h2>Our Values</h2>
      <h4><strong>MISSION:</strong> Our mission lorem ipsum..</h4>      
      <p><strong>VISION:</strong> Our vision Lorem ipsum..</p>
    </div>
  </div>
</div>


<div className="container-fluid text-center"/>
  <h2>SERVICES</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small"></span>
      <h4>POWER</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small"></span>
      <h4>LOVE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small"></span>
      <h4>JOB DONE</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>
  <br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"></span>
      <h4>GREEN</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"></span>
      <h4>CERTIFIED</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"></span>
      <h4>HARD WORK</h4>
      <p>Lorem ipsum dolor sit amet..</p>
    </div>
  </div>








<footer> 
<div class="jumbotron text-center">
  <p>Dylog Global IT Services Private Limited
  <address> 2nd Floor RGPV(Rajiv Gandhi Proudyogiki Vishwavidalaya ) Building , Gandhi Nagar Road ,Bhopal Madhya-Pradesh </address>
  </p>
</div></footer>





</>



  );
}

export default App;
