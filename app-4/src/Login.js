import React from 'react'


class Login extends React.Component {
 constructor() {
  super()
  this.state = {
   name: '',
   password: ''
  }
 }

 updateName(e) {
  this.setState({
   name: e.target.value,
  })
 }

 updatePassword(e) {
  this.setState({
   password: e.target.value,
  })
 }


 doThis(e) {
  let newName = this.state.name;
  let newPassword = this.state.password;

  alert("Name: " + newName + "\n" + "Password: " + newPassword);
  
 }

 render() {
   return(
    <div>
     <input onChange={(e)=>this.updateName(e)} type="text" placeholder="login" />
     <input onChange={(e)=>this.updatePassword(e)} type="text" placeholder="password" />
     <button onClick={(e)=>this.doThis()}>Log me in snitch</button>
    </div>
   );
 }
}

export default Login