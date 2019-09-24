import React from 'react';
import {Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
class EditItem extends React.Component {

  render(){
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

    return(
      <div className='popup'>  
            <div className='popup\_inner'>  
              <h1>Edit product details</h1> 
              <h1>{this.props.id}</h1>  
               <form >
                  <Table width="300px" height="200px" align="center">
                    <tbody>
                      <tr>
                        <td><label>ID: </label></td>
                        <td><input type="text"/></td>
                      </tr>
                      <tr>
                        <td><label>Name: </label></td>
                        <td><input type="text"/></td>
                      </tr>
                      <tr>
                        <td><label>Description: </label></td>
                        <td><input type="text"/></td>
                      </tr>
                      <tr>
                        <td><label>Price: </label></td>
                        <td><input type="text"/></td>
                      </tr>
                      <tr><td><input type="submit" value="submit" style={submitbuttonstyle}/></td>
                          <td><input type="submit" onClick = {() =>this.cancel}value="cancel" style={cancelbuttonstyle} /></td>
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
