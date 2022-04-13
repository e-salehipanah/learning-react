import React from "react";
// with class component(preference)
class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            myFName : "Ebrahim"
        }
    }
    render(){
        console.log(this.props.family);
        return (
            <>
                <h1>This is My Component({this.state.myFName}+{this.props.family})</h1>
            </>
        )
    }
}
// with function component
// function MyComponent() {
//   return (
//     <>
//       <h1>This is My Component</h1>
//     </>
//   );
// }

export default MyComponent;
