import React from "react";
import UserInfo from "./UserInfo";
import DisplayInform from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        listUsers: [
            {id: 1, name: "Hoi Tam", age: "19"},
            {id: 2, name: "Tam", age: "20"},
            {id: 3, name: "Tam Nguyen", age: "23"}
        ]
    }

    render() {
        return (
            <div>
                <UserInfo/>
                <br/><br/>
                <DisplayInform
                    listUsers={this.state.listUsers}
                />
            </div>
        )
    }
}

export default MyComponent;