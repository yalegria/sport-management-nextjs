import Link from 'next/link';
import Image from 'next/image';

export default function About() {
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
        <section id="about">
          <div className="container">
            <h2 id="about-us-head">About Us</h2>
            <p>
              Sports Management was founded with a simple goal: to make life easier for sports organizations. We
              understand the challenges that coaches, managers, and administrators face, from scheduling games and
              communicating with parents to managing registrations and tracking player statistics.
            </p>
            <p>
              Our team is passionate about sports and dedicated to providing innovative solutions that help teams
              thrive. We believe that technology should empower sports organizations, not complicate them.
            </p>
          </div>
        </section>

        {/*<section id="team">
          <div className="container" style={{ paddingBottom: '30px' }}>
            <h2 id="me-th-te">Meet the Team</h2>
            <div className="team-members">
              <div className="team-member">
                <Image className="team-image" src="/images/yuri-alegria.jpg" alt="Team Member 1" width={200} height={200} />
                <h3>Yuri Alegria</h3>
                <p>Founder & CEO</p>
              </div>
              <div className="team-member">
                <Image className="team-image" src="/images/team-member2.webp" alt="Team Member 2" width={200} height={200} />
                <h3>Diego Alegria</h3>
                <p>Head of Development</p>
              </div>
              <div className="team-member">
                <Image className="team-image" src="/images/team-member3.jpg" alt="Team Member 3" width={200} height={200} />
                <h3>Marcelo Alegria</h3>
                <p>Head of Finances</p>
              </div>
              <div className="team-member">
                <Image className="team-image" src="/images/team-member4.jpeg" alt="Team Member 4" width={200} height={200} />
                <h3>Nathan Alegria</h3>
                <p>Head of Design</p>
              </div>
            </div>
          </div>
        </section>*/}
      </main>

      <section id="timeline">
        <h2>Our Journey</h2>
        <div className="timeline-container">
          <div className="timeline-line"></div> {/* Horizontal timeline */}
          <div className="timeline-item odd">
            <div className="dot"></div>
            <div className="content">
              <h3>2023</h3>
              <p>Company idea was brought up into the world</p>
            </div>
          </div>
          <div className="timeline-item even">
            <div className="dot"></div>
            <div className="content">
                <h3>2024</h3>
                <p>Began working and programming the platform</p>
            </div>
          </div>
          <div className="timeline-item odd">
            <div className="dot"></div>
            <div className="content">
                <h3>2025</h3>
                <p>About to open the service in the near future</p>
            </div>
          </div>
        </div>
      </section>

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
                <li>
                  Sport Management <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
                </li>
                <li>
                  Sport Management <a href="#" target="_blank"><i className="fab fa-twitter"></i></a>
                </li>
                <li>
                  Sport Management <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
