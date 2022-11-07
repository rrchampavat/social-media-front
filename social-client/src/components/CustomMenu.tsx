import {
  Box,
  Divider,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { menuPosition } from "../utils/objectMappers";
import theme from "../utils/theme";

interface CustomMenuProps {
  open: boolean;
  menuList: Array<any>;
  handleClose: any;
  sx?: Object;
  anchorEl: HTMLElement | null;
  menuAt: string;
}

interface MenuListProps {
  label: String;
  navigateTo?: string;
  Icon?: any;
}

const CustomMenu = (props: CustomMenuProps) => {
  const { menuList, open, handleClose, sx, anchorEl, menuAt } = props;

  const navigate = useNavigate();

  const handleAction = (navigateTo: string | undefined) => {
    navigateTo && navigate(navigateTo);
    handleClose();
  };

  const position = menuPosition(menuAt);

  return (
    <Menu
      open={open}
      onClose={handleClose}
      sx={sx}
      anchorEl={anchorEl}
      anchorOrigin={position?.anchorOrigin}
      transformOrigin={position?.transformOrigin}
    >
      {menuList?.map(({ label, navigateTo, Icon }: MenuListProps, id) => (
        <Box key={id}>
          <MenuItem onClick={() => handleAction(navigateTo)}>
            {Icon ? (
              <ListItemIcon
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  mr: 1,
                  color:
                    Icon.type.render.displayName === "ReportIcon"
                      ? "red"
                      : () => theme.palette.primary.main,
                }}
              >
                <Icon />
              </ListItemIcon>
            ) : null}

            <ListItemText>{label}</ListItemText>
          </MenuItem>
          <Divider sx={{ display: id === menuList.length - 1 ? "none" : "" }} />
        </Box>
      ))}
    </Menu>
  );
};

export default CustomMenu;
