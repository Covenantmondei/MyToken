const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("token", (m) => {
  const token = m.contract("Token", ["Work", "WRK", 18, 1000000000]);
  
  m.call(token, "name");
  m.call(token, "symbol");
  m.call(token, "decimals");
  m.call(token, "totalSupply");
  // m.call(token, "balanceOf", [m.getParameter("deployer")]);

  return { token };
});
