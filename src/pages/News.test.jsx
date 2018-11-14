import News from "./News";
import { Link } from "react-router";
import { Provider } from "mobx-react";
import { MemoryRouter as Router, withRouter } from "react-router-dom"; // 4.0.0

const testHelp = {
  mountComponent: (props = {}) => {
    const moutWrapper = mount(
      <Provider NewsStore={props.NewsStore}>
        <Router>
          <News router={props.Nav} />
        </Router>
      </Provider>
    );
    return moutWrapper;
  }
};

it("<Pages><News - renders component", () => {
  const NewsStore = { loadDataError: true };
  const Nav = mount(<a>TEST</a>);
  const wrapper = render(
    <Provider NewsStore={NewsStore}>
      <Router>
        <News router={Nav} />
      </Router>
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});

it("<components><News> - with error data", () => {
  const NewsStore = { loadDataError: true };
  //mount
  const Nav = mount(<a>TEST</a>);
  //const Path = mount("");
  const wrapper = render(
    <Provider NewsStore={NewsStore}>
      <Router>
        <News router={Nav} location={{ pathname: "Path" }} />
      </Router>
    </Provider>
  );

  expect(wrapper.find("div").hasClass("container")).toBe(true);
});
