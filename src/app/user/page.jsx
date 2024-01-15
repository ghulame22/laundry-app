import { redirect } from "next/navigation";

export default function User() {  
  const user = true;
  if (!user) {
    redirect("/user/signin");
  } else {
    redirect("/landing");
  }
  return (
    <div>User</div>
  );
}
