import React from "react";
// with class component(preference)
class MyComponent extends React.Component {
    constructor() {
        super();
    }
    render(){
        return (
            <>
                <h1>This is My Component</h1>
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
