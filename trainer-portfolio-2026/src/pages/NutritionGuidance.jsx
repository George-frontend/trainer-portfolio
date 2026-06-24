import { Link } from "react-router-dom";
import { ArrowLeft, Utensils, Target, Award, Check, Clock, BarChart2, Calendar } from "lucide-react";
import "../styles/program-pages.css";

const NutritionGuidance = () => {
  return (
    <>
      <section className="program-hero">
        <Link to="/" className="back-link"><ArrowLeft size={16} /> Back to Home</Link>

        <span className="program-icon"><Utensils /></span>

        <span className="program-label">SUSTAINABLE RESULTS</span>

        <h1 className="program-h1">A Strategy Built Around Your Life.</h1>

        <p className="program-description">
          An individual nutrition plan built on proven, sustainable methods — 
          designed to help you reach your goals without deprivation, without 
          stress, and without sacrificing the things you enjoy.
        </p>
      </section>

      <section className="program-features">

        <span className="primary-span">What You Get</span>

        <h2 className="features-h2">Everything That Is Included</h2>

        <div className="features-grid">

          <article className="feature-card">

            <span className="feature-icon"><Target /></span>

            <h3 className="feature-title">Individual Strategy</h3>

            <p className="feature-p">
              A personalized nutrition plan tailored to your goals, lifestyle, 
              food preferences, and daily schedule — not a generic protocol.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Award /></span>

            <h3 className="feature-title">Proven & Sustainable Methods</h3>

            <p className="feature-p">
              Evidence-based strategies that produce real, lasting results — 
              no fad diets, no extreme approaches, no short-term fixes.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Check /></span>

            <h3 className="feature-title">No Deprivation</h3>

            <p className="feature-p">
              No foods are off the table. You will learn how to include 
              everything you enjoy while still consistently moving toward your goals.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Clock /></span>

            <h3 className="feature-title">No Stress</h3>

            <p className="feature-p">
              Simple, clear guidelines that integrate into your real life — 
              without obsessing over every meal or feeling anxious about food.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><BarChart2 /></span>

            <h3 className="feature-title">Progress Tracking</h3>

            <p className="feature-p">
              Regular check-ins to review your data and evaluate how your 
              body is responding. Nothing is guesswork.
            </p>
          </article>

          <article className="feature-card">

            <span className="feature-icon"><Calendar /></span>

            <h3 className="feature-title">Strategy Adjustments</h3>

            <p className="feature-p">
              Your plan evolves with you. When life changes or progress 
              plateaus, the strategy is updated to keep you moving forward.
            </p>
          </article>
        </div>
      </section>

      <section className="program-pricing">

        <span className="primary-span">Pricing</span>

        <h2 className="pricing-h2">Simple, Transparent Pricing</h2>

        <div className="pricing-cards">

          <div className="pricing-card">

            <span className="price">€60</span>

            <span className="price-title">Monthly — Nutrition Tracking</span>

            <p className="price-description">Standalone nutrition coaching</p>
          </div>

          <div className="pricing-card">

            <span className="price">€215</span>

            <span className="price-title">Monthly — Nutrition + Individual Training</span>

            <p className="price-description">Best value full package</p>
          </div>

          <div className="pricing-card popular">

            <span className="badge-popular">MOST POPULAR</span>

            <span className="price">€115</span>

            <span className="price-title">Monthly — Nutrition + Parallel Training</span>

            <p className="price-description">Group training with nutrition</p>
          </div>

          <div className="pricing-card">

            <span className="price">€80</span>

            <span className="price-title">Monthly — Nutrition + Online Training</span>

            <p className="price-description">Remote training & nutrition</p>
          </div>
        </div>

        <div className="special-offers">

          <h3 className="offers-title"><Award size={16} /> Special Offers</h3>

          <div className="offers-grid">

            <div className="offer-card">

              <span className="offer-badge">-10%</span>

              <span className="offer-name">3-Month Prepay</span>

              <p className="offer-description">Pay for 3 months upfront and save 10% on any package.</p>
            </div>

            <div className="offer-card">

              <span className="offer-badge">-15%</span>

              <span className="offer-name">6-Month Prepay</span>

              <p className="offer-description">Pay for 6 months upfront and save 15% on any package.</p>
            </div>

            <div className="offer-card">

              <span className="offer-badge free">Free</span>

              <span className="offer-name">First Session Free</span>

              <p className="offer-description">Your very first live training session is completely free — no commitment required.</p>
            </div>
          </div>
        </div>

        <Link to="/#contact" className="primary-btn">Book Your Free Session</Link>
      </section>
    </>
  )
}

export default NutritionGuidance