import React from "react";

class CareerFrom extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://boards-api.greenhouse.io/v1/boards/athenaeducation/jobs/")
            .then((res) => res.json())
            .then((json) => {
                
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "App">
            <h1> Fetch data from an api in react </h1>  {
                items.map((item) => ( 
                <ol key = { item._id } >
                    
                   { item.heading }, 
                    { item.date }, 
                    { item.description }, 
                    { item.url }, 
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default CareerFrom;