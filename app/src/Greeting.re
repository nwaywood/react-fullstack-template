let component = ReasonReact.statelessComponent("Greeting");

let make = (_children) => {
  ...component,
  render: (_self) =>
    <div> <button> (ReasonReact.stringToElement("Hello!")) </button> <GreetingTwo /> <MessageRe name="Test" /> </div>
};

let default = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));
