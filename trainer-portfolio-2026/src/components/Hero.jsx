import "../styles/hero.css";

const Hero = () => {

  return (
    <section className="hero">

      <h1>TRANSFORMING <span className="hero-span">POTENTIAL</span> INTO PERFORMANCE</h1>

      <p>Bespoke physiological optimization for those who demand excellence. Master your biology, dominate your field.</p>

      <button className="hero-btn">Start Your Transformation</button>

      <div className="cards">
        <div className="card">
          <p className="primary-p">12+ YEARS </p>
          <p className="secondary-p">Elite Experience</p>
        </div>

        <div className="card">
          <p className="primary-p">500+ CLIENTS </p>
          <p className="secondary-p">Global Success</p>
        </div>

        <div className="card">
          <p className="primary-p">98% SUCCESS </p>
          <p className="secondary-p">Retention Rate</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
