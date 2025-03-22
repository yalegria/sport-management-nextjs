// src/app/features/page.js
import Link from 'next/link';

export default function Features() {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <h1>Sports Management</h1>
      </header>

      <main>
        <section id="features">
          <div className="container">
            <h2 id="pow-feat">Powerful Features</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <i className="fa-solid fa-calendar-check"></i>
                <h3>Effortless Scheduling</h3>
                <p>Create and manage schedules, send reminders, and generate reports with ease.</p>
              </div>
              {/*<div className="feature-item">
                <i className="fa-solid fa-bullhorn"></i>
                <h3>Seamless Communication</h3>
                <p>Connect with players, parents, and coaches through integrated messaging and announcements.</p>
              </div>*/}
              {/*<div className="feature-item">
                <i className="fa-solid fa-id-card"></i>
                <h3>Streamlined Registration</h3>
                <p>Streamline registration and payment processing with our secure online platform.</p>
              </div>*/}
              <div className="feature-item">
                <i className="fa-regular fa-window-restore"></i>
                <h3>Built-In Websites</h3>
                <p>Get your own made website template for leagues, clubs, and teams.</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-hand-holding-dollar"></i>
                <h3>Affordable Subscriptions</h3>
                <p>Prices starting at $10 a month with our basic plan.</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-user-check"></i>
                <h3>User Friendly</h3>
                <p>Our platform is easy to use with no headaches or problems to worry about.</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-computer-mouse"></i>
                <h3>Fast Inputs and Outputs</h3>
                <p>Takes seconds to insert data like scores and stats, and takes less to show up on the front-end.</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-brain"></i>
                <h3>Problem Solving App</h3>
                <p>Helps solve problems, coaches, managers, etc, face when building a soccer brand.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <h2 className="head-foot">Sport Management</h2>
              <p>&copy; 2024 Sports Management. All Rights Reserved.</p>
              <p>Email: sport_manage@hotmail.com</p>
              <p>Phone: 732-586-1363 or 732-902-1141</p>
            </div>
            <div className="footer-right">
              <ul className="social-media">
                <li>Sport Management <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                <li>Sport Management <a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                <li>Sport Management <a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
