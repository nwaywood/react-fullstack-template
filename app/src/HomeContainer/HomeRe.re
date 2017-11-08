[@bs.module "./Home"] external home : ReasonReact.reactClass = "default";

let make = (~posts: array(HackerNewsData.post), children) =>
  ReasonReact.wrapJsForReason(
    ~reactClass=home,
    ~props={"posts": posts |> Array.map((post: HackerNewsData.post) => { [%bs.obj { "title": post.title}]})},
    children
  );