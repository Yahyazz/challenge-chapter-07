const Cars = () => {
  window.location.href = "cars.html";
  return (
    <>
      {/* <head>
        <link rel="stylesheet" href="/src/common/owlcarousel/owl.carousel.min.css" />
        <link rel="stylesheet" href="/src/common/owlcarousel/owl.theme.default.min.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css"
          integrity="sha512-jnSuA4Ss2PkkikSOLtYs8BlYIeeIK1h99ty4YfvRPAlzr377vr3CXDb7sb7eEEBYjDtcYj+AjBH3FLv5uSJuXg=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
          crossOrigin="anonymous" referrerPolicy="no-referrer" />

        <link rel="stylesheet" href="/src/css/landingstyle.css" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        <link href="https://unpkg.com/gijgo@1.9.14/css/gijgo.min.css" rel="stylesheet" type="text/css" />
      </head>
      <nav className="navbar navbar-expand-lg sticky-top bg-color-gray01" id="navbar">
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
                <a className="nav-link my-auto" href="/#our-service-section">Our Services</a>
                <a className="nav-link my-auto" href="/#why-us-section">Why Us</a>
                <a className="nav-link my-auto" href="/#testimonial-section">Testimonial</a>
                <a className="nav-link my-auto" href="/#faq-section">FAQ</a>
                <button className="btn btn-bd-primary roboto-medium" type="submit"><a href="/signup">Register</a></button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section className="hero-section bg-color-gray01 overflow-hidden">
        <div className="container h-100">
          <div
            className="h-100 d-flex flex-column flex-lg-row justify-content-lg-between align-items-lg-center pt-3 pt-lg-5 pb-3 pb-lg-5">
            <div className="hero-content col-12 col-lg-6">
              <h1 className="roboto-bold lh-base pb-2">Sewa & Rental Mobil Terbaik di kawasan Magelang</h1>
              <p className="roboto-light pe-5">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik
                dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            </div>
            <div className="hero-img">
              <img src="/src/images/img/img_car.png" className="img-fluid" alt="Car Image for Hero Image" />
            </div>
          </div>
        </div>
      </section>

      <section className="search-section">
        <div className="container px-3">
          <form className="row card row-gap-3 gap-md-0 py-3 flex justify-content-between align-items-end flex-row">
            <div className="col-12 col-md">
              <label htmlFor="inputTypeDriver" className="form-label">Tipe Driver</label>
              <select className="form-select form-type" aria-label="Select Driver Type" id="inputTypeDriver">
                <option value="" defaultValue={'Pilih Tipe Driver'} disabled hidden>Pilih Tipe Driver</option>
                <option value="true">Dengan Supir</option>
                <option value="false">Tanpa Supir(Lepas Kunci)</option>
              </select>
            </div>
            <div className="col-12 col-md">
              <label htmlFor="datepicker" className="form-label">Tanggal</label>
              <input className="inputform form-date" id="datepicker" placeholder="Pilih Tanggal" tabIndex={0} />
            </div>
            <div className="col-12 col-md">
              <label htmlFor="inputTime" className="form-label">Waktu Jemput/Ambil</label>
              <select className="form-select form-time" aria-label="Select Time" id="inputTime">
                <option value="" defaultValue={'Pilih Waktu'} disabled hidden>Pilih Waktu</option>
                <option value="08:00">08.00 WIB</option>
                <option value="09:00">09.00 WIB</option>
                <option value="10:00">10.00 WIB</option>
                <option value="11:00">11.00 WIB</option>
                <option value="12:00">12.00 WIB</option>
              </select>
            </div>
            <div className="col-12 col-md">
              <label htmlFor="inputCapacity" className="form-label">Jumlah Penumpang (optional)</label>
              <input type="number" className="form-select form-capacity" id="inputCapacity" placeholder="Jumlah Penumpang" />
            </div>
            <div className="col-12 col-md-auto">
              <button className="btn btn-bd-primary roboto-medium w-100" type="button" id="filter-btn">Cari Mobil</button>
            </div>
          </form>
        </div>
      </section>
      <section className="cars-section container">
        <div className="roboto-medium mb-3" id="totalDataFound"></div>
        <div className="row" id="cars-container"></div>
      </section>


      <footer className="container d-flex flex-column flex-lg-row justify-content-between py-5 mb-5">
        <div className="col-lg-3">
          <p className="roboto-light">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
          <p className="roboto-light">binarcarrental@gmail.com</p>
          <p className="roboto-light">081-233-334-808</p>
        </div>
        <div className="col-lg-1">
          <a href="/#our-service-section" className="text-decoration-none text-black">
            <p className="roboto-regular">Our services</p>
          </a>
          <a href="/#why-us-section" className="text-decoration-none text-black">
            <p className="roboto-regular">Why Us</p>
          </a>
          <a href="/#testimonial-section" className="text-decoration-none text-black">
            <p className="roboto-regular">Testimonial</p>
          </a>
          <a href="/#faq-section" className="text-decoration-none text-black">
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

      <div className="toast-container position-fixed bottom-0 end-0 p-3">
        <div className="toast align-items-center text-bg-danger border-0" id="toastAlert" role="alert" aria-live="assertive"
          aria-atomic="true">
          <div className="d-flex">
            <div className="toast-body">
              Please fill in the form completely
            </div>
            <button type="button" className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
              aria-label="Close"></button>
          </div>
        </div>
      </div>

      <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>

      <script src="/src/common/owlcarousel/owl.carousel.min.js"></script>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/js/bootstrap.bundle.min.js"
        integrity="sha512-7Pi/otdlbbCR+LnW+F7PwFcSDJOuUJB3OxtEHbg4vSMvzvJjde4Po1v4BR9Gdc9aXNUNFVUY+SK51wWT8WF0Gg=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"></script>

      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

      <script src="https://unpkg.com/gijgo@1.9.14/js/gijgo.min.js" type="text/javascript"></script>

      <script type="text/javascript" src="/src/scripts/Component.js"></script>
      <script type="text/javascript" src="/src/scripts/CarsData.js"></script>
      <script type="text/javascript" src="/src/scripts/App.js"></script>
      <script type="text/javascript" src="/src/scripts/Car.js"></script>
      <script type="text/javascript" src="/src/scripts/main.js"></script>
      <script type="text/javascript" src="/src/scripts/carsPage.js"></script> */}
    </>
  )
}

export default Cars
