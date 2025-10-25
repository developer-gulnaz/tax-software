"use client";
//import node module libraries
import {
  IconArrowBarLeft,
  IconArrowBarRight,
  IconMenu2
} from "@tabler/icons-react";
import Link from "next/link";
import { Fragment } from "react";
import { Container, ListGroup, Navbar } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";

//import custom components
import Flex from "components/common/Flex";
import OffcanvasSidebar from "layouts/OffcanvasSidebar";
import UserMenu from "./UserMenu";

//import custom hooks
import useMenu from "hooks/useMenu";

const Header = () => {
  const { toggleMenuHandler, handleCollapsed } = useMenu();

  const isTablet = useMediaQuery({ maxWidth: 990 });

  return (
    <Fragment>
      <Navbar expand="lg" className="navbar-glass px-0 px-lg-4">
        <Container fluid className="px-lg-0">
          <Flex alignItems="center" className="gap-4">
            {isTablet && (
              <div
                className="d-block d-lg-none"
                style={{ cursor: "pointer" }}
                onClick={() => toggleMenuHandler(true)}
              >
                <IconMenu2 size={24} />
              </div>
            )}
            {isTablet || (
              <div>
                <Link href={"#"} className="sidebar-toggle d-flex p-3">
                  <span
                    className="collapse-mini"
                    onClick={() => handleCollapsed("expanded")}
                  >
                    <IconArrowBarLeft
                      size={20}
                      strokeWidth={1.5}
                      className="text-secondary"
                    />
                  </span>
                  <span
                    className="collapse-expanded"
                    onClick={() => handleCollapsed("collapsed")}
                  >
                    <IconArrowBarRight
                      size={20}
                      strokeWidth={1.5}
                      className="text-secondary"
                    />
                  </span>
                </Link>
              </div>
            )}
          </Flex>
          <ListGroup
            bsPrefix="list-unstyled"
            as={"ul"}
            className="d-flex align-items-center mb-0 gap-2"
          >
<<<<<<< HEAD
            

           
=======

>>>>>>> fa7e5f5 (login auth completed)
            <ListGroup.Item as="li">
              <UserMenu />
            </ListGroup.Item>
          </ListGroup>
        </Container>
      </Navbar>
<<<<<<< HEAD
     
=======

>>>>>>> fa7e5f5 (login auth completed)
      {isTablet && <OffcanvasSidebar />}
    </Fragment>
  );
};

export default Header;
