import { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';
import CreateJob from '../pages/CreateJob';
import './header.css';

function HeaderResponsive() {
  const [showModal, setShowModal] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false); // Mobile toggle

  return (
    <div className='navy'>
      {/* Main Navbar */}
      <nav className="navbar bg-white shadow-sm px-3 py-2">
        <div className="nav-bar-con d-flex justify-content-between align-items-center w-100">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="https://media.licdn.com/dms/image/v2/D560BAQHpPblOaplcOQ/company-logo_200_200/company-logo_200_200/0/1694017343509/cybermind_works_logo?e=2147483647&v=beta&t=N13ljMg1CHgxKadTUGz5b35KPUjx9qKRVed2giPMM00"
              alt="logo"
              width="40"
              height="40"
              className="me-2"
            />
          </Link>

          {/* Toggler for Mobile */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setIsNavOpen(prev => !prev)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex gap-3 align-items-center">
            <NavLinks setShowModal={setShowModal} />
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu - below navbar */}
      {isNavOpen && (
        <div className="d-lg-none bg-white shadow-sm p-3 text-center">
          <NavLinks setShowModal={setShowModal} isMobile />
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <CreateJob onClose={() => setShowModal(false)} />
        </Modal>
      )}
    </div>
  );
}

function NavLinks({ setShowModal, isMobile }) {
  return (
    <ul className={`navbar-nav ${isMobile ? 'flex-column text-center' : 'flex-row'} gap-3`}>
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/find-jobs">Find Jobs</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/find-talents">Find Talents</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About us</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/testimonials">Testimonials</Link>
      </li>
      <li className="nav-item btnn">
        <button className="btn btn-primary mt-1" onClick={() => setShowModal(true)}>
          Create Jobs
        </button>
      </li>
    </ul>
  );
}

export default HeaderResponsive;
