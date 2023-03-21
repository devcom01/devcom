import React from "react";

const Menu = ({ logged, setLogged, setReceived, received, leaveRoom }) => {
  return (
    <nav className="menu">
      <ul className="items">
        <li
          className="item"
          onClick={() => {
            setLogged(!logged);
            setReceived();
            leaveRoom();
          }}
        >
          <i className="fa fa-home" aria-hidden="true" />
        </li>
        <li className="item">
          <i className="fa fa-user" aria-hidden="true" />
        </li>
        <li className="item">
          <i className="fa fa-pencil" aria-hidden="true" />
        </li>
        <li className="item item-active">
          <i className="fa fa-commenting" aria-hidden="true" />
        </li>
        <li className="item">
          <i className="fa fa-file" aria-hidden="true" />
        </li>
        <li className="item">
          <i className="fa fa-cog" aria-hidden="true" />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
