//import node modules libraries
<<<<<<< HEAD
import { IconLogin2 } from "@tabler/icons-react";
=======
"use client";
import useAdmin from "hooks/useAdmin";
import { IconLock, IconLogin2 } from "@tabler/icons-react";
>>>>>>> fa7e5f5 (login auth completed)
import Link from "next/link";
import React from "react";
import { Dropdown, Image } from "react-bootstrap";

//import routes files
// import { UserMenuItem } from "routes/HeaderRoute";

//import custom components
import { Avatar } from "components/common/Avatar";
import { getAssetPath } from "helper/assetPath";

interface UserToggleProps {
  children?: React.ReactNode;
  onClick?: () => void;
}
const CustomToggle = React.forwardRef<HTMLAnchorElement, UserToggleProps>(
  ({ children, onClick }, ref) => (
    <Link ref={ref} href="#" onClick={onClick}>
      {children}
    </Link>
  )
);

const UserMenu = () => {
<<<<<<< HEAD
=======
  const admin = useAdmin();
>>>>>>> fa7e5f5 (login auth completed)
  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle}>
        <Avatar
          type="image"
<<<<<<< HEAD
          src={getAssetPath("/images/avatar/avatar-1.jpg")}
=======
          src={getAssetPath("/images/avatar/avatar-15.jpg")}
>>>>>>> fa7e5f5 (login auth completed)
          size="sm"
          alt="User Avatar"
          className="rounded-circle"
        />
      </Dropdown.Toggle>
<<<<<<< HEAD
      <Dropdown.Menu align="end" className="p-0 dropdown-menu-md">
        <div className="d-flex gap-3 align-items-center border-dashed border-bottom px-4 py-4">
          <Image
            src={getAssetPath("/images/avatar/avatar-1.jpg")}
            alt=""
            className="avatar avatar-md rounded-circle"
          />
          <div>
            <h4 className="mb-0 fs-5">Jitu Chauhan</h4>
            <p className="mb-0 text-secondar small">@imjituchauhan</p>
          </div>
=======
      <Dropdown.Menu align="end" className="p-0 dropdown-menu-sm">
        <div className="align-items-center border-dashed border-bottom px-4 py-4">
          <h4 className="mb-0 fs-6 text-center">{admin?.username || "username"}</h4>
>>>>>>> fa7e5f5 (login auth completed)
        </div>
        {/* <div className="p-3 d-flex flex-column gap-1">
          {UserMenuItem.map((item) => (
            <Dropdown.Item
              key={item.id}
              className="d-flex align-items-center gap-2"
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </Dropdown.Item>
          ))}
        </div> */}
<<<<<<< HEAD
        <div className="border-dashed border-top mb-4 pt-4 px-6">
          <Link
            href=""
            className="text-secondary d-flex align-items-center gap-2"
=======

        <div className="border-dashed border-top mb-2 pt-2 px-2">
          <Link
            href=""
            className="text-secondary fw-bold d-flex align-items-center gap-2">
            <span>
              <IconLock size={20} strokeWidth={1.5} />
            </span>
            <span>संकेतशब्द बदला</span>
          </Link>
        </div>
        
        <div className="mb-4 pt-4 px-3">
          <Link
            href=""
            className="text-secondary fw-bold d-flex align-items-center gap-2"
            onClick={(e) => {
              e.preventDefault(); // prevent default link behavior
              // Logout logic
              sessionStorage.removeItem("admin");
              window.location.href = "/sign-in"; // redirect to login
            }}
>>>>>>> fa7e5f5 (login auth completed)
          >
            <span>
              <IconLogin2 size={20} strokeWidth={1.5} />
            </span>
<<<<<<< HEAD
            <span>Logout</span>
          </Link>
        </div>
=======
            <span>लॉग आऊट</span>
          </Link>
        </div>


>>>>>>> fa7e5f5 (login auth completed)
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserMenu;
