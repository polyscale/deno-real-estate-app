import { Property } from "../types/property.ts";
import { SalesHistory } from "../types/salesHistory.ts";
import { query } from "./db.ts";

export const getLastSale = async (propertyId: string) => {
  const dbResponse = await query<SalesHistory>(`
    SELECT price, "soldAt" FROM "SalesHistory" WHERE "propertyId" = '${propertyId}' ORDER BY "soldAt" DESC LIMIT 1
    `);

  return dbResponse.rows[0];
};

export const getLastSaleInCity = async (property: Property) => {
  const dbResponse = await query<SalesHistory>(`
    SELECT "SalesHistory".price, "SalesHistory"."soldAt" FROM "SalesHistory" LEFT JOIN "Property" ON "Property".id = "SalesHistory"."propertyId" WHERE city = '${property.city}' AND bedrooms = ${property.bedrooms} ORDER BY "soldAt" DESC LIMIT 1
    `);

  return dbResponse.rows[0];
};
