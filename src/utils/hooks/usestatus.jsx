import { useEffect, useState } from "react";

export function usestatus() {
  const [status, setstatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setstatus(true);
    });
    window.addEventListener("offline", () => {
      setstatus(false);
    });
  }, []);
  return status
}
