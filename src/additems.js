import React from "react";
import { Button, Form, Table } from "react-bootstrap";
import "./styles.css";
import { Link } from "react-router-dom";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      price: ""
    };
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemdescription = this.onChangeItemdescription.bind(this);
    this.onChangeItemprice = this.onChangeItemprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
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
  onSubmit(event) {
    event.preventDefault();
    console.log(JSON.stringify(this.state));
    this.setState({
      id: "",
      name: "",
      description: "",
      price: ""
    });
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
      <div className="App">
        <h1>Add New Product</h1>

        <form onSubmit={this.onSubmit}>
          <Table width="300px" height="200px" align="center">
            <tbody>
              <tr>
                <td>
                  {" "}
                  <label>ID: </label>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    value={this.state.id}
                    onChange={this.onChangeItemId}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <label> Name: </label>
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.name}
                    onChange={this.onChangeItemName}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label>Description: </label>
                </td>
                <td>
                  {" "}
                  <input
                    type="text"
                    value={this.state.description}
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
                    value={this.state.price}
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
                  <Link to="/" className="nav-link">
                    {" "}
                    <input
                      type="submit"
                      value="cancel"
                      className="btn btn-primary"
                      style={cancelbuttonstyle}
                    />
                  </Link>
                </td>
              </tr>
            </tbody>
          </Table>
        </form>
      </div>
    );
  }
}

export default AddItem;
