import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "https://deno.land/x/fresh@1.1.2/server.ts";
import Layout from "../components/Layout.tsx";
import { getProperties } from "../db/property.ts";
import PropertiesGrid from "../islands/PropertiesGrid.tsx";
import { Property } from "../types/property.ts";

export const handler: Handlers = {
  GET: async (_req, ctx) => {
    return ctx.render(await getProperties());
  },
};

export default function Home(props: PageProps<Property[]>) {
  const properties = props.data;

  return (
    <Layout>
      <Head>
        <title>Fresh App</title>
      </Head>
      <PropertiesGrid properties={properties} />
    </Layout>
  );
}
