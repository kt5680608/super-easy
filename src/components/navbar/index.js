import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavMainContainer, LogoutBtn } from "./style";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <NavMainContainer>
      <div>
        <h1>
          Super easy<span>.</span>
        </h1>
        <LogoutBtn
          onClick={() => {
            dispatch({ type: "LOGOUT" });
            navigate("/auth");
          }}
        >
          log out
        </LogoutBtn>
      </div>
    </NavMainContainer>
  );
}

export default Navbar;
