import { useMemo } from "preact/hooks";
import PropertyCard from "../components/PropertyCard.tsx";
import { Property } from "../types/property.ts";

type Props = {
  similarProperties: Array<Property>;
};

export default ({ similarProperties }: Props) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-semibold mb-4">Similar Properties:</h3>
      <div className="grid grid-cols-2 gap-4">
        {similarProperties.map((p) => (
          <a href={`/properties/${p.id}`}>
            <PropertyCard property={p} />
          </a>
        ))}
      </div>
    </div>
  );
};
