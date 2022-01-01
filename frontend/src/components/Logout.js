import React, { useContext} from 'react'

const Logout = () => { // export function from module

    var session=sessionStorage.getItem('token')
    console.log(session)

    if(session!==null){
        sessionStorage.clear();
        alert("You have been logged Out")
        this.history.push("/")
        window.location.reload()
    }
    else{
        alert("Please Login First")
    }
  }
  export default Logout