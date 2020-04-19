import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import UserAvatar, { AvatarSize } from "../avatar/avatar";
import { User } from "../../../models/user";
import Description from "../../description/description";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			maxWidth: 345
		},
		media: {
			height: 0,
			paddingTop: "56.25%" // 16:9
		},
		expand: {
			transform: "rotate(0deg)",
			marginLeft: "auto",
			transition: theme.transitions.create("transform", {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: "rotate(180deg)"
		},
		avatar: {
			backgroundColor: red[500]
		}
	})
);
export interface CardData {
	title: string;
	image: string;
	date: string;
	description: string;
	alt: string;
	user: User;
}
interface CardProps {
	data: CardData;
}

export default function CompleteCard(props: CardProps) {
	return (
		<Card>
			<CardHeader
				avatar={
					<UserAvatar
						size={AvatarSize.SMALL}
						user={props.data.user}
					></UserAvatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon /> <div className="card"></div>
					</IconButton>
				}
				title={props.data.title}
				subheader={props.data.date}
			/>
			<CardMedia image={props.data.image} title={props.data.alt} />
			<CardContent>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.data.description}
				</Typography>
			</CardContent>
		</Card>
	);
}
