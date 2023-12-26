"use client";
import { PiLightningFill, PiStopBold } from "react-icons/pi";
import Button from "../common/Button";

export default function NavBar() {
  function pot() {
    alert("创建成功");
  }

  return (
    <aside className="h-full w-64 bg-blue-300">
      <div className="flex align-center justify-evenly pt-2">
        <Button icon={PiLightningFill} onClick={pot}>
          创建
        </Button>
        <Button
          className="bg-pink-300"
          icon={PiStopBold}
          onClick={pot}
          variant="outline"
        >
          新建
        </Button>
      </div>
    </aside>
  );
}
