import { redirect } from "next/navigation";

export default function User() {
  const user = false;
  if (!user) {
    redirect("/user/signin");
  } else {
    redirect("/landing");
  }
}
