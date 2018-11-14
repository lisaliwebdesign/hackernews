import User from "./User";
import { LogIn } from "../elements/user";
import { MemoryRouter as Router, withRouter } from "react-router-dom"; // 4.0.0

it("<Pages><User - renders component", () => {
  const Nav = { isLoginPage: true };
  const LogIn = mount(<div>Log in </div>);

  const wrapper = render(
    <Router>
      <User Nav={Nav} LogIn={LogIn} router={"test"} />
    </Router>
  );
  expect(wrapper).toMatchSnapshot();
});
