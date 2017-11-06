[@bs.module "./Message"] external message : ReasonReact.reactClass = "default";

let make = (~name: string, children) =>
  ReasonReact.wrapJsForReason(~reactClass=message, ~props={"name": name}, children);