import React, {Component, PropTypes} from 'react';
import CSSModules from 'react-css-modules';

import styles from './TableRow.styl';

@CSSModules(styles)
class TableRow extends Component {
  handleEdit() {
    this.props.EditItem(this.props.item._id, this.props.item);
  }
  handleRemove() {
    this.props.DeleteItem(this.props.item._id);
  }
  render() {
    const {
      firstname,
      lastname,
      email,
    } = this.props.item;
    return (
      <tr>
        <td>{{ firstname }}</td>
        <td>{{ lastname }}</td>
        <td>{{ email }}</td>
        <td styleName='centeredCell'>
          <button styleName='button' onClick={ _ => this.handleEdit() }>
            <i styleName='editIcon'></i>
          </button>
        </td>
        <td styleName='centeredCell'>
          <button styleName='button' onClick={ _ => this.handleRemove() }>
            <i styleName='removeIcon'></i>
          </button>
        </td>
      </tr>
    );
  }
}

TableRow.propTypes = {
  DeleteItem: PropTypes.func.isRequired,
  EditItem: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
};

export default TableRow;
