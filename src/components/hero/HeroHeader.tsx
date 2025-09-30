import { Button } from "../ui/button";
import { HeroSelectors as selectors } from "@/utils/selectors/HeroSelectors";
 
const HeroHeader = () => {
  return (
    <div className={selectors.header}>
      <h1 className={selectors.title}>
        Modern Interior <br /> Design Studio
      </h1>
      <p className={selectors.subtitle}>
        Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
        vivethe as it was for us to know what was to be done.
      </p>
      <div className={selectors.left}>
        <Button className={selectors.btnPrimary}>Shop Now</Button>
        <Button className={selectors.btnOutline}>Explore</Button>
      </div>
    </div>
  );
};

export default HeroHeader;