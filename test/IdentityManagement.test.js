const { assert } = require("chai");

const IdendityManagement = artifacts.require("./IdentityManagement.sol");

contract("IdentityManagement", (accounts) => {
  before(async () => {
    this.idendityManagement = await IdendityManagement.deployed();
  });

  it("deploys successfully", async () => {
    const address = await this.idendityManagement.address;
    assert.notEqual(address, 0x0);
    assert.notEqual(address, "");
    assert.notEqual(address, null);
    assert.notEqual(address, undefined);
  });
});
