import { useMemo } from "preact/hooks";
import { Property } from "../types/property.ts";
import { SalesHistory } from "../types/salesHistory.ts";

type Props = {
  property: Property;
  medianAreaPrice: number;
  lastSale: Omit<SalesHistory, "propertyId" | "id">;
  lastSaleInCity: Omit<SalesHistory, "propertyId" | "id">;
};

export default ({
  property,
  medianAreaPrice,
  lastSale,
  lastSaleInCity,
}: Props) => {
  const imageId = useMemo(() => Math.floor(Math.random() * 26), []);

  return (
    <div className="flex flex-col rounded-md shadow-md">
      <div className="relative">
        <span style="box-sizing: border-box; display: block; background-image: none; opacity: 1; border: 0px; margin: 0px; padding: 33.33333333333333% 0px 0px;"></span>
        <img
          className="absolute top-0 left-0 object-cover w-full h-full"
          src={`/images/${imageId}.webp`}
          style="aspect-ratio: 16 / 4;"
        />
      </div>
      <div className="p-8 flex flex-col gap-2">
        <div className="text-sm opacity-50">
          {property.street} {property.number}, {property.city}{" "}
          {property.postcode}, {property.region}
        </div>
        <div className="text-4xl">${property.price}</div>
        <div className="flex flex-col gap-2 text-sm opacity-50">
          <span>
            The median price in this area is{" "}
            <b>
              $
              {Math.floor(medianAreaPrice)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </b>
          </span>
          {lastSale && (
            <span>
              Last Sale Price of this property:{" "}
              <b>
                $
                {Math.floor(lastSale.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </b>{" "}
              ({new Intl.DateTimeFormat().format(new Date(lastSale.soldAt))})
            </span>
          )}
          {lastSaleInCity && (
            <span>
              Last Sale Price of similar properties in this region:{" "}
              <b>
                $
                {Math.floor(lastSaleInCity.price)
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </b>{" "}
              (
              {new Intl.DateTimeFormat().format(
                new Date(lastSaleInCity.soldAt)
              )}
              )
            </span>
          )}
        </div>
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
        <hr className="my-4 w-full mx-auto" />
        <p className="text-sm">{property.description}</p>
      </div>
    </div>
  );
};
