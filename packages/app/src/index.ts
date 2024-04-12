import { encode } from "@ipld/dag-json";
import { bar as bar2 } from "@repro-testdouble-esm/lib";
import { qux as qux2 } from "@repro-testdouble-esm/tslib";

export const foo = () => {
  return encode({});
};

export const bar = () => {
  return bar2();
};

export const qux = () => {
  return qux2();
};
