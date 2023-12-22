import React from "react";
import Table from 'react-bootstrap/Table';


export default class Notes extends React.Component {

    constructor() {
        super();
        this.state = {
            notes: null
        }
    }

    componentDidMount() {
        fetch("https://localhost:7211/api/Notes/GetAllNotes").then((res) => {
            res.json().then((result) => {
                console.warn(result);
                this.setState({ notes: result });
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
                            <th>Title</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            this.state.notes ?
                                this.state.notes.map((item, i) =>
                                        <tr>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.description}</td>
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