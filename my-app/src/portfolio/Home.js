import React from 'react'

function Home() {
  return (
    <div >
      <div className=''>
        <div className='imgs'>
        <h1 className="cd-headline clip is-full-width home">

          Rathna<br></br>
          Designer<br></br>
          Developer

        </h1>
        </div>
      </div>
      {/* <------------------ Section 2 about --------------------> */}
      <div className='' >
        <h1 style={{ textAlign: "center" }}>
          About me
        </h1>
        <p className="p-5 mb-5" style={{ color: "black", width: "100%", textAlign: "justify" }}>
          Hello! My name is Rathna A and I enjoy creating things that live on the internet.


          An experienced Full-Stack web developer with an enduring passion for continuous learning. Proficient in both leadership and teamwork,
          I am eagerly seeking opportunities to craft innovative solutions that enhance people's lives. I aspire to become an indispensable asset within an organization that nurtures my professional growth.
          <br></br><br></br>I'm a passionate Developer with strong administrative and communication skills, good attention to detail and the ability to write efficient code using MERN Stack.

          As I grow and flourish as a Developer, one thing which keeps me going is my inquisitiveness for discovering new things every day.
        </p>

      </div>

      {/* <---------------------section 3 Skill ------------------> */}
      <div>



        <section class="section skills" id="skills">
          <h2 class="section__title">Skills</h2>
          <ul class="skills__list">
            <li class="skills__list-item btn btn--plain">HTML</li>
            <li class="skills__list-item btn btn--plain">CSS</li>
            <li class="skills__list-item btn btn--plain">JavaScript</li>
            <li class="skills__list-item btn btn--plain">Python</li>
            <li class="skills__list-item btn btn--plain">MySQL</li>
            <li class="skills__list-item btn btn--plain">React.js</li>
            <li class="skills__list-item btn btn--plain">Github</li>
            <li class="skills__list-item btn btn--plain">Artifical Intelligence</li>

          </ul>
        </section>

      </div>
      {/* <------------------------------sectio 4 education --------------> */}
      <div>



        <section className="education mt-5" id="education">
          <div className="container">
            <div className="education__heading">
              <h2 class="section__heading text-center">Education</h2>
            </div>
            <div class="row edu__mainrow m-auto">
              <div class="col-12">
                <div class="row ins">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="ins__logo">
                      <img class="img-fluid" src="https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/education/nitj.png?raw=true" alt="Avinashilingam Deemed University,Coimbatore" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-12 ins__info">
                    <div>
                      <h3 class="ins__name">Avinashilingam Deemed University</h3>
                      <p class="ins__duration">2021 - 2023</p>
                      <h4 class="ins__edu">Master of Computer Applications</h4>
                      <h5 class="ins__deg">Post Graduate</h5>
                    </div>
                  </div>
                </div>
                <div class="row ins mt-3">
                  <div class="col-lg-4 col-md-4 col-sm-12 col-12">
                    <div class="ins__logo">
                      <img class="img-fluid" src="https://github.com/ssahibsingh/personalWebsite/blob/main/src/assets/education/msp.png?raw=true" alt="Sri Vijay Vidyalaya College of Arts and Science,Dharmapuri" />
                    </div>
                  </div>
                  <div class="col-lg-8 col-md-8 col-sm-12 col-12 ins__info">
                    <div>
                      <h3 class="ins__name">Sri Vijay Vidyalaya College of Arts and Science </h3>
                      <p class="ins__duration">2018 - 2021</p>
                      <h4 class="ins__edu"> Bachelor of Mathematics</h4>
                      <h5 class="ins__deg">Bachelor of Science</h5>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>



      {/* <-----------------section 5 projects -----------------> */}
      <div className='mt-5'>
        <h1 class="section__heading text-center">PROJECTS</h1>
        <div className='projects_grid'>
          <div class="project">

            <h3>Movie Tracker</h3>
            <p class="project__description">As users, we see a page that lets anyone look for the movies from
              the search bar by key words, and obtaining the actual or similar movies with their years,
              actors, rating, and description information by recommendation. In addition,
              they can search the nearby theaters from where they currently are located.</p>
            <ul class="project__stack">
              <li class="project__stack-item">localstorage</li>
              <li class="project__stack-item">Openweather API</li>
              <li class="project__stack-item">Google Map API</li>
              <li class="project__stack-item">Movie Database API</li>
            </ul>

          </div>
          <div class="project">

            <h3>Movie Tracker</h3>
            <p class="project__description">As users, we see a page that lets anyone look for the movies from
              the search bar by key words, and obtaining the actual or similar movies with their years,
              actors, rating, and description information by recommendation. In addition,
              they can search the nearby theaters from where they currently are located.</p>
            <ul class="project__stack">
              <li class="project__stack-item">localstorage</li>
              <li class="project__stack-item">Openweather API</li>
              <li class="project__stack-item">Google Map API</li>
              <li class="project__stack-item">Movie Database API</li>
            </ul>

          </div>

          <div class="project">

            <h3>Movie Tracker</h3>
            <p class="project__description">As users, we see a page that lets anyone look for the movies from
              the search bar by key words, and obtaining the actual or similar movies with their years,
              actors, rating, and description information by recommendation. In addition,
              they can search the nearby theaters from where they currently are located.</p>
            <ul class="project__stack">
              <li class="project__stack-item">localstorage</li>
              <li class="project__stack-item">Openweather API</li>
              <li class="project__stack-item">Google Map API</li>
              <li class="project__stack-item">Movie Database API</li>
            </ul>

          </div>
          <div class="project">

            <h3>Movie Tracker</h3>
            <p class="project__description">As users, we see a page that lets anyone look for the movies from
              the search bar by key words, and obtaining the actual or similar movies with their years,
              actors, rating, and description information by recommendation. In addition,
              they can search the nearby theaters from where they currently are located.</p>
            <ul class="project__stack">
              <li class="project__stack-item">localstorage</li>
              <li class="project__stack-item">Openweather API</li>
              <li class="project__stack-item">Google Map API</li>
              <li class="project__stack-item">Movie Database API</li>
            </ul>

          </div>
        </div>
      </div>

      {/* <--------------------------section 6 contact -------------------> */}

      <div id="contact">
          <div className="contact-content mt-5">
            <div className="text-grid ">
              <div className="text-grid-main">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12 col-sm-12">
                      <div className="main-title text-center wow fadeIn">
                        <h3>Contact Me</h3>
                        <div className="underline1"></div>
                        <div className="underline2"></div>
                        <p>
                          I’m always open to discussing product design work or
                          partnership opportunities.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-grid">
              <div className="contact-form-details wow fadeIn">
                <div className="container">
                  {/* <div className="row contact-row">
                    <div className="col-md-8 col-md-offset-2 col-sm-12 col-sm-offset-1 contact-col">
                      <h3>Write Your Message Here</h3>
                      <div className="contact-form">
                        <form
                          action="https://herokuapp.us6.list-manage.com/subscribe/post?u=870e1b447d1f93893227a9c52&amp;id=85d6c939a5"
                          method="post"
                          id="mc-embedded-subscribe-form contactForm"
                          name="mc-embedded-subscribe-form"
                          className="contact-form shake validate"
                          target="_blank" 
                          data-toggle="validator"
                          novalidate
                        >
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="text"
                                name="FLNAME"
                                id="mce-FLNAME"
                                className="required form-control"
                                placeholder="Your Name"
                                required
                                data-error="Please enter your name"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="email"
                                className="email required form-control"
                                name="EMAIL"
                                id="mce-EMAIL"
                                placeholder="Your Email"
                                required
                                data-error="Please enter your email"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <input
                                type="phone"
                                name="PHONE"
                                className="phone form-control"
                                id="phone mce-PHONE"
                                placeholder="Your Phone"
                                required
                                data-error="Please enter your phone"
                              />
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div className="form-group">
                            <div className="controls">
                              <textarea
                                id="message mce-MESSAGE"
                                rows="7"
                                placeholder="Your Massage"
                                name="MESSAGE"
                                className="required form-control"
                                required
                                data-error="Please enter your message"
                              ></textarea>
                              <div className="help-block with-errors"></div>
                            </div>
                          </div>
                          <div id="mce-responses" class="clear">
                            <div
                              class="response"
                              id="mce-error-response"
                              style={{ display: "none" }}
                            ></div>
                            <div
                              class="response"
                              id="mce-success-response"
                              style={{ display: "none" }}
                            ></div>
                          </div>
                          <div
                            style={{ position: "absolute", left: "-5000px" }}
                            aria-hidden="true"
                          >
                            <input
                              type="text"
                              name="b_870e1b447d1f93893227a9c52_85d6c939a5"
                              tabindex="-1"
                              value=""
                            />
                          </div>
                          <button
                            type="submit"
                            value="Subscribe"
                            name="subscribe"
                            id="submit mc-embedded-subscribe"
                            className="btn btn-success"
                          >
                            Send Message
                          </button>
                          <div
                            id="msgSubmit"
                            className="h3 text-center hidden"
                          ></div>
                          <div className="clearfix"></div>
                        </form>
                      </div>
                    </div>
                  </div> */}
                  <div className="row contact-info-row text-center wow fadeIn">
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".2s">
                        <i
                          className="fa fa-map-marker contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Address</h3>
                        <p> India</p>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".4s">
                        <i
                          className="fa fa-envelope contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Email</h3>
                        <a
                          href="mailto:contact.sanajitjana@gmail.com"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          contact.123@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-mobile contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Phone</h3>
                        <a
                          href="tel:8372876775"
                          style={{
                            color: "black",
                            textDecoration: "none",
                            fontSize: "17px",
                          }}
                        >
                          +91 9876543210
                        </a>
                      </div>
                    </div>
                    <div className="col-md-3 col-sm-6 contact-colamn">
                      <div className="contact-col-info" data-wow-delay=".6s">
                        <i
                          className="fa fa-television contact-icon"
                          aria-hidden="true"
                        ></i>
                        <h3>Portfolio</h3>
                        <p>https://ra.github.io/</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>


  )
}

export default Home