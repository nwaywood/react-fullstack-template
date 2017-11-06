[@bs.module] external message : ReasonReact.reactClass = "./Message";

let make = (~name: string, children) =>
  ReasonReact.wrapJsForReason(~reactClass=message, ~props={"name": name}, children);
