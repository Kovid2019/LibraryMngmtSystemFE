import { useEffect, useRef, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activateNewUserApi } from "@services/authApi";
const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});
  const shouldFetchRef = useRef(true);
  const navigate = useNavigate();
  console.log(searchParams);
  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");

  useEffect(() => {
    if (sessionId && t && shouldFetchRef.current) {
      //Call API
      (async () => {
        const result = await activateNewUserApi({ sessionId, t });
        setResponse(result);
        setIsPending(false);
      })();
      shouldFetchRef.current = false;
    }
    if (response?.status === "success") {
      setTimeout(() => navigate("/login"), 3000);
    }
  }, [sessionId, t, response.status, navigate]);
  return (
    <div className="py-5 p-5">
      {isPending && (
        <div
          className="m-auto text-center"
          style={{
            width: "450px",
          }}
        >
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>

          <div>
            Please do not go back or refresh the browser. Please wait...
          </div>
        </div>
      )}
      {response?.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {response.message}
        </Alert>
      )}
    </div>
  );
};

export default VerifyUser;
