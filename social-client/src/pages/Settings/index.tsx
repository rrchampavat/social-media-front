import { Box, Grid, ListItemButton, ListItemText, Paper } from "@mui/material";
import { useState } from "react";
import { settingsMenu } from "../../utils/constants";
import appTheme from "../../utils/theme";
import AppsWebsites from "./components/Apps&Websites";
import ChangePassword from "./components/ChangePassword";
import DigitalCollectibles from "./components/DigitalCollectibles";
import EditProfileForm from "./components/EditProfileForm";
import EmailNotifications from "./components/EmailNotifications";
import Help from "./components/Help";
import LoginActivity from "./components/LoginActivity";
import ManageContacts from "./components/ManageContacts";
import PushNotifications from "./components/PushNotifications";
import PvcSec from "./components/Pvc&Sec";
import Supervision from "./components/Supervision";

const Settings = () => {
  const [selectedMenu, setSelectedMenu] = useState<string>("Edit Profile");

  const renderMenuPage = (menu: string) => {
    switch (menu) {
      case "Edit Profile":
        return <EditProfileForm />;

      case "Change Password":
        return <ChangePassword />;

      case "Apps and websites":
        return <AppsWebsites />;

      case "Email notifications":
        return <EmailNotifications />;

      case "Push notifications":
        return <PushNotifications />;

      case "Manage contacts":
        return <ManageContacts />;

      case "Privacy and security":
        return <PvcSec />;

      case "Supervision":
        return <Supervision />;

      case "Login activity":
        return <LoginActivity />;

      case "Help":
        return <Help />;

      case "Digital collectibles":
        return <DigitalCollectibles />;

      default:
        break;
    }
  };

  const handleClick = (menu: string) => {
    setSelectedMenu(menu);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "89.7vh",
        maxHeight: "89.7vh",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          background: appTheme.palette.primary.contrastText,
          width: "70%",
          height: "90%",
          m: "auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container height="100%">
          <Grid item md={2.5}>
            {settingsMenu?.map((menu) => (
              <ListItemButton
                key={menu.title}
                onClick={() => handleClick(menu.title)}
                sx={{
                  borderLeft:
                    menu.title === selectedMenu
                      ? `3px solid ${appTheme.palette.primary.dark}`
                      : "none",
                }}
              >
                <ListItemText primary={menu.title} />
              </ListItemButton>
            ))}
          </Grid>

          <Grid
            item
            md={9.5}
            display="flex"
            flexDirection="column"
            sx={{ borderLeft: "1px solid #dfdfdf" }}
            height="80.7vh"
          >
            {renderMenuPage(selectedMenu)}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Settings;
