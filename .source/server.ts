// @ts-nocheck
import * as __fd_glob_4 from "../content/docs/guides/setup.mdx?collection=docs"
import * as __fd_glob_3 from "../content/docs/components/alert.mdx?collection=docs"
import * as __fd_glob_2 from "../content/docs/components/ai-input.mdx?collection=docs"
import * as __fd_glob_1 from "../content/docs/index.mdx?collection=docs"
import * as __fd_glob_0 from "../content/docs/getting-started.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.docs("docs", "content/docs", {}, {"getting-started.mdx": __fd_glob_0, "index.mdx": __fd_glob_1, "components/ai-input.mdx": __fd_glob_2, "components/alert.mdx": __fd_glob_3, "guides/setup.mdx": __fd_glob_4, });