import logo from './logo.svg';
import './App.css';
import Header from './header';
import Footer from './footer';

function App() {

  return (
    <>

      <Header />
      <div>
        <img src='https://falconpumps.in/assets/images/5star.jpg' width="100%" height="466px" />
      </div>
      <br />
      <div className='flex justify-center flex-wrap gap-10'>

        <div className='demo3'>
          <div className='bg-red-400'>
            <img src='https://falconpumps.in/assets/images/agriculture.png' width="100px" height="100px" />
          </div>
        </div>


        <div className='demo3'>
          <div className='bg-red-400'>
            <img src='https://falconpumps.in/assets/images/solar.png' width="100px" height="100px" />
          </div>
        </div>


        <div className='demo3'>
          <div className='bg-red-400'>
            <img src='https://falconpumps.in/assets/images/residence.png' width="100px" height="100px" />
          </div>
        </div>


        <div className='demo3'>
          <div className='bg-red-400'>
            <img src='https://falconpumps.in/assets/images/industry.png' width="100px" height="100px" />
          </div>
        </div>



      </div>
      <br />

      <div>
        <div id="demo" class="carousel slide" data-ride="carousel">

          <ul class="carousel-indicators">
            <li data-target="#demo" data-slide-to="0" class="active"></li>
            <li data-target="#demo" data-slide-to="1"></li>
            <li data-target="#demo" data-slide-to="2"></li>
          </ul>

          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="https://www.crigroups.com/wp-content/themes/cri-groups/images/Commercial-banner.jpg" alt="1" width="100%" height="500" />
            </div>
            <div class="carousel-item">
              <img src="https://www.crigroups.com/wp-content/uploads/2022/08/Agri-Banner-1.jpg" alt="2" width="100%" height="500" />
            </div>
            <div class="carousel-item">
              <img src="https://www.crigroups.com/wp-content/uploads/2022/08/Residential-Banner1.jpg" alt="3 York" width="100%" height="500" />
            </div>
          </div>


          <a class="carousel-control-prev" href="#demo" data-slide="prev">
            <span class="carousel-control-prev-icon"></span>
          </a>
          <a class="carousel-control-next" href="#demo" data-slide="next">
            <span class="carousel-control-next-icon"></span>
          </a>
        </div>
      </div>

      <Footer />





    </>
  );
}

export default App;
