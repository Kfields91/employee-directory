import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import API from "../utils/API";
import Table from "./Table";
import 'bootstrap/dist/css/bootstrap.min.css';

class UsersContainer extends Component {
    constructor(props){
        super(props);
    

    this.state = {
        search: "",
        users: [],
        filteredUsers: []
    };
    }

    employeeSearch = () => {
        API.populateUsers()
        .then(res => this.setState( { users: res.data.results }))
        .catch(err => console.log("error in employee Search", err));
        
    };

    componentDidMount() {
    this.employeeSearch();
   };
    

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        },
        () => {
            const currentState = this.state.users;
            const filteredNames = currentState.filter((item) => {
                const wholeName = item.name.first + item.name.last;
                console.log(this.state.search);
                return wholeName.toLowerCase().includes(this.state.search);
            })
            this.setState({ filteredUsers: filteredNames}, () => {
                console.log(this.state.filteredUsers);
            } 
                );

        });

    };

    handleSort = () => {

    }
    
    render() {
        return (
    <div>
    <Header />
    <Search handleInputChange={this.handleInputChange}/>
    <Table  users={this.state.search ? this.state.filteredUsers: this.state.users} />
    </div>
        )
    }
}
 export default UsersContainer;