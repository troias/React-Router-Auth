import { redirect } from "react-router-dom";

export function action({ next }) {
  localStorage.removeItem("token");
  return redirect("/");
}
