import { faker } from "@faker-js/faker";
import React from "react";
import  ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";

const App= () =>{
return (
    <div className="ui container comments">
    <CommentDetail author="Zoomi" timeAgo="Today at 4:00PM" image={faker.image.avatar()} text="This is nice blog."/>
    <CommentDetail author="Sultan" timeAgo="Yestday 5:00AM" image={faker.image.avatar()} text="I liked it very much."/>
    <CommentDetail author="Zahr" timeAgo="Last Month" image={faker.image.avatar()} text="Great information."/>
    <CommentDetail author="Ali" timeAgo="Last Year" image={faker.image.avatar()} text="Helpful."/>
    
    </div>
);
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);