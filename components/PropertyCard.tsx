import { useMemo } from "preact/hooks";
import { Property } from "../types/property.ts";

type Props = {
  property: Property;
};

export default ({ property }: Props) => {
  const imageId = useMemo(() => Math.floor(Math.random() * 26), []);

  return (
    <div class="flex flex-col rounded-md shadow-md">
      <div className="relative">
        <span style="box-sizing: border-box; display: block; background-image: none; opacity: 1; border: 0px; margin: 0px; padding: 66.66666% 0px 0px;"></span>
        <img
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={`/images/${imageId}.webp`}
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="text-sm opacity-50">
          {property.street} {property.number}, {property.city}{" "}
          {property.postcode}, {property.region}
        </div>
        <div className="text-4xl">${property.price}</div>
        <div className="flex justify-between text-sm opacity-50">
          <div>
            {property.bedrooms} bd • {property.bathrooms} bt • {property.area} m
            <sup>2</sup>
          </div>
          <div className="flex gap-4">
            <span>Views: {property.views}</span>
            <span>Saved: {property.saves}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
