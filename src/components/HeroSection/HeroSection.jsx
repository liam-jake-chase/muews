import "./HeroSection.scss";
import heroVideo from "../../assets/Logo-movie-wide-two.gif";
import heroImage from "../../assets/Music-news-you-can-use.svg";
import { Navigate } from "react-router-dom";

export default function HeroSection(props) {
  if (props.redirect) {
    return <Navigate to="/profile" />;
  }

  return (
    <section className="hero">
      <img className="hero__video" src={heroVideo} alt="muews" />
      <form className="hero" onSubmit={props.handleSubmit}>
        <input
          type="text"
          className="hero__search"
          placeholder="Search your favourite artist name here..."
          onChange={props.handleSearchName}
        />
      </form>
      <img className="hero__image" alt="muews-footer" src={heroImage} />
    </section>
  );
}
