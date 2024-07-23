import { Button } from "antd";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <>
      <div className="my-2">
        <Button className="font-medium text-blue-800">
          <PlusCircleIcon className="size-5" />
          <span> Add Note</span>
        </Button>
      </div>
    </>
  );
};

export default Header;
