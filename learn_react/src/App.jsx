// import { Spinner } from "flowbite-react";
import Spinners from "./assets/components/Spinners";
// import Button from "./assets/components/Button";
import "./App.css";
import Button from "./assets/components/Button";
// import Hello from "./Hello";
// import BlogPost from "./BlogPost";
import Hello from './Hello';

function App() {
  // const students = ["Bujang","Budi","Budu","Buda","Budo"];
  // const firstStudent = students[0]  
  return (
    <>
    {/* <Hello name={firstStudent}/> */}
      <Spinners/>

      {/* <Hello  */}
<hr />
<div className="mt-4">
  <Button type="primary" className="mr-1">Primary Buttton</Button>
  <Button type="secondary">Secondary Buttton </Button>

  {/* <Button type="primary"></Button> */}
</div>
    </>
  );
}

export default App;
