import { faker } from "@faker-js/faker";
import React from "react";
import ReactDOM from "react-dom/client";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Zoomi"
          timeAgo="Today at 4:00PM"
          avatar={faker.image.avatar()}
          text="This is nice blog."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sultan"
          timeAgo="Yestday 5:00AM"
          avatar={faker.image.avatar()}
          text="I liked it very much."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Zahr"
          timeAgo="Last Month"
          avatar={faker.image.avatar()}
          text="Great information."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ali"
          timeAgo="Last Year"
          avatar={faker.image.avatar()}
          text="Helpful."
        />
      </ApprovalCard>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
