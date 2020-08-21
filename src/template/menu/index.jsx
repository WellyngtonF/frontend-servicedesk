import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getMenu } from "./menu.actions";

import { MenuItem } from "./menuItem";
import { MenuDropdown } from "./menuDropdown";
import { DropdownItem } from "./dropdownItem";
import { SubmenuDropdown } from "./subMenuDropDown";
import If from "../../common/If";

class Menu extends Component {
  componentDidMount() {
    this.props.getMenu();
  }

  renderMenu = () => {
    const list = this.props.menu;
    return list.map((menu) => (
      <div key={menu.id}>
        <If test={menu.subMenus && menu.subMenus.length > 0}>
          <MenuDropdown id={menu.id} titulo={menu.nome}>
            {this.renderDropdown(menu.subMenus)}
          </MenuDropdown>
        </If>
        <If test={menu.subMenus.length === 0}>
          <MenuItem link={menu.link} nome={menu.nome} />
        </If>
      </div>
    ));
  };

  renderDropdown = (list) => {
    return list.map((menu) => (
      <div key={menu.id}>
        <If test={menu.menusTerciarios && menu.menusTerciarios.length > 0}>
          <SubmenuDropdown id={menu.id} nome={menu.nome}>
            {this.renderDropdownItem(menu.menusTerciarios)}
          </SubmenuDropdown>
        </If>
        <If test={menu.menusTerciarios.length === 0}>
          <DropdownItem link={menu.link} nome={menu.nome} />
        </If>
      </div>
    ));
  };

  renderDropdownItem = (list) => {
    return list.map((menu) => (
      <DropdownItem link={menu.link} nome={menu.nome} />
    ));
  };

  render() {
    return (
      <div className="collapse navbar-collapse order-3">
        <ul className="navbar-nav">{this.renderMenu()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ menu: state.menu.list });
const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ getMenu }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Menu);
