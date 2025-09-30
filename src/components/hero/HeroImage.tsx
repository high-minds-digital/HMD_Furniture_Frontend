import { HeroSelectors } from "@/utils/selectors/HeroSelectors";

const HeroImage = () => {
  return (
    <div className={HeroSelectors.right}>
      <img
        className={HeroSelectors.image}
        src="/couch-1.png"
        alt="Modern Couch"
      />
      <div className={HeroSelectors.decor}>
        <img src="/dotted.png" alt="Decoration" className="w-full h-full" />
      </div>
    </div>
  );
};

export default HeroImage;