import {
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
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

  return (
    <Dialog
      // @ts-ignore
      onClose={handleClose}
      open={open}
    >
      <List
        sx={{
          width: 500,
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
            position: "fixed",
            zIndex: 1,
            backgroundColor: appTheme.palette.primary.contrastText,
            width: 500,
            top: 32,
            borderRadius: 1,
          }}
        >
          {title ? (
            <DialogTitle>
              <Typography
                variant="h5"
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
              top: 54,
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
                    width: 110,
                    borderColor: appTheme.palette.primary.dark,
                    color: appTheme.palette.primary.dark,
                  }}
                />
              }
            >
              <ListItemAvatar>
                <Avatar src={user.avatar} />
              </ListItemAvatar>
              <ListItemText primary={user?.username} />
            </ListItem>
          </ListItemButton>
        ))}
      </List>
    </Dialog>
  );
};

export default UsersListDialog;
