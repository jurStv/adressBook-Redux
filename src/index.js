import _font_pier_sans_style from "./shared/Pier Sans/stylesheet.css";
import _font_monoid_style from "./shared/Monoid/stylesheet.css";
import _font_awesome_style from "./shared/FontAwesome/css/stylesheet.css";
import _global_styles from "./shared/global.styl";

import React from "react";
import { Provider } from "react-redux";
import App from "./containers/App";
import makeStore from "./store/makeStore";

const store = makeStore();

React.render(
  <Provider store={ store }>
    {() => <App />}
  </Provider>,
  document.getElementById("app")
)
