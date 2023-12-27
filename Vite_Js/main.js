import "./style.css";
import Greeter from "./greeter";

const greeter = new Greeter("Alice");

const app = document.getElementById("App");
app.innerHTML = greeter.sayHello();
