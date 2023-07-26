import { Button } from "antd";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Button type="primary">
        <Link href={'/about'}>About</Link>
      </Button>
    </div>
  );
};

export default HomePage;
