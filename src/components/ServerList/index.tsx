import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
	return (
		<Container>
			<ServerButton home />
			<Separator />
			<ServerButton />
			<ServerButton hasNotification />
			<ServerButton mentions={3} />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton hasNotification />
			<ServerButton hasNotification />
			<ServerButton mentions={770} />
			<ServerButton />
			<ServerButton />
			<ServerButton />
		</Container>
	);
};

export default ServerList;
