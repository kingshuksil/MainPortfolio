import { gridItems } from "@/Data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({id, title, description, className, titleClassName, img, imgClassName, spareImg}) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            titleClassName={titleClassName}
            imgClassName={imgClassName}
            spareImg={spareImg}
            />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
