let _setBrowserPolicies = () => {};

let _generateAccounts = () => Modules.server.generateAccounts();

let startup = () => {
  _setBrowserPolicies();
  _generateAccounts();
};

Modules.server.startup = startup;
