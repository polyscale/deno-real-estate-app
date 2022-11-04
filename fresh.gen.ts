// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/joke.ts";
import * as $1 from "./routes/index.tsx";
import * as $2 from "./routes/properties/[id].tsx";
import * as $$0 from "./islands/PropertiesGrid.tsx";
import * as $$1 from "./islands/PropertyDetail.tsx";
import * as $$2 from "./islands/SimilarProperties.tsx";

const manifest = {
  routes: {
    "./routes/api/joke.ts": $0,
    "./routes/index.tsx": $1,
    "./routes/properties/[id].tsx": $2,
  },
  islands: {
    "./islands/PropertiesGrid.tsx": $$0,
    "./islands/PropertyDetail.tsx": $$1,
    "./islands/SimilarProperties.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
