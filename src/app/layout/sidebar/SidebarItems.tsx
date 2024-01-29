import React, { useState } from "react";
import { MenuItemsAdmin, MenuItemsSupervisor } from "./MenuItems";
import { usePathname } from "next/navigation";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import { useAppSelector } from "@/app/redux/hooks";
import type { SidebarItem } from "./MenuItems";

const SidebarItems = ({ open }: any) => {
  const pathname = usePathname();
  const pathDirect = pathname;
  const userAuth = useAppSelector(state => state.auth.user)
  const [menuItems, setMenuItems] = useState(userAuth?.role === 'admin' ? MenuItemsAdmin : MenuItemsSupervisor)

  return (
    <Box>
      <List sx={{ pt: 0 }} className="sidebarNav" component="div">
        {menuItems.map((item: SidebarItem) => {
            return (
              <NavItem
                item={item}
                key={item.title}
                pathDirect={pathDirect}
                open={open}
              />
            );
        })}
      </List>
    </Box>
  );
};
export default SidebarItems;
