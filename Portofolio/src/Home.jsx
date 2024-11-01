import { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Home.css';

function App() {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3">
          <div className="container px-5">
            <Link className="navbar-brand" to="/"> {/* Use Link for navigation */}
              <span className="fw-bolder text-primary">
                <i className="bi bi-laptop" style={{ fontSize: '2rem', color: '#000000' }}></i>
              </span>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li> {/* Use Link */}
                <li className="nav-item"><Link className="nav-link" to="/resume">Resume</Link></li> {/* Use Link */}
                <li className="nav-item"><Link className="nav-link" to="/projects">Projects</Link></li> {/* Use Link */}
                <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li> {/* Use Link */}
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-shrink-0">
        <header className="py-5">
          <div className="container px-5 pb-5">
            <div className="row gx-5 align-items-center">
              <div className="col-xxl-5 text-center text-xxl-start">
                <div className="badge bg-gradient-secondary text-white mb-4">
                  <div className="text-uppercase">Web &middot; Developer</div>
                </div>
                <div className="fs-3 fw-light text-muted">Hi Friends</div>
                <h1 className="display-3 fw-bolder mb-5">
                  <span className="text-gradient d-inline">My name is Cristian</span>
                </h1>
                <div className="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                  <Link className="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder" to="/resume">Resume</Link> {/* Use Link */}
                  <Link className="btn btn-outline-darkgreen btn-lg px-5 py-3 fs-6 fw-bolder" to="/projects">Projects</Link> {/* Use Link */}
                </div>
              </div>
              <div className="col-xxl-7 d-flex justify-content-center mt-5 mt-xxl-0">
                <div className="profile bg-gradient-primary-to-secondary">
                  <img className="profile-img" src="assets/profile.png" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-light py-5">
          <div className="container px-5">
            <div className="row gx-5 justify-content-center">
              <div className="col-xxl-8 text-center my-5">
                <h2 className="display-5 fw-bolder">
                  <span className="text-gradient d-inline">About Me</span>
                </h2>
                <p className="lead fw-light mb-4">My name is Cristian Nicolas Tambunan</p>
                <p className="text-muted">
                  {/* About Me description content */}
                  As a dedicated Web Developer, I am passionate about crafting dynamic and responsive web applications that provide exceptional user experiences. With a strong command of programming languages such as JavaScript, PHP, Dart, Java, C#, and Golang, I excel in developing scalable and high-performance web solutions...
                </p>
                <div className="d-flex justify-content-center fs-2 gap-4">
                  <a className="text-gradient-linkedin" href="https://www.linkedin.com/in/cristian-nicolas-tambunan-4b30b5258" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a className="text-gradient-github" href="https://github.com/CRISTIANNICOLASTAMBUNAN12" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white py-4 mt-auto">
        <div className="container px-5">
          <div className="row justify-content-center">
            <div className="col-auto">
              <div className="small m-0">Copyright &copy; Cristian</div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
