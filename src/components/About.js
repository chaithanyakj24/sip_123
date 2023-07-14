const About = () => {
    return ( 
        <> 
    <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    ABOUT US
                </button>
            </h2>
            <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    "Welcome to Dreams, your gateway to a world of extraordinary travel experiences. At Dreams, we believe that every journey starts with a dream, and we are here to turn your travel dreams into reality.
                    As a premier travel agency, we are passionate about curating personalized itineraries that cater to your unique preferences and desires. Whether you envision basking in the sun on pristine beaches, exploring vibrant cities bursting with culture, embarking on thrilling adventures in breathtaking landscapes, or indulging in luxury escapes, our dedicated team of travel experts is here to craft a tailor-made itinerary that surpasses your expectations
                    At Dreams, we understand that travel is not just about reaching a destination; it's about immersing yourself in new cultures, creating lifelong memories, and expanding your horizons. Our experienced consultants will work closely with you, taking the time to understand your interests, budget, and travel goals to design a seamless and unforgettable journey that perfectly captures your dreams.
                    With a vast network of trusted partners around the globe, we have access to exclusive deals, premier accommodations, and unique experiences that will transform your travel experience from ordinary to extraordinary. Whether you're seeking a romantic getaway, a family vacation, a solo adventure, or a group excursion, we have the resources and expertise to curate the perfect trip for you.         
                    At Dreams, your safety and satisfaction are paramount. We continuously monitor travel advisories, stay updated on the latest industry standards, and collaborate with reputable airlines, hotels, and tour operators to ensure your journey is secure, comfortable, and worry-free. Our dedicated support team is available 24/7 to address any concerns or assist you in any way possible, so you can relax and enjoy your dream vacation to the fullest.                    
                    We believe that travel has the power to awaken your senses, ignite your imagination, and transform your life. Let Dreams be your guide as you embark on a remarkable journey of discovery and wonder. Contact us today, and together, let's turn your travel dreams into cherished memories that will last a lifetime."   
                    Feel free to make any further adjustments to fit your agency's specific brand and vision.
                     </div>
            </div>
        </div>

        <div class="accordion accordion-flush" id="accordionFlushExample2">
            <div class="accordion-item">
                <h2 class="accordion-header" id="flush-headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        CONTACT US
                    </button>
                </h2>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample2">
                    <div class="accordion-body">
                       
                        <p class="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not
                            hesitate
                            to contact us directly. Our team will come back to you within
                            a matter of hours to help you.</p>

                        <div class="row">

                           
                            <div class="col-md-6 mb-md-0 mb-5">
                                <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                                   
                                    <div class="row">

                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="name" name="name" class="form-control"></input>
                                                <label for="name" class="">Your name</label>
                                            </div>
                                        </div>
                                       
                                        <div class="col-md-6">
                                            <div class="md-form mb-0">
                                                <input type="text" id="email" name="email" class="form-control"></input>
                                                <label for="email" class="">Your email</label>
                                            </div>
                                        </div>
                                       

                                    </div>
                                   
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="md-form mb-0">
                                                <input type="text" id="subject" name="subject" class="form-control"></input>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="row">

                                       
                                        <div class="col-md-12">

                                            <div class="md-form">
                                              <textarea type="text" id="message" name="message" rows="2"
                                              class="form-control md-textarea"></textarea>
                                          <label for="message">Your message</label>
                                      </div>

                                  </div>
                              </div>
                             

                          </form>

                          <div class="text-center text-md-left">
                              <a class="btn btn-primary"
                                  onclick="document.getElementById('contact-form').submit();">Send</a>
                          </div>
                          <div class="status"></div>
                      </div>
            

                  </div>

              </div>
          </div>
      </div>
  </div>

  <div class="accordion accordion-flush" id="accordionFlushExample3">
      <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false"
                  aria-controls="flush-collapseThree">
                  ADDRESS
              </button>
          </h2>
          <div id="flush-collapseThree" class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample3">
              <div class="accordion-body">
                
                  <div class="col-md-6 text-center">
                      <iframe
                          src="https://www.google.com/maps/place/SSD+Tyre+Puncture+Works/@12.86658,74.925378,16z/data=!4m6!3m5!1s0x3ba359b714f25723:0x28b594fd3c90771e!8m2!3d12.8692056!4d74.9318377!16s%2Fg%2F11fk13v24b?hl=en&entry=ttu"
                          width="600" height="300px" style="border:0;" allowfullscreen="" loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                 
              </div>
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
  
  export default About;