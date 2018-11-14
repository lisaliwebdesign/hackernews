import Router from "./Router";
import { Provider } from "mobx-react";

it("<components><Nav - renders component", () => {
  const NewsStore = { loadDataError: true };
  const wrapper = render(
    <Provider NewsStore={NewsStore}>
      <Router />
    </Provider>
  );
  expect(wrapper).toMatchSnapshot();
});
