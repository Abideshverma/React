
 

/*

<div id="parent">

    <div id="child1">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>

    <div id="child2">
        <h1>i am h1 tag</h1>
        <h2>i am h2 tag</h2>
    </div>

</div>
*/


const parent=React.createElement("div",{id:"parent"},

[
React.createElement("div",{id:"child1"},

//array of childerns
[React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag")
]),


React.createElement("div",{id:"child2"},

//array of childerns
[React.createElement("h1",{},"I am h1 tag"),
React.createElement("h2",{},"I am h2 tag")
]),
]);


console.log(parent);  //object

const root1=ReactDOM.createRoot(document.getElementById("root1"));

root1.render(parent);















 const heading=React.createElement("h1",{id:"heading"},"Hello world from React!")

console.log(heading)  //object

 const root=ReactDOM.createRoot(document.getElementById("root"));


 root.render(heading); //convert object into h1 tag and put it in browser