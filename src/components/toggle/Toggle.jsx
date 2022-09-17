import "./toggle.css";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import { FaSun, FaMoon } from "react-icons/fa"
import { IconContext } from "react-icons"

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="t">
        <IconContext.Provider value={{ style: { fontSize: '20px', color: '#AAAAAA' } }}>
            <FaSun style={{ marginLeft: '0px'}} />
        </IconContext.Provider>
        <IconContext.Provider value={{ style: { fontSize: '20px', color: '#AAAAAA' } }}>
            <FaMoon style={{ marginLeft: '0px'}} />
        </IconContext.Provider>
      <div
        className="t-button"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;