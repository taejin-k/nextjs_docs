import Link from "next/link";

const LinkingAndNavigating = () => {
  return (
    <div className="flex flex-col">
      linking And Navigating Page
      <Link href="/linking-and-navigating/dashboard">Dashboard Page</Link>
      <Link href="/linking-and-navigating/dashboard#position">
        6 In Dashboard Page
      </Link>
    </div>
  );
};

export default LinkingAndNavigating;
