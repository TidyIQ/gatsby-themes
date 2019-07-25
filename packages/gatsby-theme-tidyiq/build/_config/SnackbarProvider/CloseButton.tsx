/**
 * Button to close snackbar
 */

import React, { FC } from "react";
import IconButton from "@material-ui/core/IconButton";
import { useSnackbar } from "notistack";
import CloseIcon from "@material-ui/icons/Close";

interface CloseSnackbarProps {
  id: string | number | undefined;
}

const CloseButton: FC<CloseSnackbarProps> = ({ id }) => {
  const { closeSnackbar } = useSnackbar();
  return (
    <IconButton
      aria-label="Close notification"
      color="inherit"
      onClick={() => closeSnackbar(id)}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );
};

export default CloseButton;
