import styled from "@emotion/styled";
import { MenuOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  width: 100%;
  height: 10%;
  position: relative;
  display: flex;
  flex-direction: column;
  border-bottom: 0.063rem solid #cccccc;
  @media (max-width: 767px) {
    width: 100%;
    border-bottom: 0.12rem solid #d2d2d2;
  }
`;

export const InsideWrapper = styled.div`
  width: 100%;
  /* height: 4.375rem; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 0px 1.875rem;
  margin-top: 0.625rem;
`;

export const LogoMenuWrapper = styled.div`
  width: 37.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 0.625rem;
  @media (max-width: 767px) {
    width: 100%;
    margin: 1rem 0;
    justify-content: center;
  }
`;

export const LogoImg = styled.img`
  height: 2.813rem;
  cursor: pointer;
  @media (max-width: 767px) {
    /* display: none; */
    height: 4rem;
    margin-right: 35%;
  }
`;

export const NavBarWrapper = styled.div`
  width: 20rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const Menu = styled.div`
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  color: #323232;
  cursor: pointer;
  :hover {
    color: #ffe69a;
    border-bottom: 0.063rem solid #ffe69a;
  }
`;

export const UserMenuWrapper = styled.div`
  width: 8.75rem;
  height: 3.75rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 767px) {
    display: none;
  }
`;

export const UserMenu = styled.div`
  height: 1.875rem;
  cursor: pointer;
  :hover {
    font-weight: 900;
  }
`;
export const MenuIconWrapper = styled.div`
  display: none;
  margin-right: auto;
  @media (max-width: 767px) {
    display: block;
  }
`;

export const MenuIcon = styled(MenuOutlined)`
  font-size: 3rem;
  cursor: pointer;
`;
// export const LogoImgMobile = styled.img`
//   height: 2.813rem;
//   cursor: pointer;
//   display: none;
//   @media (max-width: 767px) {
//     height: 4rem;
//     display: block;
//     margin-right: auto;
//   }
// `;

export const MobileMenuWrapper = styled.div`
  width: 80%;
  height: 100vh;
  display: none;

  background-color: aqua;
  margin-right: auto;
  @media (max-width: 767px) {
    display: ${(props: any) => (props.isOpen ? "none" : "flex")};
    flex-direction: column;
    justify-content: center;
    position: fixed;
    top: -61px;
  }
`;
export const Flex = styled.div`
  width: 80%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  position: absolute;
`;
