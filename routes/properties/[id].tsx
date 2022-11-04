import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import { query } from "../../db/db.ts";
import { getProperty, getSimilarProperties } from "../../db/property.ts";
import { getLastSale, getLastSaleInCity } from "../../db/salesHistory.ts";
import PropertyDetail from "../../islands/PropertyDetail.tsx";
import { Property } from "../../types/property.ts";
import { SalesHistory } from "../../types/salesHistory.ts";
import Layout from "../../components/Layout.tsx";
import SimilarProperties from "../../islands/SimilarProperties.tsx";

export const handler: Handlers<{
  similarProperties: Property[];
  property: Property;
  medianAreaPrice: number;
  lastSale: Omit<SalesHistory, "propertyId" | "id">;
  lastSaleInCity: Omit<SalesHistory, "propertyId" | "id">;
}> = {
  GET: async (_req, ctx) => {
    const property = await getProperty(ctx.params.id);

    if (!property) {
      return ctx.renderNotFound();
    }

    const medianAreaPrice = await query<{ percentile_disc: number }>(`
    SELECT PERCENTILE_DISC(0.5)
    WITHIN GROUP (ORDER BY price) 
    FROM "Property"
    WHERE price is NOT NULL
    AND city = '${property.city}'
    AND bedrooms = ${property.bedrooms}
    AND type = '${property.type}';
    `);

    const lastSale = await getLastSale(property.id);
    const lastSaleInCity = await getLastSaleInCity(property);
    const similarProperties = await getSimilarProperties(property);

    return ctx.render({
      property,
      medianAreaPrice: medianAreaPrice.rows[0].percentile_disc,
      lastSale,
      lastSaleInCity,
      similarProperties,
    });
  },
};

export default function PropertyPage(
  props: PageProps<{
    similarProperties: Property[];
    property: Property;
    medianAreaPrice: number;
    lastSale: Omit<SalesHistory, "propertyId" | "id">;
    lastSaleInCity: Omit<SalesHistory, "propertyId" | "id">;
  }>
) {
  return (
    <Layout>
      <Head>
        <title>Fresh App</title>
      </Head>
      <PropertyDetail {...props.data} />
      <SimilarProperties similarProperties={props.data.similarProperties} />
    </Layout>
  );
}
