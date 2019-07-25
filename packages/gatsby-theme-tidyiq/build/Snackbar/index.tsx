// /**
//  * Snackbar component to display notifications
//  */

// import React, { FC, ComponentType } from "react";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Snackbar, { SnackbarProps } from "@material-ui/core/Snackbar";
// import SnackbarContent from "@material-ui/core/SnackbarContent";
// import Button, { ButtonProps } from "@material-ui/core/Button";
// import IconButton, { IconButtonProps } from "@material-ui/core/IconButton";
// import SuccessIcon from "@material-ui/icons/CheckCircle";
// import ErrorIcon from "@material-ui/icons/Error";
// import InfoIcon from "@material-ui/icons/Info";
// import WarningIcon from "@material-ui/icons/Warning";
// import CloseIcon from "@material-ui/icons/Close";
// import { SvgIconProps } from "@material-ui/core/SvgIcon";
// import { useSelector, useDispatch } from "react-redux";
// import { State, actions } from "..";
// import undoActions from "../_config/state/snackbar/undoActions/user";

// /**
//  * Variant properties
//  */

// interface UseVariant {
//   (variant: State["snackbar"]["variant"]): {
//     color: string;
//     Icon: ComponentType<SvgIconProps>;
//   };
// }

// const useVariant: UseVariant = variant => {
//   const theme = useTheme();
//   const snackbarVariants = {
//     error: {
//       color: theme.statusPalette.error.main,
//       Icon: ErrorIcon
//     },
//     info: {
//       color: theme.statusPalette.info.main,
//       Icon: InfoIcon
//     },
//     success: {
//       color: theme.statusPalette.success.main,
//       Icon: SuccessIcon
//     },
//     warning: {
//       color: theme.statusPalette.warn.main,
//       Icon: WarningIcon
//     }
//   };
//   return snackbarVariants[variant];
// };

// /**
//  * Styling
//  */

// interface StylesProps {
//   readonly color: string;
// }

// const useStyles = makeStyles(theme => ({
//   closeBtn: {
//     padding: theme.spacing(0.5)
//   },
//   closeIcon: {
//     fontSize: 20
//   },
//   iconVariant: {
//     marginRight: theme.spacing(1),
//     opacity: 0.9
//   },
//   message: {
//     alignItems: "center",
//     display: "flex"
//   },
//   snackbarContent: (props: StylesProps) => ({
//     backgroundColor: props.color,
//     color: theme.palette.getContrastText(props.color)
//   }),
//   undoBtn: {
//     marginTop: "0"
//   }
// }));

// /**
//  * Component
//  */

// const MySnackbar: FC = () => {
//   const state = useSelector((getState: State) => getState);
//   const dispatch = useDispatch();
//   const { message, open, undo, variant } = state.snackbar;
//   const { close } = actions.snackbar;
//   const { color, Icon } = useVariant(variant);
//   const classes = useStyles({ color });
//   const hasUndo = undo !== null;

//   const handleCloseClick: IconButtonProps["onClick"] = () => {
//     dispatch(close());
//   };

//   const handleCloseSynthetic: SnackbarProps["onClose"] = (_event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     dispatch(close());
//   };

//   const handleUndo: ButtonProps["onClick"] = () => {
//     dispatch(close());
//     if (undo) {
//       undoActions.test();
//     }
//   };

//   return (
//     <Snackbar
//       anchorOrigin={{
//         horizontal: "left",
//         vertical: "bottom"
//       }}
//       autoHideDuration={5000}
//       onClose={handleCloseSynthetic}
//       open={open}
//     >
//       <SnackbarContent
//         aria-describedby="snackbar-message"
//         className={classes.snackbarContent}
//         message={
//           <span className={classes.message} id="snackbar-message">
//             <Icon className={classes.iconVariant} />
//             {message}
//           </span>
//         }
//         action={[
//           hasUndo ? (
//             <Button
//               aria-label="Undo last action"
//               className={classes.undoBtn}
//               color="inherit"
//               key="undo"
//               onClick={handleUndo}
//               size="small"
//             >
//               UNDO
//             </Button>
//           ) : (
//             ""
//           ),
//           <IconButton
//             aria-label="Close message"
//             color="inherit"
//             className={classes.closeBtn}
//             key="close"
//             onClick={handleCloseClick}
//           >
//             <CloseIcon className={classes.closeIcon} />
//           </IconButton>
//         ]}
//       />
//     </Snackbar>
//   );
// };
// export default MySnackbar;
