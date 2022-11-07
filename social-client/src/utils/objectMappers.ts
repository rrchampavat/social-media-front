const menuAtLeft = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "right",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "right",
  },
};

const menuAtRight = {
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
};

export const menuPosition = (position: any) => {
  const menuPositions = {
    left: menuAtLeft,
    right: menuAtRight,
  };

  // type ObjectKey = keyof typeof menuPositions;

  // const myVar = position as ObjectKey;

  //   @ts-ignore
  if (menuPositions[position]) {
    //   @ts-ignore
    return menuPositions[position];
  }
};
