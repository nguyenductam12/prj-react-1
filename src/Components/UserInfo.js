import React from "react";

class UserInfo extends React.Component {

    state = {
        name: 'Tâm',
        address: 'Quảng Ninh',
        age: '19',
    };

    handleOnSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    handleOnchangeName(event) {
        this.setState({
            name: event.target.value,
        })
    }

    handleOnchangeAge(event) {
        this.setState({
            age: event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="intro">
                    Tôi là
                    {this.state.name}
                    sinh ra tại
                    {this.state.address}
                    hiện tại tôi
                    {this.state.age}
                    tuổi
                </div>
                <form onSubmit={(event) => {
                    this.handleOnSubmit(event)
                }}>
                    <label>Your name</label>
                    <input
                        value={this.state.name}
                        type={"text"}
                        onChange={(event) => {
                            this.handleOnchangeName(event)
                        }}/>
                    <label>Your age</label>
                    <input
                        value={this.state.age}
                        type={"text"}
                        onChange={(event) => {
                            this.handleOnchangeAge(event)
                        }}/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default UserInfo;