import path from "path";
import { server } from "fumadocs-mdx/runtime/server";
import type * as Config from "../source.config";

const base = path.join(process.cwd(), "content/docs");

const docGlob = {
  "index.mdx": () => import("../content/docs/index.mdx?collection=docs"),
};

const create = server<typeof Config>();
export const docs = await create.docs("docs", base, {}, docGlob);

