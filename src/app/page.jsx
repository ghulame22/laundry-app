import { redirect } from "next/navigation";
import styles from "./page.module.css";

export default function Home() {
  const user = false;
  if (!user) {
    redirect("/user/signin");
  } else {
    redirect("/landing");
  }
  return (
    <div>Home</div>
  );
}
