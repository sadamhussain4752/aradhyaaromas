"use client";

import {
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";

import mobileMenuData from "../../../data/mobileMenuData";
import jobCatContent from "../../../data/job-catergories";
import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";
import {
  isActiveLink,
  isActiveParentChaild,
} from "../../../utils/linkActiveChecker";
import { usePathname, useRouter } from "next/navigation";


const Index = () => {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div
      className="offcanvas offcanvas-start mobile_menu-contnet"
      tabIndex="-1"
      id="offcanvasMenu"
      data-bs-scroll="true"
    >
      <SidebarHeader />

      <Sidebar>
        <Menu>
          {/* Home item */}
          <MenuItem onClick={() => router.push("/")} className={pathname === "/" ? "menu-active-link" : ""}>
            Home
          </MenuItem>

          {/* Incense Sticks with categories from jobCatContent */}
          <SubMenu label="Incense Sticks" className={isActiveParentChaild(jobCatContent.slice(0, 4), pathname) ? "menu-active" : ""}>
            {jobCatContent.slice(0, 4).map((item) => (
              <SubMenu key={item.id} label={item.catTitle} className={isActiveParentChaild(item.products, pathname) ? "menu-active" : ""}>
                {item.products.map((menu, i) => (
                  <MenuItem
                    key={i}
                    onClick={() => router.push(`/shop/shop-single/${menu.sku}`)}
                    className={isActiveLink(menu?.routePath, pathname) ? "menu-active-link" : ""}
                  >
                    {menu.name}
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </SubMenu>

          {/* Dhoop Sticks with categories from jobCatContent */}
          <SubMenu label="Dhoop Sticks" className={isActiveParentChaild(jobCatContent[4].products, pathname) ? "menu-active" : ""}>
            {jobCatContent[4].products.map((menu, i) => (
              <MenuItem
                key={i}
                onClick={() => router.push(`/shop/shop-single/${menu.sku}`)}
                className={isActiveLink(menu?.routePath, pathname) ? "menu-active-link" : ""}
              >
                {menu.name}
              </MenuItem>
            ))}
          </SubMenu>

          {/* Static Links */}
          <MenuItem onClick={() => router.push("/shop/shop-list")} className={pathname === "/shop/shop-list" ? "menu-active-link" : ""}>
            Shop
          </MenuItem>
          <MenuItem onClick={() => router.push("/about")} className={pathname === "/about" ? "menu-active-link" : ""}>
            About
          </MenuItem>
          <MenuItem onClick={() => router.push("/contact")} className={pathname === "/contact" ? "menu-active-link" : ""}>
            Contact
          </MenuItem>
        </Menu>
      </Sidebar>

      <SidebarFooter />
    </div>
  );
};

export default Index;
