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
  return (
    <>
      <nav className="nav main-menu">
        <ul className="navigation" id="navbar">
          {/* current dropdown */}
          <li
            // className={`${
            //   isActiveParent(homeItems, usePathname()) ? "current" : ""
            // } dropdown`}
          >
           <a href="/"> <span>Home</span></a>
            {/* <div className="mega-menu">
              <div className="mega-menu-bar row pt-0">
                {homeItems.map((item) => (
                  <div
                    className="column col-lg-3 col-md-3 col-sm-12"
                    key={item.id}
                  >
                    <ul>
                      {item.items.map((menu, i) => (
                        <li
                          className={
                            isActiveLink(menu.routePath, usePathname())
                              ? "current"
                              : ""
                          }
                          key={i}
                        >
                          <Link href={menu.routePath}>{menu.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div> */}
          </li>
          {/* End homepage menu items */}

         
          <li
            className={`${
              isActiveParentChaild(pageItems, usePathname()) ||
              isActiveParentChaild(shopItems[0].items, usePathname())
                ? "current "
                : ""
            } dropdown`}
          >
            <span>Categories</span>
            <ul>
              {jobCatContent.map((item) => (
                <li 
                className="dropdown" key={item.id}>
                  <span
                    className={`${
                      isActiveParentChaild(jobCatContent[0].items, usePathname())
                        ? "current "
                        : ""
                    }`}
                  >
                    {item.catTitle}
                  </span>
                  <ul>
                    {item.products.map((menu, i) => (
                      <li
                        className={
                          isActiveLink(menu.routePath, usePathname())
                            ? "current"
                            : ""
                        }
                        key={i}
                      >
                        <Link href={`/shop/shop-single/${menu.sku}`}>{menu.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              {/* {pageItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))} */}
            </ul>
          </li>

          <li
            // className={`${
            //   isActiveParentChaild(blogItems, usePathname()) ? "current" : ""
            // } dropdown`}
          >
           <a href="blog-list-v1"> <span>Blog</span></a>
            {/* <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul> */}
          </li>
          <li
            // className={`${
            //   isActiveParentChaild(blogItems, usePathname()) ? "current" : ""
            // } dropdown`}
          >
           <a href="/about"> <span>About</span></a>
            {/* <ul>
              {blogItems.map((item, i) => (
                <li
                  className={
                    isActiveLink(item.routePath, usePathname()) ? "current" : ""
                  }
                  key={i}
                >
                  <Link href={item.routePath}>{item.name}</Link>
                </li>
              ))}
            </ul> */}
          </li>
          {/* End Blog menu items */}

         
          {/* End Pages menu items */}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavContent;
