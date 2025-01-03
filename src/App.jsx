import "./App.css";
import { Button } from "react-bootstrap";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { ToastContainer, toast } from "react-toastify";

function App() {
  toast.success("Helloo AP Bye Bye YCP");
  return (
    <>
      <ToastContainer />
      <Button>
        Click Me <FaFileInvoiceDollar />
      </Button>
      <h1>Coming Soon...</h1>
    </>
  );
}

export default App;
