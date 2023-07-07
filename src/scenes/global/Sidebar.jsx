import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={`data:image/jpeg;base64,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`}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  Cee Hacker
                </Typography>
                <Typography variant="h5" color={colors.greenAccent[500]}>
                  Safety Marshall
                </Typography>
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Manage Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Contacts Information"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Equipments"
              to="/equipments"
              icon={<ReceiptOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Profile Form"
              to="/form"
              icon={<PersonOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie Chart"
              to="/pie"
              icon={<PieChartOutlineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line Chart"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Geography Chart"
              to="/geography"
              icon={<MapOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
