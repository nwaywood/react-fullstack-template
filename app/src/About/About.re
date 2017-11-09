[@bs.module] external logo : string = "./logo.svg";

let component = ReasonReact.statelessComponent("About");

let make = (_children) => {
  ...component,
  render: (_self) =>
    <div> <div> (Utils.textEl("About")) </div> <img src=logo height="80px" alt="logo" /> </div>
};

let default = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));
