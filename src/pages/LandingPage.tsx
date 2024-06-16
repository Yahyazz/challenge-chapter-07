const LandingPage = () => {
  window.location.href = "landingPage.html";
  return (
    <>
      {/* <head>
        <link rel="stylesheet" href="/src/common/owlcarousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/src/common/owlcarousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
          integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/src/css/landingstyle.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
      </head> */}
      {/* <nav className="navbar navbar-expand-lg sticky-top bg-color-gray01" id="navbar">
        <div className="container d-flex justify-content-between align-items-center py-2">
          <a className="navbar-brand my-auto" href="#">
            <img src="/src/images/img/logo.png" alt="Brand Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end w-50" tabIndex={-1} id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title fw-bold" id="offcanvasNavbarLabel">BCR</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body justify-content-lg-end">
              <div className="d-flex flex-column flex-lg-row gap-4 fw-medium">
                <a className="nav-link my-auto" href="#our-service-section">Our Services</a>
                <a className="nav-link my-auto" href="#why-us-section">Why Us</a>
                <a className="nav-link my-auto" href="#testimonial-section">Testimonial</a>
                <a className="nav-link my-auto" href="#faq-section">FAQ</a>
                <button className="btn btn-bd-primary roboto-medium" type="submit"><a href="/auth/signin">Register</a></button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero-section bg-color-gray01 overflow-hidden">
        <div className="container h-100">
          <div
            className="h-100 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center pt-3 pt-lg-5 pb-3 pb-lg-5">
            <div className="hero-content col-12 col-lg-6" data-aos="fade-right">
              <h1 className="roboto-bold lh-base pb-2">Sewa & Rental Mobil Terbaik di kawasan Magelang</h1>
              <p className="roboto-light pe-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
              <a className="btn btn-bd-primary roboto-medium" href="/cars" role="button">Mulai Sewa Mobil</a>
            </div>
            <div className="hero-img" data-aos="fade-left">
              <img src="/src/images/img/img_car.png" className="img-fluid" alt="Car Image for Hero Image" />
            </div>
          </div>
        </div>
      </section>
      <section className="container our-service-section" id="our-service-section">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center py-5 m-lg-5 row-gap-5">
          <div className="service-img col-10 col-lg-6" data-aos="fade-in">
            <img src="/src/images/img/img_service.png" alt="Service Image" className="img-fluid" />
          </div>
          <div className="service-content col-12 col-lg-6 ps-lg-5">
            <h2 className="roboto-bold fs-4 lh-base mb-2" data-aos="fade-down" data-aos-delay="100" data-aos-offset="0">Best Car
              Rental for any kind of trip in Magelang!</h2>
            <p className="roboto-light" data-aos="fade-down" data-aos-delay="200" data-aos-offset="0">Sewa mobil di Magelang
              bersama Binar Car Rental jaminan harga lebih murah
              dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
              wedding, meeting, dll.</p>
            <ul>
              <li className="roboto-light mb-2" data-aos="fade-right" data-aos-delay="300" data-aos-offset="0">Sewa Mobil Dengan
                Supir di Magelang 12 Jam</li>
              <li className="roboto-light mb-2" data-aos="fade-right" data-aos-delay="400" data-aos-offset="0">Sewa Mobil Lepas
                Kunci di Magelang 24 Jam</li>
              <li className="roboto-light mb-2" data-aos="fade-right" data-aos-delay="500" data-aos-offset="0">Sewa Mobil Jangka
                Panjang Bulanan</li>
              <li className="roboto-light mb-2" data-aos="fade-right" data-aos-delay="600" data-aos-offset="0">Gratis Antar -
                Jemput Mobil di Bandara</li>
              <li className="roboto-light mb-2" data-aos="fade-right" data-aos-delay="700" data-aos-offset="0">Layanan Airport
                Transfer / Drop In Out</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container why-us-section mb-5" id="why-us-section">
        <h2 className="roboto-bold fs-4 lh-base mb-2 text-center text-lg-start">Why Us?</h2>
        <p className="roboto-light mb-5 text-center text-lg-start">Mengapa harus pilih Binar Car Rental?</p>
        <div className="row row-gap-3 row-gap-lg-0">
          <div className="col-12 col-lg-3" data-aos="flip-left" data-aos-delay="100" data-aos-offset="0">
            <div className="card card-hover p-2 h-100">
              <div className="fill bg-color-warning"></div>
              <div className="card-body">
                <img className="mb-4" src="/src/images/img/icon/icon_complete.png" alt="Icon Complete" />
                <h5 className="card-title roboto-bold fs-6 mb-4">Mobil Lengkap</h5>
                <p className="card-text roboto-light fs-6 lh-sm">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                  terawat
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" data-aos="flip-left" data-aos-delay="300" data-aos-offset="0">
            <div className="card card-hover p-2 h-100">
              <div className="fill bg-color-danger"></div>
              <div className="card-body">
                <img className="mb-4" src="/src/images/img/icon/icon_price.png" alt="Icon Price" />
                <h5 className="card-title roboto-bold fs-6 mb-4">Harga Murah</h5>
                <p className="card-text roboto-light fs-6 lh-sm">Harga murah dan bersaing, bisa bandingkan harga kami dengan
                  rental mobil lain</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" data-aos="flip-left" data-aos-delay="500" data-aos-offset="0">
            <div className="card card-hover p-2 h-100">
              <div className="fill bg-color-blue04"></div>
              <div className="card-body">
                <img className="mb-4" src="/src/images/img/icon/icon_24hrs.png" alt="Icon 24Hours" />
                <h5 className="card-title roboto-bold fs-6 mb-4">Layanan 24 Jam</h5>
                <p className="card-text roboto-light fs-6 lh-sm">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                  tersedia di akhir minggu</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3" data-aos="flip-left" data-aos-delay="700" data-aos-offset="0">
            <div className="card card-hover p-2 h-100">
              <div className="fill bg-color-green04"></div>
              <div className="card-body">
                <img className="mb-4" src="/src/images/img/icon/icon_professional.png" alt="Icon Professional" />
                <h5 className="card-title roboto-bold fs-6 mb-4">Sopir Profesional</h5>
                <p className="card-text roboto-light fs-6 lh-sm">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                  tepat waktu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonial-section mt-5 pt-5 px-3 px-lg-0" id="testimonial-section">
        <h2 className="roboto-bold fs-4 lh-base mb-2 text-center">Testimonial</h2>
        <p className="roboto-light mb-4 text-center">Berbagai review positif dari para pelanggan kami</p>
        <div className="owl-carousel owl-theme">
          <div className="card mb-3 rounded-3 bg-color-gray01 border-0 box-shadow-low" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="100" data-aos-offset="0">
            <div className="row g-0 py-4 d-flex flex-column flex-lg-row">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <img src="/src/images/img/img_photo-male.png" style={{ width: "6rem" }} alt="Male Profile Picture" />
              </div>
              <div className="col-lg-8 py-5">
                <div className="card-body p-0 px-5 px-lg-0 pe-lg-4">
                  <div className="mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                    <img src="/src/images/img/rate-star.png" className="mb-2"
                      style={{ display: "inline", width: "auto", height: "auto" }} alt="Star Rating Image" />
                  </div>
                  <p className="card-text mb-2 robhoto-light">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    sapiente odio porro, praesentium debitis placeat ex mollitia molestias nostrum ipsa ratione iure
                    dolorum. Odit dicta ullam nobis officiis sint ut."</p>
                  <h5 className="card-title roboto-medium fs-6">John Dee 32, Bromo</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 rounded-3 bg-color-gray01 border-0 box-shadow-low" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="300" data-aos-offset="0">
            <div className="row g-0 py-4 d-flex flex-column flex-lg-row">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <img src="/src/images/img/img_photo-female.png" style={{ width: "6rem" }} alt="Female Profile Picture" />
              </div>
              <div className="col-lg-8 py-5">
                <div className="card-body p-0 px-5 px-lg-0 pe-lg-4">
                  <div className="mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                    <img src="/src/images/img/rate-star.png" className="mb-2"
                      style={{ display: "inline", width: "auto", height: "auto" }} alt="Star Rating Image" />
                  </div>
                  <p className="card-text mb-2 roboto-light">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    sapiente odio porro, praesentium debitis placeat ex mollitia molestias nostrum ipsa ratione iure
                    dolorum. Odit dicta ullam nobis officiis sint ut."</p>
                  <h5 className="card-title roboto-medium fs-6">John Dee 32, Bromo</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="card mb-3 rounded-3 bg-color-gray01 border-0 box-shadow-low" data-aos="fade-up"
            data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
            <div className="row g-0 py-4 d-flex flex-column flex-lg-row">
              <div className="col-lg-4 d-flex justify-content-center align-items-center">
                <img src="/src/images/img/img_photo-male.png" style={{ width: "6rem" }} alt="Male Profile Picture" />
              </div>
              <div className="col-lg-8 py-5">
                <div className="card-body p-0 px-5 px-lg-0 pe-lg-4">
                  <div className="mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start align-items-center">
                    <img src="/src/images/img/rate-star.png" className="mb-2"
                      style={{ display: "inline", width: "auto", height: "auto" }} alt="Star Rating Image" />
                  </div>
                  <p className="card-text mb-2 roboto-light">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                    sapiente odio porro, praesentium debitis placeat ex mollitia molestias nostrum ipsa ratione iure
                    dolorum. Odit dicta ullam nobis officiis sint ut."</p>
                  <h5 className="card-title roboto-medium fs-6">John Dee 32, Bromo</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow-button-group">
          <button type="button" className="btn btn-bd-arrow arrow-prev">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
          </button>
          <button type="button" className="btn btn-bd-arrow arrow-next">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"></path>
              <path fill="none" d="M0 0h24v24H0z"></path>
            </svg>
          </button>
        </div>
      </section>
      <section className="container cta-banner my-5 py-5">
        <div
          className="card w-100 bg-color-blue04 text-white border-0 rounded-4 d-flex justify-content-center align-items-center"
          data-aos="zoom-in" data-aos-duration="1000">
          <div className="card-body py-5 mt-5 mt-lg-0 px-2 px-lg-5 col-8 text-center">
            <h5 className="card-title roboto-bold fs-2 mb-5 mb-lg-3">Sewa Mobil di Magelang Sekarang</h5>
            <p className="card-text roboto-light mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.</p>
            <a className="btn btn-bd-primary roboto-medium" href="/cars" role="button">Mulai Sewa Mobil</a>
          </div>
        </div>
      </section>
      <section className="faq-section container my-5 pb-lg-5" id="faq-section">
        <div className="row">
          <div className="col-12 col-lg-5 text-center text-lg-start" data-aos="fade-right">
            <h2 className="roboto-bold fs-4 lh-base mb-2">Frequently Asked Question</h2>
            <p className="roboto-light mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div className="col-12 col-lg-7">
            <div className="accordion" id="accordion" data-aos="fade-up" data-aos-offset="0" data-aos-delay="100">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed roboto-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div className="accordion-body roboto-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta quo officiis asperiores, soluta
                    aspernatur animi quia vel. Ratione nulla numquam animi in velit deserunt doloribus eligendi maxime vel
                    consequuntur.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="accordion" data-aos="fade-up" data-aos-offset="0" data-aos-delay="300">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed roboto-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div className="accordion-body roboto-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta quo officiis asperiores, soluta
                    aspernatur animi quia vel. Ratione nulla numquam animi in velit deserunt doloribus eligendi maxime vel
                    consequuntur.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="accordion" data-aos="fade-up" data-aos-offset="0" data-aos-delay="500">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed roboto-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div className="accordion-body roboto-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta quo officiis asperiores, soluta
                    aspernatur animi quia vel. Ratione nulla numquam animi in velit deserunt doloribus eligendi maxime vel
                    consequuntur.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="accordion" data-aos="fade-up" data-aos-offset="0" data-aos-delay="700">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed roboto-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    Apakah Ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div className="accordion-body roboto-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta quo officiis asperiores, soluta
                    aspernatur animi quia vel. Ratione nulla numquam animi in velit deserunt doloribus eligendi maxime vel
                    consequuntur.
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion" id="accordion" data-aos="fade-up" data-aos-offset="0" data-aos-delay="900">
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed roboto-light" type="button" data-bs-toggle="collapse"
                    data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordion">
                  <div className="accordion-body roboto-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero dicta quo officiis asperiores, soluta
                    aspernatur animi quia vel. Ratione nulla numquam animi in velit deserunt doloribus eligendi maxime vel
                    consequuntur.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="container d-flex flex-column flex-lg-row justify-content-between py-5 mb-5" data-aos="fade-up"
        data-aos-duration="500">
        <div className="col-lg-3">
          <p className="roboto-light">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p className="roboto-light">binarcarrental@gmail.com</p>
          <p className="roboto-light">081-233-334-808</p>
        </div>
        <div className="col-lg-1">
          <a href="#our-service-section" className="text-decoration-none text-black">
            <p className="roboto-regular">Our services</p>
          </a>
          <a href="#why-us-section" className="text-decoration-none text-black">
            <p className="roboto-regular">Why Us</p>
          </a>
          <a href="#testimonial-section" className="text-decoration-none text-black">
            <p className="roboto-regular">Testimonial</p>
          </a>
          <a href="#faq-section" className="text-decoration-none text-black">
            <p className="roboto-regular">FAQ</p>
          </a>
        </div>
        <div className="col-lg-3 pb-3 pb-lg-0">
          <p className="roboto-light">Connect with us</p>
          <div className="icon-grup d-flex column-gap-3">
            <a href="#" className="text-decoration-none text-black">
              <img src="/src/images/img/icon/icon_facebook.png" alt="Facebook Icon" />
            </a>
            <a href="#" className="text-decoration-none text-black">
              <img src="/src/images/img/icon/icon_instagram.png" alt="Instagram Icon" />
            </a>
            <a href="#" className="text-decoration-none text-black">
              <img src="/src/images/img/icon/icon_twitter.png" alt="Instagram Icon" />
            </a>
            <a href="#" className="text-decoration-none text-black">
              <img src="/src/images/img/icon/icon_mail.png" alt="Mail Icon" />
            </a>
            <a href="#" className="text-decoration-none text-black">
              <img src="/src/images/img/icon/icon_twitch.png" alt="Twitch Icon" />
            </a>
          </div>
        </div>
        <div className="col-lg-3">
          <p className="roboto-light">Copyright Binar 2022</p>
          <a href="#">
            <img src="/src/images/img/logo.png" alt="Brand Logo" />
          </a>
        </div>
      </footer>

      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
      <script src="/src/common/owlcarousel/owl.carousel.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js"
        integrity="sha512-7Pi/otdlbbCR+LnW+F7PwFcSDJOuUJB3OxtEHbg4vSMvzvJjde4Po1v4BR9Gdc9aXNUNFVUY+SK51wWT8WF0Gg=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script type="text/javascript" src="/src/scripts/landingPage.js"></script> */}
    </>
  )
}

export default LandingPage
