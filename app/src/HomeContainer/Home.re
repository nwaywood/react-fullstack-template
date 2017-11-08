let component = ReasonReact.statelessComponent("Home");

let make = (~posts: array(HackerNewsData.post), _children) => {
  ...component,
  render: (_self) => {
    let postElements =
      posts
      |> Array.map(
           (post: HackerNewsData.post) =>
             <li
               key=post.title
               style=(ReactDOMRe.Style.make(~margin="5px 0px", ~fontSize="1.5em", ()))>
               (Utils.textEl(post.title))
             </li>
         );
    <div> <ul> (ReasonReact.arrayToElement(postElements)) </ul> </div>
  }
};
