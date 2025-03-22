// src/app/pricing/page.js or src/pages/pricing.js (depending on the Next.js structure you use)
import Link from 'next/link';

export default function Pricing() {
  return (
    <div>
      <header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/features">Features</Link>
          <Link href="/pricing" className="active">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <h1>Sports Management</h1>
      </header>

      <main>
        <section id="pricing">
          <div className="container">
            <h2 id="price-head">Choose Your Plan</h2>
            <p className="pricing-description">
              Find the perfect plan for your sports management needs, whether you're managing teams, clubs, or leagues. Start managing efficiently today!
            </p>

            <div className="pricing-plans">
              {/* Manager Status Plans */}
              <div className="plan">
                <h3>Manager Status</h3>
                <p className="plan-description">Tailored for Team Managers & Coaches.</p>
                <ul>
                  <li>$4.99/month</li>
                  <li>Annual Plan: $49.99 (Save 16%)</li>
                  <li>Team modifications</li>
                  <li>Team info management</li>
                  <li># of players</li>
                  <li>Add/remove players</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              {/* Amateur Plan */}
              <div className="plan">
                <h3>Amateur Plan</h3>
                <p className="plan-description">Perfect for basic team and player management.</p>
                <ul>
                  <li>$9.99/month</li>
                  <li>Annual Plan: $99.99 (Save 16%)</li>
                  <li>Includes Manager Status features</li>
                  <li>Add/remove players</li>
                  <li>Display Record</li>
                  <li>Display Player info</li>
                  <li>Display team rosters before games</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              {/* Professional Plan */}
              <div className="plan">
                <h3>Professional Plan</h3>
                <p className="plan-description">Advanced management tools for growing teams and clubs.</p>
                <ul>
                  <li>$14.99/month</li>
                  <li>Annual Plan: $139.99 (Save 22%)</li>
                  <li>Includes Amateur Plan features</li>
                  <li>Display team line-ups</li>
                  <li>Team performance tracking (stats)</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              {/* Club Manager Plans */}
              <div className="plan">
                <h3>Club Manager</h3>
                <p className="plan-description">For managing clubs and teams efficiently.</p>
                <ul>
                  <li>$9.99/month</li>
                  <li>Annual Plan: $99.99 (Save 16%)</li>
                  <li>Club modifications</li>
                  <li>Club info management (Name, Location, Logo, etc.)</li>
                  <li>Add/remove teams</li>
                  <li>Request to join leagues</li>
                  <li>Team stats</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              {/* Other Plans */}
              <div className="plan">
                <h3>Club Manager Pro</h3>
                <p className="plan-description">Advanced features for club management.</p>
                <ul>
                  <li>$14.99/month</li>
                  <li>Annual Plan: $139.99 (Save 22%)</li>
                  <li>Includes Club Manager features</li>
                  <li>Add Sponsors</li>
                  <li>Selection of pre-made websites</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              <div className="plan">
                <h3>Club Manager Premium</h3>
                <p className="plan-description">Full customization and support for your club.</p>
                <ul>
                  <li>$19.99/month</li>
                  <li>Annual Plan: $189.99 (Save 21%)</li>
                  <li>Includes all previous features</li>
                  <li>Personal request for website mockups and modifications</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              {/* League Manager Plans */}
              <div className="plan">
                <h3>League Manager</h3>
                <p className="plan-description">Manage leagues with advanced scheduling and customization tools.</p>
                <ul>
                  <li>$14.99/month</li>
                  <li>Annual Plan: $139.99 (Save 22%)</li>
                  <li>Modification of league info (Name, Location, Logo, etc.)</li>
                  <li>Accept or invite clubs</li>
                  <li>User-made tournament brackets & scheduling</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              <div className="plan">
                <h3>League Manager Pro</h3>
                <p className="plan-description">Premium tools for league management and sponsorships.</p>
                <ul>
                  <li>$19.99/month</li>
                  <li>Annual Plan: $189.99 (Save 21%)</li>
                  <li>Includes League Manager features</li>
                  <li>Selection of pre-made websites</li>
                  <li>Add Sponsors</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>

              <div className="plan">
                <h3>League Manager Premium</h3>
                <p className="plan-description">Full league management suite with auto-generating features.</p>
                <ul>
                  <li>$24.99/month</li>
                  <li>Annual Plan: $239.99 (Save 20%)</li>
                  <li>Includes all previous features</li>
                  <li>Request for Website Mockup & modifications</li>
                  <li>Tournament bracket & league schedule auto-generation</li>
                </ul>
                <a href="#" className="btn">Sign Up</a>
              </div>
            </div>

            <div className="cta">
              <p>Not sure which plan is right for you? <Link href="/contact">Contact us</Link> for a personalized consultation!</p>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div className="footer-left">
            <h2 className="head-foot">Sports Management</h2>
            <p>&copy; 2024 Sports Management. All Rights Reserved.</p>
            <p>Email: sport_manage@hotmail.com</p>
            <p>Phone: 732-586-1363 or 732-902-1141</p>
          </div>
          <div className="footer-right">
            <ul className="social-media">
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
