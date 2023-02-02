import React from "react";
import  ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";

const App= () =>{
return (
    <div className="ui container comments">
    <CommentDetail author="Zoomi" />
    <CommentDetail author="Sultan"/>
    <CommentDetail author="Zahr"/>
    <CommentDetail author="Ali"/>
    
    </div>
);
};

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(
<React.StrictMode>
    <App/>
</React.StrictMode>
);