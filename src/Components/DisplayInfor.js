import React from "react";

// import {useState} from "react";

class DisplayInform extends React.Component {
    render() {
        const {listUsers} = this.props
        //props => viet tat Properties
        return (<>
            {listUsers.map((item) => {
                return (<div key={item.id}>
                        <div>My name's {item.name}</div>
                        <div>My age's {item.age}</div>
                        <hr/>
                    </div>
                )
            })}
        </>)
    }
}

export default DisplayInform