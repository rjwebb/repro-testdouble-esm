import { encode } from "@ipld/dag-json";
import { bar as bar2 } from "@repro-testdouble-esm/lib";

export const foo = () => {
  return encode({});
};

export const bar = () => {
  return bar2();
};
