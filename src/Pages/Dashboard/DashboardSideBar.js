import { ChatAltIcon, ClipboardListIcon, ShoppingBagIcon, ShoppingCartIcon } from "@heroicons/react/solid";
import React from "react";

const DashboardSideBar = ({children}) => {
  return (
    <div>
      <div class="drawer drawer-mobile font-poppins">
        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content flex flex-col bg-secondary items-center justify-center">
          {/* <!-- Page content here --> */}
          {children}
          
        </div>
        <div class="drawer-side">
          <label for="my-drawer-2" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-52 lg:w-60  text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <p>
                {" "}
                <ShoppingCartIcon className="text-primary w-6 h-6" /> Book{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <ClipboardListIcon className="text-primary w-6 h-6" /> Booking List{" "}
              </p>
            </li>
            <li>
              <p>
                {" "}
                <ChatAltIcon className="text-primary w-6 h-6" /> Review{" "}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardSideBar;
