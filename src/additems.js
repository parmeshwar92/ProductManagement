import React from "react";
import { Table } from "react-bootstrap";
import "./styles.css";
class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      description: "",
      price: "",
      flag: false
    };
    this.onChangeItemId = this.onChangeItemId.bind(this);
    this.onChangeItemName = this.onChangeItemName.bind(this);
    this.onChangeItemdescription = this.onChangeItemdescription.bind(this);
    this.onChangeItemprice = this.onChangeItemprice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
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
    const products = this.props.products;
    products.map(product => {
      console.log(product.id, " _ ", this.state.id);
      if (product.id !== this.state.id) {
        this.setState({
          flag: true
        });
        console.log(this.state.flag);
      }

      return product;
    });

    if (this.state.id !== null && !this.state.flag) {
      this.props.addProduct(
        this.state.id,
        this.state.name,
        this.state.description,
        this.state.price
      );
    } else if (this.state.id === null) {
      alert("please enter product id..");
    } else {
      this.setState({
        id: "",
        name: "",
        description: "",
        price: ""
      });
    }
  }
  onCancel() {
    this.props.canceFunc();
  }
  render() {
    /*const submitbuttonstyle = {
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
    };*/

    return (
      <div className="App">
        <h1>Add New Product</h1>
        <form onSubmit={this.onSubmit}>
          <Table width="300px" height="200px" align="center">
            <tbody>
              <tr>
                <td>
                  <label>ID: </label>
                </td>
                <td>
                  <input
                    type="text"
                    value={this.state.id}
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
                    className="submitbutton"
                  />
                </td>

                <td>
                  <input
                    type="submit"
                    value="cancel"
                    className="cancelbutton"
                    onClick={this.onCancel}
                  />
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
