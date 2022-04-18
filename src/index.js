import react from "react";
import reactDOM from "react-dom";

const bttn = react.createElement("button", {"class":"topbttn"} , "Add a new Student");
const h5 = react.createElement("h5", {"class":"topbttn"} , `Sort by`);

reactDOM.render(
    bttn,
    document.getElementById("addStudent")
);
