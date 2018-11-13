import Nav from "./Nav";

it("<components><Nav - renders component", () => {
  const wrapper = shallow(<Nav isLoginPage={true} />);
  expect(wrapper).toMatchSnapshot();
});
