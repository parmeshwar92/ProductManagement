import React from "react";
import { Table } from "react-bootstrap";
class EditItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemdescription = this.onChangeItemdescription.bind(this);
    this.onChangeItemprice = this.onChangeItemprice.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  onChangeItemId(event) {
    this.setState({
      id: event.target.value
    });
  }

  onChangeItemName(event) {
    this.setState({
      name: event.target.value
    });
  }
  onChangeItemdescription(event) {
    this.setState({
      description: event.target.value
    });
  }
  onChangeItemprice(event) {
    this.setState({
      price: event.target.value
    });
  }
  onEditSubmit(event) {
    this.props.updateProducts(this.props.id,this.props.name,this.state.description,this.state.price);
    
    
    event.preventDefault();
  }

  render() {
    const submitbuttonstyle = {
      backgroundColor: "#03A9F4",
      width: 90,
      height: 40,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };
    const cancelbuttonstyle = {
      backgroundColor: "#FFEB3B",
      width: 90,
      height: 40,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };

    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1>Edit product details</h1>
          <form onSubmit={this.onEditSubmit}>
            <Table width="300px" height="200px" align="center">
              <tbody>
                <tr>
                  <td>
                    <label>ID: </label>
                  </td>
                  <td>
                    <input
                      type="text"
                      defaultValue={this.props.id}
                      onChange={this.onChangeItemId}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label> Name: </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      defaultValue={this.props.name}
                      onChange={this.onChangeItemName}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Description: </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      defaultValue={this.props.description}
                      onChange={this.onChangeItemdescription}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Price </label>
                  </td>

                  <td>
                    <input
                      type="text"
                      defaultValue={this.props.price}
                      onChange={this.onChangeItemprice}
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      type="submit"
                      value="submit"
                      className="btn btn-primary"
                      style={submitbuttonstyle}
                    />
                  </td>

                  <td>
                    <input
                      type="submit"
                      value="cancel"
                      className="btn btn-primary"
                      style={cancelbuttonstyle}
                    />
                  </td>
                </tr>
              </tbody>
            </Table>
          </form>
        </div>
      </div>
    );
  }
}
export default EditItem;
