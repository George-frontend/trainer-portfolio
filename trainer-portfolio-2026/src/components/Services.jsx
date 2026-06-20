import "../styles/services.css";
import { Minus, Dumbbell, Monitor, Utensils  } from "lucide-react";

const Services = () => {

  return (
    <section id="services" className="services">
      <div className="desktop-services">

        <div className="mobile-services">
          <span className="primary-span"><Minus  /> Services <Minus  /></span>

          <h2 className="services-h2">Choose Your Path Forward</h2>

          <p>Three distinct programs designed for different needs, schedules, and goals.</p>

        </div>

        <div className="cards-services">

          <arctile className="card">

            <i className="icon"><Dumbbell /></i>

            <span className="card-span">In-Person Training</span>

            <h3 className="card-title">1-on-1 Coaching</h3>

            <p className="card-p">
              Fully personalized sessions built around your biomechanics and goals. Real-time feedback, 
              progressive programming, and complete accountability.
            </p>

            <a href=""></a>
          </arctile>

          <arctile className="card">

            <i className="icon"><Monitor /></i>

            <span className="card-span">Train Anywhere</span>

            <h3 className="card-title">Remote Coaching</h3>

            <p className="card-p">
              A complete remote training experience — custom weekly programs, 
              video form reviews, and direct support wherever you are in the world.
            </p>

            <a href=""></a>
          </arctile>

          <arctile className="card">

            <i className="icon"><Utensils /></i>

            <span className="card-span">Fuel Your Performance</span>

            <h3 className="card-title">Nutrition Guidance</h3>

            <p className="card-p">
              Precision nutrition coaching tailored to your training load, 
              metabolic needs, and lifestyle. Sustainable protocols grounded in evidence.
            </p>

            <a href=""></a>
          </arctile>
        </div>
      </div>
    </section>
  )
}

export default Services
