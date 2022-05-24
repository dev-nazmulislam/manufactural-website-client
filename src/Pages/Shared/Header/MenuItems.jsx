import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.Init";
import CustomLink from "../CustomLink/CustomLink";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useOrders from "../../../hooks/useOrders";
import { Link } from "react-router-dom";
import { MdManageAccounts, MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineUnorderedList, AiOutlineLogout } from "react-icons/ai";
import { SiManageiq } from "react-icons/si";

const MenuItems = () => {
  const [user] = useAuthState(auth);
  const [orders] = useOrders();
  const userOrders = orders.map((order) => order?.email == user?.email);

  return (
    <>
      <CustomLink to="/home">Home</CustomLink>
      <CustomLink to="/pars">Parts</CustomLink>
      <CustomLink to="/protfolio">Protfolio</CustomLink>
      <CustomLink to="/blog">Blog</CustomLink>
      <CustomLink to="/about">About Us</CustomLink>
      <CustomLink to="/cart" className="mr-2">
        <div className="indicator">
          <span className="indicator-item badge">{userOrders.length}</span>
          <button className="text-2xl">
            <AiOutlineShoppingCart />
          </button>
        </div>
      </CustomLink>
      {user ? (
        <div style={{ zoom: "85%" }} className="dropdown dropdown-end">
          <label tabIndex="1">
            <div className="avatar">
              <div className="w-8 rounded-full ring ring-primary ">
                <img
                  src="https://api.lorem.space/image/face?hash=3174"
                  alt="Profile pic"
                />
              </div>
            </div>
          </label>
          <ul
            tabIndex="1"
            className="dropdown-content p-2 shadow bg-base-100 rounded-box w-72 h-screen"
          >
            <li>
              <a href="/">
                <div className="flex flex-col items-center">
                  <div className="w-1/2">
                    <img
                      src="https://api.lorem.space/image/face?hash=3174"
                      alt="Profile pic"
                    />
                  </div>
                  <div>
                    <h2 className="">{user?.email ? user?.email : ""}</h2>
                  </div>
                </div>
              </a>
            </li>
            <li className="mt-3">
              <div className="flex w-full">
                <span className="text-xl">
                  <MdManageAccounts />
                </span>
                <Link
                  to="/dashboard/account"
                  className="link-accent no-underline"
                >
                  Manage Account
                </Link>
              </div>
            </li>
            <li className="mt-3">
              <div className="flex w-full">
                <span className="text-xl">
                  <MdOutlineDashboardCustomize />
                </span>
                <Link to="/dashboard" className="link-accent no-underline">
                  Dashboard
                </Link>
              </div>
            </li>
            <li className="mt-3">
              <div className="flex w-full">
                <span className="text-xl">
                  <AiOutlineUnorderedList />
                </span>
                <Link to="/dashboard" className="link-accent no-underline">
                  My Orders
                </Link>
              </div>
            </li>
            <li className="mt-3">
              <div className="flex w-full">
                <span className="text-xl">
                  <SiManageiq />
                </span>
                <Link
                  to="/dashboard/manageProduct"
                  className="link-accent no-underline"
                >
                  Manage Product
                </Link>
              </div>
            </li>
            <li className="mt-3">
              <div className="flex w-full">
                <span className="text-xl">
                  <AiOutlineLogout />
                </span>
                <span className="w-full" onClick={() => signOut(auth)}>
                  Logout
                </span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <CustomLink to="/login">Login</CustomLink>
      )}
    </>
  );
};

export default MenuItems;