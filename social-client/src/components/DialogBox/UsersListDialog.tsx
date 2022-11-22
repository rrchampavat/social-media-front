import {
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from "@mui/material";
import appTheme from "../../utils/theme";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import CustomBotton from "../CustomBotton";

interface USER {
  userId: string;
  username: string;
  avatar: string;
  following: boolean;
  userType: string;
}

interface UserListDialogProps {
  title?: string;
  open: boolean;
  handleClose: Function;
  data: Array<USER>;
}

const UsersListDialog = (props: UserListDialogProps) => {
  const { data, handleClose, open, title } = props;

  const isMDView = useMediaQuery("(min-width:600px)");

  return (
    <Dialog
      // @ts-ignore
      onClose={handleClose}
      open={open}
    >
      <List
        sx={{
          width: { xs: 300, md: 500 },
          bgcolor: appTheme.palette.primary.contrastText,
          "::-webkit-scrollbar ": {
            display: "none",
          },
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            zIndex: 1,
            backgroundColor: appTheme.palette.primary.contrastText,
            width: { xs: 300, md: 500 },
            top: 0,
          }}
        >
          {title ? (
            <DialogTitle>
              <Typography
                variant={isMDView ? "h5" : "h6"}
                color={appTheme.palette.primary.dark}
                mx="auto"
                width="fit-content"
                fontFamily="Inter, 'system-ui', 'sans-serif'"
              >
                {title === "Following" ? title : title + "s"}
              </Typography>
            </DialogTitle>
          ) : null}

          <IconButton
            sx={{
              height: 40,
              width: 40,
              ml: "auto",
              mr: 1,
              color: appTheme.palette.primary.dark,
            }}
            onClick={() => handleClose()}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </Box>

        {data?.map((user) => (
          <ListItemButton
            key={user.userId}
            sx={{
              pr: 0,
            }}
          >
            <ListItem
              sx={{ p: 0 }}
              secondaryAction={
                <CustomBotton
                  label={
                    user.userType === "Following"
                      ? user.userType
                      : user.following
                      ? "Following"
                      : "Follow"
                  }
                  variant="outlined"
                  sx={{
                    width: { xs: 10, md: 110 },
                    borderColor: appTheme.palette.primary.dark,
                    color: appTheme.palette.primary.dark,
                    fontSize: { xs: 9, md: 12 },
                  }}
                />
              }
            >
              <Avatar
                sx={{
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                  mr: { xs: 1, md: 2 },
                }}
                src={user.avatar}
              />

              <ListItemText
                primary={user?.username}
                sx={{
                  ".css-10hburv-MuiTypography-root": {
                    fontSize: { xs: 12, md: "1rem" },
                  },
                }}
              />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </Dialog>
  );
};

export default UsersListDialog;
