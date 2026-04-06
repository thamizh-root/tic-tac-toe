import './ManageYourMoney.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
export default function ManageYourMoney() {

  const container = useRef();

  useGSAP(() => {

    gsap.set(".starbucks-overlay", {
      opacity: 1,
      y: -200,
      x: -400,
      scale: 0.8,
    });

    gsap.set(".metrics-overlay", {
      opacity: 1,
      y: -100,
      x: 800,
      scale: 0.8,
    });

    gsap.to(".metrics-overlay", {
      opacity: 1,
      y: -100,
      x: 800,
      scale: 1,
      rotationX: 0,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",
      delay: 0.3
    });
  }, { scope: container });
  return (
    <>

      <div ref={container} className='container'>

        <div className='header'>

          <div className='logo-and-company-name'>
            <div className='logo'>
              <img src="../../spinach.png" />
            </div>

            <h1>Payoneer</h1>
          </div>




          <div className='navigator'>

            <ul>
              <li>Freelancers</li>
              <li>Business</li>
              <li>Marketplace</li>
            </ul>

          </div>

          <div className='register'>

            <div className='login-container'>
              <img width="20px" height="20px" src="../../login.png" />
              <p>
                Sign In
              </p>
            </div>

            <div className='add-user-container'>
              <img width="20px" height="20px" src="../../add-user.png" />
              <p>
                Sign Up
              </p>
            </div>



          </div>

        </div>

        <section className='metrics-overlay'>
          <div className='metric-box'>
            <h3>$12.5k</h3>
            <p>avg revenue</p>
          </div>
          <div className='metric-box'>
            <h3>150+</h3>
            <p>countries</p>
          </div>
          <div className='metric-box'>
            <h3>24/7</h3>
            <p>support</p>
          </div>
          <div className='metric-box'>
            <h3>0%</h3>
            <p>hidden fees</p>
          </div>
        </section>

        <section className='starbucks-overlay'>

          <div className='profile-container'>
            <div className='profile-image-container'>
              <img src="../../christopher.jpg" alt="name-of-the-person-goes-here" />
            </div>
            <div>
              <span>Paid to</span>
              <span>Starbucks</span>
            </div>
          </div>
          <div className='price-container'>
            <span></span>
            <span>850.00 EUR</span>
          </div>
          <div className='time-container'>
            <span>10:45 AM</span>
          </div>


        </section>

        <div className='main'>


          <div className='main-content'>
            <h1>Manage </h1>
            <h1>your money</h1>
          </div>

        </div>

      </div>

    </>
  );
}

