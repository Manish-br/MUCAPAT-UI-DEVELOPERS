import React,  { useState} from 'react';

import axios from 'axios';
 
function Dashboard(props) {

  const url =  fetch("http://aviovp.corp.skf.net:7000/api/usersGetAll")
  const [data, setdata] = useState({
		username:"",
		password:"",
    mail:"",
    name:"",
    user_id:""
    
	})
  function display(e){ 
    e.preventDefault();
    axios.post(url,{
      username:data.username,
      password:data.password
  
    })  
    renderTableHeader = () => {
      return Object.keys(this.state.users[0]).map(attr => <th key={attr}>
      {attr.toUppercase()}
      </th>)
      
      }
      
      renderTableRows = ()  => {
        return this.state.users.map(user => {
            (
                <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.mail}</td>
              <td>{user.team}</td>
              <td>{user.user_id}</td>

              render()  
       (
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
       
              
             
            </tr>
          )
        })
      }


 
const handleLogout = () => {    
    props.history.push('/login');
  }
 
  return (
    
    <div>
      Welcome User!<br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
}
 
export default Dashboard;
