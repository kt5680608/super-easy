import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { NavMainContainer, LogoutBtn } from "./style";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [onHover, setOnHover] = useState(false);
  return (
    <NavMainContainer>
      <div>
        <h1>
          Super easy<span>.</span>
        </h1>
        <LogoutBtn
          whileHover={{
            scale: 1.1,
          }}
          onHoverStart={() => {
            setOnHover(true);
          }}
          onHoverEnd={() => {
            setOnHover(false);
          }}
          style={onHover && { backgroundColor: "black", color: "white" }}
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
