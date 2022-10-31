import "./Hero.css";
import "bootstrap/dist/css/bootstrap.min.css";

const HeroArea = () => {
  return (
    <div className="hero">
        <img className="hero__img" style={{ maxHeight: "440px", width: "100%" }} src="https://lamadrena.com/wp-content/uploads/2018/10/radek-grzybowski-66457-unsplash.jpg" alt="" />
        <div className="container hero-content">
          <div className="row">
            <div className="col-md-6">
              <h2>Computer Science</h2>
              <p>142,765 Computer Engineers follow this</p>
            </div>
          </div>
        </div>
      </div>
  );
};
export default HeroArea;
