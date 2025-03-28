// src/app/page.js
import Link from "next/link";
import Image from "next/image";


export default function Home() {
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
        <p>Making Sports Easier for Everyone</p>
      </header>

      <main>
        <section id="hero">
          <div className="container">
            <h1>Empower Your Team. Simplify Your Life.</h1>
            <p>
              Experience the future of sports management with Sports Management.
              Our all-in-one platform streamlines scheduling, communication, and
              administration, giving you more time to focus on what matters most -
              the game.
            </p>
            <Link href="/features" className="btn">Explore Features</Link>
          </div>
        </section>

        <section id="index-features">
          <div className="container">
            <h2 id="pow-feat">Powerful Features</h2>
            <div className="feature-grid">
              <div className="feature-item">
                <i className="fa-solid fa-calendar-check"></i>
                <h3>Effortless Scheduling</h3>
                <p>Create and manage schedules, send reminders, and generate reports with ease.</p>
              </div>
              <div className="feature-item">
                <i className="fa-solid fa-bullhorn"></i>
                <h3>Seamless Communication</h3>
                <p>Connect with players, parents, and coaches through integrated messaging and announcements.</p>
              </div>
              <div className="feature-item">
                <i className="fa-regular fa-window-restore"></i>
                <h3>Built-In Websites</h3>
                <p>Recieve your own personally made website template for leagues, clubs, and teams.</p>
              </div>
            </div>
          </div>
        </section>
        {/*
        <section id="testimonials">
          <div className="container">
            <h2 id="reviews">What Our Customers Say</h2>
            <div className="testimonial-slider">
              <div className="testimonial">
                <p>
                  "Sports Management has saved us countless hours and headaches.
                  It's incredibly user-friendly and has significantly improved
                  our team's communication."
                </p>
                <p>- John Doe, Coach</p>
              </div>
            </div>
          </div>
        </section>*/}
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