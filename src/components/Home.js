const Home = () => {
    return ( 
        <>
        <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy4CvSXHjIT_Ccs9tIqNLOB3DHOERuw5tWD9D-nh1tKw&s" alt="Logo" width="50" height="50" class="d-inline-block align-text-top"></img>
        <strong>DREAMS</strong>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About us</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Destination
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#" onclick="setBreadcrumb('goa')">Goa</a></li>
              <li><a class="dropdown-item" href="#" onclick="setBreadcrumb('manali')">Manali</a></li>
              <li><a class="dropdown-item" href="#" onclick="setBreadcrumb('ladhak')">Ladhak</a></li>
              <li><a class="dropdown-item" href="#" onclick="setBreadcrumb('kedarnath')">Kedarnath</a></li>
              <li><a class="dropdown-item" href="#" onclick="setBreadcrumb('tajmahal')">Tajmahal</a></li>
              <li><a class="dropdown-item" href="#" onclick="setBreadcrumb('andaman')">Andaman</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <nav aria-label="breadcrumb">
    <ol class="breadcrumb" id="breadcrumbList">
      <li class="breadcrumb-item active" aria-current="page">Home</li>
    </ol>
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="false">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://cdn.pixabay.com/photo/2019/06/01/22/41/river-4245261_640.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
              <h5>Enjoy</h5>
              <p>Enjoy your Life</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2016/01/13/01/36/bagan-1137015_640.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
                <h5>Explore</h5>
                <p>Explore until satisfactiov</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="https://cdn.pixabay.com/photo/2015/07/05/13/44/beach-832346_640.jpg" class="d-block w-100" alt="..."></img>
            <div class="carousel-caption d-none d-md-block">
                <h5>Nature</h5>
                <p>Hear to the nature</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <br></br>
      <br></br>
  </nav>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="https://media.istockphoto.com/id/479741546/photo/blue-lake.jpg?b=1&s=170667a&w=0&k=20&c=rFpCe8SVM3OVx0SklIMJLEEYzy5MAv1R6q63Qtbqkdg=" class="card-img-top" alt="Image 1"></img>
          <div class="card-body">
            <p class="card-text">Belive in us</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_640.jpg" class="card-img-top" alt="Image 2"></img>
          <div class="card-body">
            <p class="card-text">We are with you Exploration</p>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card" style="width: 18rem;">
          <img src="https://cdn.pixabay.com/photo/2018/03/12/20/07/maldives-3220702_640.jpg" class="card-img-top" alt="Image 3"></img>
          <div class="card-body">
            <p class="card-text"> Explore with us</p>
          </div>
        </div>
      </div>
    </div>
  </div>

   <footer class="text-center text-lg-start bg-primary py-3 text-white">

    <section class="">
        <div class="container text-center text-md-start mt-5">

            <div class="row mt-3">
   
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 class="text-uppercase fw-bold mb-4">
                        <i class="bi bi-gem me-3"></i>DREAMS
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">EXPLORING THE YOU</a>
                    </p>
                </div>
  
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
  
                    <h6 class="text-uppercase fw-bold mb-4">
                       DESTINATIONS
                    </h6>
                    <p>
                        <a href="#!" class="text-reset">SOUTH INDIA</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">NORTH INDIA</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">HIMALAYA</a>
                    </p>
                    <p>
                        <a href="#!" class="text-reset">ABROAD</a>
                    </p>
                    <p></p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
   
                    <h6 class="text-uppercase fw-bold mb-4">
                        Contact
                    </h6>
                    <p><i class="bi bi-location me-3"></i> Manglore, India</p>
                    <p>
                        <i class="bi bi-envelope me-3"></i>
                        chaithanyakj002@gmail.com
                    </p>
                    <p><i class="bi bi-phone me-3"></i> 9876543210</p>
                   
                </div>
            
            </div>
      
        </div>
    </section>
</footer>

             <div class="text-center py-4" style="background-color: rgba(0, 0, 0, 0.05);">
                © 2023 Copyright:
                <a class="text-reset fw-bold">Chaithanya</a>
            </div>

        </>
    );
  }
  
  export default Home;