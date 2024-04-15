"use client";

import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, Palette, ThemeProvider } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import isAuth from "../../../components/isAuth/isAuth";
import DashboardComponent from "../components/dashboardComponent/DashboardComponent";
import ProjectComponent from "../components/projectComponent/ProjectComponent";
import SideBar from "../components/sideBarComponent/SideBar";
declare module "@mui/material/styles" {
  interface Theme {
    typography: {
      fontFamily: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    typography?:
      | TypographyOptions
      | ((palette: Palette) => TypographyOptions)
      | undefined;
  }
}
const Dashboard = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat, sans-serif",
    },
  });
  const sideBarItems = [
    {
      title: "Tableau de bord",
      icon: <SpaceDashboardIcon sx={{ color: "#fff", fontSize: "2rem" }} />,
      iconHovered: (
        <SpaceDashboardOutlinedIcon sx={{ color: "#fff", fontSize: "2rem" }} />
      ),
      link: `/dashboard/Tableau-de-bord`,
    },
    {
      title: "Mes projets",
      icon: <RocketLaunchIcon sx={{ color: "#fff" }} />,
      iconHovered: <RocketLaunchOutlinedIcon sx={{ color: "#fff" }} />,
      link: `/dashboard/Mes-projets`,
    },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SideBar theme={theme} slug={slug} sideBarItems={sideBarItems}>
        {slug == "Tableau-de-bord" ? (
          <DashboardComponent />
        ) : (
          <ProjectComponent />
        )}
      </SideBar>
    </ThemeProvider>
  );
};

export default isAuth(Dashboard);
