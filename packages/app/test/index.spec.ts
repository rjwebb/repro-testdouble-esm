import * as td from "testdouble";
import { expect } from "chai";

describe("a test", () => {
  beforeEach(async () => {
    const ipldDagJsonStub = await td.replaceEsm("@ipld/dag-json");
    td.when(ipldDagJsonStub.encode(td.matchers.anything())).thenReturn(
      "hello world"
    );

    const libStub = await td.replaceEsm("@repro-testdouble-esm/lib");
    td.when(libStub.bar()).thenReturn("haha");
  });

  afterEach(() => {
    td.reset();
  });

  it("should be able to mock @ipld/dag-json", async () => {
    const { foo } = await import("../src/index");
    expect(foo()).to.equal("hello world");
  });

  it("should be able to mock an internal library", async () => {
    const { bar } = await import("../src/index");
    expect(bar()).to.equal("haha");
  });
});
