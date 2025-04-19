import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("token", (m) => {
    const token = m.contract("Token", ["covenant", "COV", 18, 1000000000])
    m.call(token, "name");
    m.call(token, "symbol");
    m.call(token, "decimals");
    m.call(token, "totalSupply");
    // m.call(token, "balanceof", [m.getParameter("deployer")]);

    return {token}


});