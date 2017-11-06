let component = ReasonReact.statelessComponent("GreetingTwo");

let make = (~pickupLine: string, _children) => {
  ...component,
  render: (_self) => <div> <button> {ReasonReact.stringToElement("World!")} {ReasonReact.stringToElement(pickupLine)}</button> </div>
};
