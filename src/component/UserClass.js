import React from "react";
class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:1,
            count1:2
        }
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            console.log("Namste React");
        }, 1000);
    }
    render(){
        return (
        <div className="user-card">
            <p>{this.state.count}</p>
            <button onClick = {() => {
                this.setState({
                    count: this.state.count+1,
                })
            }}></button>
            <p>{}</p>
            <h2> Name : {this.props.name}</h2>
            <h3> Location : india</h3>
        </div>
    );
    }
}
export default UserClass;