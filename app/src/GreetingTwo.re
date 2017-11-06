let component = ReasonReact.statelessComponent("GreetingTwo");

let make = (_children) => {
  ...component,
  render: (_self) => <div> <button> (Utils.textEl("World!")) </button> </div>
};