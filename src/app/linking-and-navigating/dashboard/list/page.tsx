import { redirect } from "next/navigation";

const List = () => {
  redirect("/linking-and-navigating/dashboard");

  return <div>List Page</div>;
};

export default List;
