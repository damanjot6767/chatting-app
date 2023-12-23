"use client";

import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileFooter = () => {
  const routes = useRoutes();
  return (
    <div
      className="
        fixed
        w-full
        bottom-0
        z-40
        flex
        items-center
        justify-between
        bg-white
        border-t-[1px]
        lg:hidden
    "
    >
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
};
export default MobileFooter;
