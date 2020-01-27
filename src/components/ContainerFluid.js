import React from 'react';

const ContainerFluid = () => {
    return (
        <div className="container-fluid">
  <div className="row">
    <div className="col-md-12">
      {/* Site content */}
      <div className="tm-content">
        {/* Section 0 Introduction */}
        <section className="tm-section tm-section-0">
          <h2 className="tm-section-title mb-3 font-weight-bold">
            Introduction
          </h2>
          <div className="tm-textbox tm-bg-dark">
            <p>
              The Card template is last updated on 27 Jan 2020. Read More button is linked to second page. You can try it now. External link button is added on main menu.
            </p>
            <p className="mb-0">
              Please tell your friends about Rodolphe Augusto for free templates. This is 70% alpha background.
            </p>
          </div>
          <a href="#" id="tm_about_link" data-linkid={1} className="tm-link">Read More</a>
        </section>
        {/* Section 1 About Me */}
        <section className="tm-section tm-section-1">
          <div className="tm-textbox tm-textbox-2 tm-bg-dark">
            <h2 className="tm-text-blue mb-4">About Me</h2>
            <p className="mb-4">
              You are allowed to modify and use this React template for
              your personal or business websites.
            </p>
            <p className="mb-4">
              You are NOT allowed to re-distribute this template file on
              your site for any reason. Thank you.
            </p>
            <a href="#" id="tm_work_link" data-linkid={2} className="tm-link m-0">Next</a>
          </div>
        </section>
        {/* Section 2 Work (Gallery) */}
        <section className="tm-section tm-section-2 mx-auto">
          <div className="grid tm-gallery">
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/01.jpg" alt="Image 1" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/01.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/02.jpg" alt="Pretty Girl" className />
              <figcaption>
                <h2>
                  Pretty Girl
                  <span>Picture</span>
                </h2>
                <p>Vivamus feugiat, neque sed.</p>
                <a href="img/02.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/03.jpg" alt="Red Flowers" className />
              <figcaption>
                <h2>
                  A bunch of
                  <span>Red Flower</span>
                </h2>
                <p>Integer pellentesque nisi iaculis sapien.</p>
                <a href="img/03.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/04.jpg" alt="Stairs" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/04.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/05.jpg" alt="Image 5" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/05.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/06.jpg" alt="Image 6" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/06.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/07.jpg" alt="Image 7" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/07.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/08.jpg" alt="Image 8" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/08.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/09.jpg" alt="Image 9" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/09.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/10.jpg" alt="Image 10" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/10.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/11.jpg" alt="Image 11" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/11.jpg">View more</a>
              </figcaption>
            </figure>
            <figure className="effect-goliath tm-gallery-item">
              <img src="img/12.jpg" alt="Image 12" className />
              <figcaption>
                <h2>
                  Thoughtful
                  <span>Goliath</span>
                </h2>
                <p>When Goliath comes out, you should run.</p>
                <a href="img/12.jpg">View more</a>
              </figcaption>
            </figure>
          </div>
        </section>
        {/* Section 3 Contact */}
        <section className="tm-section tm-section-3 tm-section-left">
          <form action className="tm-contact-form" method="post">
            <div className="form-group mb-4">
              <input type="text" id="contact_name" name="contact_name" className="form-control" placeholder="Name" required />
            </div>
            <div className="form-group mb-4">
              <input type="email" id="contact_email" name="contact_email" className="form-control" placeholder="Email" required />
            </div>
            <div className="form-group mb-4">
              <textarea rows={4} id="contact_message" name="contact_message" className="form-control" placeholder="Message" required defaultValue={""} />
            </div>
            <div className="form-group mb-0">
              <button type="submit" className="btn tm-send-btn tm-fl-right">
                Send
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</div>

    )
}

export default ContainerFluid;
