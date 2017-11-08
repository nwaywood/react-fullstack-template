type post = {title: string};

type hackerNewsData = {hits: array(post)};

let parsePost = (json) => Json.Decode.{title: json |> field("title", string)};

let parsePosts = (json) => Json.Decode.(json |> array(parsePost));

let parseHackerNewsData = (json) => Json.Decode.{hits: json |> field("hits", parsePosts)};

let fetchPosts = (callback) =>
  Js.Promise.(
    Fetch.fetch("/api/hacker-news")
    |> then_(Fetch.Response.text)
    |> then_(
         (text) =>
           Js.Json.parseExn(text)
           |> parseHackerNewsData
           |> ((data) => callback(data.hits))
           |> resolve
       )
    |> ignore
  );
