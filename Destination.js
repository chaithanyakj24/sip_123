const Destination = () => {
    return ( 
        <>
         
        <div class="container course pb-5 pt-5">
            <h2 class="h1-responsive font-weight-bold text-center my-4">DESTINATIONS</h2>
           
            <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to
                contact us directly. We will come back to you within a matter of hours to help you.</p>
            <div class="row">
                <div class="col-md-4">
                    <div class="card box">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?b=1&s=170667a&w=0&k=20&c=Ma8WYe9NqMN9UiCYTAUby4lsZoaPjV5IqFWz0ZB7Lrs="
                                class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">GOA</h5>
                            <p class="card-text">"Goa: Where Sun, Sand, and Serenity Collide"</p>
                            <a href="#!" class="btn btn-primary" onclick="toggleDescription(1)">Read More</a>
                            <p id="description1" class="card-description d-none">3 day 2 nights and 4000 per head</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card box">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://cdn.pixabay.com/photo/2020/04/28/12/29/manali-5104279_640.jpg"
                                class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">MANALI</h5>
                            <p class="card-text">"Manali: Majestic Mountains and Tranquil Valleys"</p>
                            <a href="#!" class="btn btn-primary" onclick="toggleDescription(1)">Read More</a>
                            <p id="description1" class="card-description d-none">3 day 2 nights and 15000 per head</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card box">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://media.istockphoto.com/id/479741546/photo/blue-lake.jpg?b=1&s=170667a&w=0&k=20&c=rFpCe8SVM3OVx0SklIMJLEEYzy5MAv1R6q63Qtbqkdg=" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">LADHAK</h5>
                            <p class="card-text">"Ladakh: Land of High Passes and Enchanting Landscapes"</p>
                            <a href="#!" class="btn btn-primary" onclick="toggleDescription(4)">Read More</a>
                            <p id="description1" class="card-description d-none">3 day 2 nights and 10000 per head</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card box">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://media.istockphoto.com/id/1493412800/photo/the-kedarnath-temple-of-uttarakhand-india-heaven-on-earth-har-har-mahadev.jpg?b=1&s=170667a&w=0&k=20&c=tbkLj5lamOsLC32lD8o6AXJu_rXEVD6mniZ012S7M40=" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">KEDARNATH</h5>
                            <p class="card-text">"Kedarnath: A Spiritual Pilgrimage amidst Himalayan Majesty"</p>
                            <a href="#!" class="btn btn-primary" onclick="toggleDescription(5)">Read More</a>
                            <p id="description5" class="card-description d-none">  day 2 nights and 10000 per head</p>
                        </div>
                    </div>
                </div>

                  <div class="col-md-4">
                    <div class="card box">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://cdn.pixabay.com/photo/2023/03/22/16/05/tajmahal-7869968_640.jpg"
                                class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">TAJ MAHAL</h5>
                            <p class="card-text">
                                "The Taj Mahal: A Timeless Testament to Love and Beauty" </p>
                            <a href="#!" class="btn btn-primary" onclick="toggleDescription(3)">Read More</a>
                            <p id="description5" class="card-description d-none">  day 2 nights and 10000 per head</p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card box">
                        <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                            <img src="https://cdn.pixabay.com/photo/2016/06/12/03/48/thailand-1451382_640.jpg" class="img-fluid" />
                            <a href="#!">
                                <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
                            </a>
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">ANDAMAN</h5>
                            <p class="card-text">"Andaman Islands: Pristine Paradise of Turquoise Waters and Untouched Beauty"</p>
                            <a href="#!" class="btn btn-primary" onclick="toggleDescription(6)">Read More</a>
                            <p id="description5" class="card-description d-none">  day 2 nights and 10000 per head</p>                        </div>
                    </div>
                </div>
            </div>
        </div>
       <div class="text-center py-4" style="background-color: rgba(0, 0, 0, 0.05);">
        © 2023 Copyright:
        <a class="text-reset fw-bold">Chaithanya</a>
    </div>

        </>
    );
  }
  
  export default Destination;