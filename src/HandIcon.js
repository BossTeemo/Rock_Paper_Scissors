import rockImg from "./assets/rock.svg";
import scissorImg from "./assets/scissor.svg";
import paperImg from "./assets/paper.svg";

const HAND_IMAGES = {
  rock: rockImg,
  scissor: scissorImg,
  paper: paperImg,
};

function HandIcon({ className, value }) {
  const src = HAND_IMAGES[value];

  return <img className="{className}" src={src} alt={value} />;
}

export default HandIcon;
