import React from "react";
import Table from 'react-bootstrap/Table';


export default class Notes extends React.Component {

    constructor() {
        super();
        this.state = {
            users: null
        }
    }

    componentDidMount() {
        fetch("https://localhost:7211/api/Users/GetAllUsers").then((res) => {
            res.json().then((result) => {
                console.warn(result);
                this.setState({ users: result });
            })
        })
    }


    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>UserName</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.users ?
                                this.state.users.map((item, i) =>
                                        <tr>
                                            <td>{item.userId}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                        </tr>
                                )
                                :
                                <div>
                                    <tr>
                                        <td>No Item Found</td>
                                    </tr>

                                </div>
                        }
                    </tbody>
                </Table>

            </div>
        );
    }
}