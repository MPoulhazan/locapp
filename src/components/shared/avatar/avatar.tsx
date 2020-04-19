import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

import { deepPurple } from "@material-ui/core/colors";
import { User } from "../../../models/user";

const useStyles = makeStyles({
  smallAvatar: {
    margin: 10
  },
  mediumAvatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  bigAvatar: {
    margin: 10,
    width: 100,
    height: 100
  },
  purpleAvatar: {
    margin: 10,
    color: "#fff",
    backgroundColor: deepPurple[500]
  }
});

export enum AvatarSize {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big"
}

interface AvatarProps {
  user: User;
  size: AvatarSize;
}

function getInitialNameFromUser(user: User): string {
  if (user.lastName && user.firstName) {
    return user.firstName.charAt(0) + user.lastName.charAt(0);
  }
  return user.email.substring(0, 2);
}

export default function UserAvatar(props: AvatarProps) {
  const classes = useStyles();

  const getAvatarClasses = (size: AvatarSize) => {
    if (size === AvatarSize.SMALL) {
      return classes.smallAvatar;
    }
    if (size === AvatarSize.MEDIUM) {
      return classes.mediumAvatar;
    }
    return classes.bigAvatar;
  };

  return props.user.avatar ? (
    <Avatar
      alt={getInitialNameFromUser(props.user)}
      src={props.user.avatar}
      className={getAvatarClasses(props.size)}
    />
  ) : (
    <Avatar className={classes.purpleAvatar}>
      {getInitialNameFromUser(props.user)}
    </Avatar>
  );
}
