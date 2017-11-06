let component = ReasonReact.statelessComponent("GreetingTwo");

let make = (_children) => {
  ...component,
  render: (_self) => <div> <button> {ReasonReact.stringToElement("World!")}</button> </div>
};
