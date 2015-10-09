import React, {Component, PropTypes} from "react";
import CSSModules from "react-css-modules";
import TableRow from "./TableRow";

import styles from "./AdressTable.styl";

//@CSSModules(styles)
class AdressTable extends Component {
  render() {
    return (
      <table styleName="dataTable">
        <thead>
          <tr styleName="row">
            <th>{"First Name"}</th>
            <th>{"Last Name"}</th>
            <th>{"Email"}</th>
            <th styleName="centeredCell">{"Edit"}</th>
            <th styleName="centeredCell">{"Delete"}</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }

  renderRows(){
    return this.props.items.map( item =>  {
        return (<TableRow item={item}
          EditItem={this.props.EditItems}
          DeleteItem={this.props.DeleteItems} />);
      }
    );
  }
}

AdressTable.propTypes = {
  items: PropTypes.array.isRequired,
  EditItems: PropTypes.func.isRequired,
  DeleteItems: PropTypes.func.isRequired
}

export default CSSModules(AdressTable, styles)
