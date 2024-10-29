"use client";

import Link from "next/link";
import {
  blogItems,
  candidateItems,
  employerItems,
  findJobItems,
  homeItems,
  pageItems,
  shopItems,
} from "../../data/mainMenuData";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import jobCatContent from "../../data/job-catergories";

const HeaderNavContent = () => {
  const pathname = usePathname();

  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          <li>
            <Link href="/"> <span>Home</span></Link>
          </li>

          <li
            className={`dropdown ${
              isActiveParentChaild(pageItems, pathname) ||
              isActiveParentChaild(shopItems[0].items, pathname)
                ? "current"
                : ""
            }`}
          >
            <span>Incense Sticks</span>
            <ul>
              {jobCatContent.slice(0, 4).map((item) => (
                <li className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(item.items, pathname) ? "current" : ""
                    }`}
                  >
                    {item.catTitle}
                  </span>
                  <ul>
                    {item.products.map((menu) => (
                      <li
                        key={menu.sku}
                        className={isActiveLink(menu.routePath, pathname) ? "current" : ""}
                      >
                        <Link href={`/shop/shop-single/${menu.sku}`}>
                          {menu.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          <li
            className={`dropdown ${
              isActiveParentChaild(pageItems, pathname) ||
              isActiveParentChaild(shopItems[0].items, pathname)
                ? "current"
                : ""
            }`}
          >
            <span>Dhoop Sticks</span>
            <ul>
              {jobCatContent[4] && jobCatContent[4].products.map((menu) => (
                <li
                  key={menu.sku}
                  className={isActiveLink(menu.routePath, pathname) ? "current" : ""}
                >
                  <Link href={`/shop/shop-single/${menu.sku}`}>
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <Link href="/shop/shop-list"><span>Shop</span></Link>
          </li>
          <li>
            <Link href="/about"><span>About</span></Link>
          </li>
          <li>
            <Link href="/contact"><span>Contact</span></Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
