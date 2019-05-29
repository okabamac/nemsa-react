import React, { useContext } from "react";
import { withRouter} from "react-router-dom";
import ContextConsumer from './Context'

function SideMenu({children}) {

   const ctx = useContext(ContextConsumer);

  return (
    <>
      <div className={ctx.isMenuOpen ? "sideMenu" : "sideMenu hideSideBar"}>
        <div
          className={ctx.isMenuOpen ? "hamburger-icon" : "close hamburger-icon"}
          onClick={ctx.toggleMenu}
        >
          <div className="btn-line line-1" />
          <div className="btn-line line-2" />
          <div className="btn-line line-3" />
        </div>
        <hr />
        {children}
      </div>
    </>
  );
}
export default withRouter(SideMenu);
