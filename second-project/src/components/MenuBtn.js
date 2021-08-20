import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";

import MoreVertIcon from "@material-ui/icons/MoreVert";
import PhoneIcon from "@material-ui/icons/Phone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

import sizes from "../root-styles/BreakPoints";
import colors from "../root-styles/Colors";
import fonts from "../root-styles/Fonts";
import styled from "styled-components";

export default function MenuBtn() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Root>
      <ButtonContainer
        aria-controls="fade-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Skontaktuj się z nami
        <MoreVertIcon />
      </ButtonContainer>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItemContainer onClick={handleClose}>
          <LinkContainer href="mailto:biuro@multi-okna.pl">
            <MailOutlineIcon />
            <hr />
          </LinkContainer>
        </MenuItemContainer>
        <MenuItemContainer onClick={handleClose}>
          <LinkContainer href="tel:(+48) 607-473-123">
            <PhoneIcon />
            <hr />
          </LinkContainer>
        </MenuItemContainer>
      </Menu>
    </Root>
  );
}

const Root = styled.div`
  padding: 0 20px 55px;
`;

const ButtonContainer = styled(Button)`
  color: ${colors.thirdDark};
  text-transform: uppercase;
  font-size: 1rem;
  padding: 5px 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

  & svg {
    position: inherit !important;
    font-size: 5rem;
    color: ${colors.mainBlue};
  }
`;

const MenuItemContainer = styled(MenuItem)`
  color: ${colors.mainBlue};
  text-transform: uppercase;
  font-size: 1rem;
  padding: 5px 15px;
`;

const LinkContainer = styled.a`
  width: 30px;

  & svg {
    position: inherit !important;
    font-size: 2rem;
    color: ${colors.mainBlue};
  }
`;
