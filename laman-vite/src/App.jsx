import React from "react";
// import Sidebar from "../src/components/Sidebar";
// import Router from "../src/components/Route";
import LoginForm from "./components/LoginForm";
export default function App() {
    return (
        <>
          <div className="flex h-screen">
            <div className="m-auto">
              <LoginForm />
            </div>
          </div>

            {/* <Sidebar /> */}
            {/* <main className="min-h-screen pt-8"> */}
                {/* <Router />  */}
            {/* </main> */}
        </>
    );
}