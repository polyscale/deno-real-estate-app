import PropertyCard from "../components/PropertyCard.tsx";
import { Property } from "../types/property.ts";

type Props = {
  properties: Array<Property>;
};

export default (props: Props) => {
  return (
    <div className="grid grid-cols-2 gap-8">
      {props.properties.map((p) => (
        <a key={p.id} href={`/properties/${p.id}`}>
          <PropertyCard property={p} />
        </a>
      ))}
    </div>
  );
};
