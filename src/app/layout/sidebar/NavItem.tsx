import React from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Box from '@mui/material/Box';
import { styled, useTheme } from "@mui/material/styles";
import type { SidebarItem } from "./MenuItems";

interface ItemType {
  item: SidebarItem;
  pathDirect: string;
  open: boolean;
}

const IconContainer = styled(Box)(({ theme }) => ({
  minWidth: '38px',
  padding: '5px',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: theme.transitions.create('backgroundColor', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.standard,
  }),
}));

export default function NavItem({ item, pathDirect, open }: ItemType) {
  const Icon = item.icon;
  const theme = useTheme();

  const ListItemStyled = styled(Box)(() => ({
    whiteSpace: "nowrap",
    marginBottom: "2px",
    padding: "5px 0px 5px 0",
    color: pathDirect === item?.href ? `${theme.palette.secondary.main}!important` : theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
  }));

  const listItemProps: {
    to?: any;
    selected: boolean;
  } = {
    to: item?.href,
    selected: pathDirect === item?.href
  };

  return (
    <List component="li" disablePadding key={item.title}>
      <Link href={item.href} style={{ textDecoration: "none" }}>
        <ListItemStyled {...listItemProps}>
          <IconContainer
            sx={{
              backgroundColor: pathDirect === item?.href ? theme.palette.secondary.main : 'transparent',
            }}
          >
            <Icon 
              stroke={2} 
              size="1.3rem" 
              style={{ 
                color: pathDirect === item?.href ? theme.palette.text.secondary :  theme.palette.text.primary,
              }} 
            />
          </IconContainer>
          {open && 
            <ListItemText sx={{ ml: 2 }}>
              {item?.title}
            </ListItemText>
          }
        </ListItemStyled>
      </Link>
    </List>
  );
}
