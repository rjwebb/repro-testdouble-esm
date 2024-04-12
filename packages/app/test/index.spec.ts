import * as td from "testdouble";
import { expect } from "chai";

describe("a test", () => {
  beforeEach(async () => {
    const ipldDagJsonStub = await td.replaceEsm("@ipld/dag-json");
    td.when(ipldDagJsonStub.encode(td.matchers.anything())).thenReturn(
      "hello world"
    );
  });

  afterEach(() => {
    td.reset();
  });

  it("should be able to mock @ipld/dag-json", async () => {
    const { foo } = await import("../src/index");
    expect(foo()).to.equal("hello world");
  });
});
