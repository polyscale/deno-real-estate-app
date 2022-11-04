import { Property } from "../types/property.ts";
import { query } from "./db.ts";

export const getProperties = async (): Promise<Property[]> => {
  return (
    await query<Property>(
      `SELECT * FROM "Property" ORDER BY "createdAt" DESC LIMIT 10`
    )
  ).rows;
};

export const getProperty = async (id: string): Promise<Property> => {
  return (
    await query<Property>(`SELECT * FROM "Property" WHERE "id" =  '${id}'`)
  ).rows[0];
};

export const getSimilarProperties = async (property: Property) => {
  const dbResponse = await query<Property>(`
  SELECT *
  FROM "Property"
  WHERE id != '${property.id}' 
  AND city = '${property.city}'
  AND bedrooms = ${property.bedrooms}
  AND type = '${property.type}'
  AND area <= ${property.area + 15}
  AND area >= ${property.area - 15}
  LIMIT 6
  `);

  return dbResponse.rows;
};
