import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { CSSObject, Theme, styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  background:
    "linear-gradient(180deg, rgba(7,1,25,1) 0%, rgba(17,3,56,1) 44%, rgba(1,1,106,1) 100%)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  background:
    "linear-gradient(180deg, rgba(7,1,25,1) 0%, rgba(17,3,56,1) 44%, rgba(1,1,106,1) 100%)",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  display: "none",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,

    duration: theme.transitions.duration.leavingScreen,
  }),

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  background: "red",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function SideBar({
  theme,
  children,
  slug,
  sideBarItems,
}: {
  theme: Theme;
  children: React.ReactNode;
  slug: string;
  sideBarItems: {
    title: string;
    icon: React.ReactNode;
    iconHovered: React.ReactNode;
    link: string;
  }[];
}) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [listItemIsHovered, setListItemIsHovered] = useState([false, ""]);
  // slug

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {open ? (
              <ChevronLeftIcon sx={{ color: "#fff", fontSize: "2rem" }} />
            ) : (
              <ChevronRightIcon sx={{ color: "#fff", fontSize: "2rem" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {sideBarItems.map((item, index) => (
            <ListItem
              key={index}
              disablePadding
              sx={{
                display: "block",
                padding: "0 0.2rem",
              }}
              onMouseOver={() => setListItemIsHovered([true, item.link])}
              onMouseLeave={() => setListItemIsHovered([false])}
            >
              <ListItemButton
                sx={[
                  { "&:hover": { background: "rgba(255,255,255,0.3)" } },
                  {
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    marginBottom: "0.5rem",
                    borderRadius: 2,
                    ...(slug === item.link.split("/")[2] && {
                      background: "rgba(255,255,255,0.3)",
                    }),
                  },
                ]}
                onClick={() => router.push(item.link)}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {(listItemIsHovered[0] &&
                    listItemIsHovered[1] === item.link) ||
                  slug === item.link
                    ? item.icon
                    : item.iconHovered}
                </ListItemIcon>
                <ListItemText
                  primary={item.title}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider color="#fff" />
        <List>
          <ListItem
            disablePadding
            sx={{
              display: "block",
              padding: "0 0.2rem",
            }}
          >
            <ListItemButton
              sx={[
                {
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                  borderRadius: 2,
                },
                { "&:hover": { background: "rgba(255,255,255,0.3)" } },
              ]}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <ExitToAppIcon sx={{ color: "#fff" }} />
              </ListItemIcon>
              <ListItemText
                primary={"Se déconnecter"}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
