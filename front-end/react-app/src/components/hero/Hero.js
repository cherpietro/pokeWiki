import "./Hero.css";
import HeroImg from "../../assets/hero.webp";
function Hero() {
  // return "Hero";
  return (
    <div class="hero">
      <div class="hero_content">
        <div class="hero_content_text">
          <h1>PokeWiki</h1>
          <p>FanMadeProject</p>
        </div>
      </div>
      <img class="heroImg" src={HeroImg} alt="#" />
    </div>
  );
}

export default Hero;
