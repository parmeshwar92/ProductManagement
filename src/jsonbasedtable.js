import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import tabledata from "./tablejsondata";
import AddItem from "./additems";
import EditItem from "./edititem";

class DataTables extends React.Component {
  constructor(props) {
    super(props);
    this.deleteRow = this.deleteRow.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.editItems = this.editItems.bind(this);
    this.addProductClick = this.addProductClick.bind(this);
    this.updateProducts=this.updateProducts.bind(this);
    this.state = {
      selected: -1,
      editOperation: false,
      addOperation: false,
      products: [],
      id: "",
      name: "",
      description: "",
      price: ""
    };
  }
  addProductClick() {
    this.setState({
      addOperation: !this.state.addOperation
    });
  }

  editItems(props) {
    this.setState({
      editOperation: !this.state.editOperation
    });
    this.setState({
      id: props.original.id,
      name: props.original.name,
      description: props.original.description,
      price: props.original.price
    });
  }
  updateProducts(id,name,description,price){
    alert(description);
   let products = this.getproducts();
   products = products.map(product => {
    if(product.id === id && product.name  === name){
      product.description = description;
      product.price= price;
     }
     return product
   });
   this.setState({products});
   this.setState({
    addOperation: true
  });
  
   
   console.log(products);
  }
  deleteRow(id) {
    let items = this.state.products;
    let index = items.findIndex(dataid => {
      return dataid.id === id;
    });
    items.splice(index, 1);
    this.setState({ employees: items });
  }
  getproducts() {
    return this.state.products;
  }
  addProduct(id, name, description, price) {
    const products = this.getproducts();
    products.push({
      id,
      name,
      description,
      price
    });
    this.setState({ products });
    console.log("items", products);
  }

  componentDidMount() {
    this.setState({
      products: tabledata.data
    });
  }
  render() {
    const delbuttonstyle = {
      backgroundColor: "#F44336",
      width: 80,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };
    const edbuttonstyle = {
      backgroundColor: "#03A9F4",
      width: 70,
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7
    };
    const columns = [
      {
        Header: "ID",
        accessor: "id",
        width: 50
      },
      {
        Header: "Name",
        accessor: "name",
        minWidth: 50
      },
      {
        Header: "Description",
        accessor: "description",
        minWidth: 50,
        sortable: false,
        filterable: false
      },
      {
        Header: "Price",
        accessor: "price",
        minWidth: 50,
        sortable: false,
        filterable: false
      },
      {
        Header: "Action",
        width: 200,
        sortable: false,
        filterable: false,
        Cell: props => {
          return (
            <div>
              <button
                onClick={() => this.editItems(props)}
                style={edbuttonstyle}
              >
                Edit
              </button>
              <button
                onClick={() => this.deleteRow(props.original.id)}
                style={delbuttonstyle}
              >
                Delete
              </button>
            </div>
          );
        }
      }
    ];

    const style = {
      width: "90%",
      height: "100%",
      position: "relative",
      left: "70px",
      padding: "10px"
    };

    return (
      <div>
        <h1 style={{ color: "#00BCD4" }}>Welcome to product Application!</h1>
        <h2 style={{ color: "#00BCD4" }}>Product List</h2>
        <div style={style}>
          <ReactTable
            columns={columns}
            data={this.state.products}
            minRows={5}
            defaultPageSize={5}
            noDataText="please wait..."
            getTrProps={(state, rowInfo, column, instance) => {
              if (typeof rowInfo !== "undefined") {
                return {
                  onClick: (e, handleOriginal) => {
                    this.setState({
                      selected: rowInfo.index
                    });
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  },
                  style: {
                    background:
                      rowInfo.index === this.state.selected
                        ? "white"
                        : "#EBEBEB",
                    color:
                      rowInfo.index === this.state.selected
                        ? "##FFFFFF"
                        : "black"
                  }
                };
              } else {
                return {
                  onClick: (e, handleOriginal) => {
                    if (handleOriginal) {
                      handleOriginal();
                    }
                  },
                  style: {
                    background: "white",
                    color: "black"
                  }
                };
              }
            }}
          />
        </div>

        <button onClick={() => this.addProductClick()} style={edbuttonstyle}>
          Add Product
        </button>
        {this.state.addOperation ? (
          <AddItem addProduct={this.addProduct} />
        ) : null}
        {this.state.editOperation ? (
          <EditItem
            id={this.state.id}
            name={this.state.name}
            description={this.state.description}
            price={this.state.price}
            updateProducts={this.updateProducts}
          />
        ) : null}
      </div>
    );
  }
}
export default DataTables;
