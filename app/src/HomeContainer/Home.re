let component = ReasonReact.statelessComponent("Home");

let make = (~posts, _children) => {
  ...component,
  render: (_self) => {
    Js.log(posts);
    let postElements =
      posts
      |> Js.Array.map(
           (post) =>
             <li
               key=post##title
               style=(ReactDOMRe.Style.make(~margin="5px 0px", ~fontSize="1.5em", ()))>
               (ReasonReact.stringToElement(post##title))
             </li>
         );
    Js.log(postElements);
    <div> <ul> (ReasonReact.arrayToElement(postElements)) </ul> </div>
  }
};

let default =
  ReasonReact.wrapReasonForJs(~component, (jsProps) => make(~posts=jsProps##posts, [||]));
