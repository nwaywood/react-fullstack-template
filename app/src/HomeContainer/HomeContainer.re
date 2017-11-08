type action =
  | HackerData(array(HackerNewsData.post));

type state = {
  posts: array(HackerNewsData.post),
  isFetching: bool
};

let component = ReasonReact.reducerComponent("HomeComponent");

let fetchPosts = (reduce) => HackerNewsData.fetchPosts(reduce((data) => HackerData(data)));

let make = (_children) => {
  ...component,
  initialState: () => {posts: [||], isFetching: true},
  reducer: (action, _state) =>
    switch action {
    | HackerData(posts) => ReasonReact.Update({posts, isFetching: false})
    },
  didMount: (self) => {
    fetchPosts(self.reduce);
    ReasonReact.NoUpdate
  },
  render: (self) =>
    <div>
      <button onClick=((_event) => fetchPosts(self.reduce))> (Utils.textEl("Refresh")) </button>
      (
        self.state.isFetching ?
          <h2> (Utils.textEl("loading...")) </h2> :
          <div> <Greeting /> <Home posts=self.state.posts /> </div>
      )
    </div>
};

let default = ReasonReact.wrapReasonForJs(~component, (_jsProps) => make([||]));