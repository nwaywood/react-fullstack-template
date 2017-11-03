let component = ReasonReact.statelessComponent("Greeting");

let make = (_children) => {
  ...component,
  render: (_self) => <button> (ReasonReact.stringToElement("Hello!")) </button>
};

let default = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));
