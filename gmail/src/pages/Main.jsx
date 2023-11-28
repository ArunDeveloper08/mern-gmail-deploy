import React, { Suspense, useState } from "react";
import Header from "../component/Header";
import SideBar from "../component/SideBar";
import Email from "../component/Email";
import { Outlet } from "react-router-dom";
import SuspenseLoader from "../component/common/SuspenseLoader";

const Main = () => {
  const [openDrawer, setOpenDrawer] = useState(true);

  return (
    <div>
      <Header setOpenDrawer={setOpenDrawer} />
      <SideBar openDrawer={openDrawer} />
      {/* <Email openDrawer={openDrawer}/> */}
      <Suspense fallback={SuspenseLoader}>
        <Outlet context={{ openDrawer }} />
      </Suspense>
    </div>
  );
};

export default Main;
