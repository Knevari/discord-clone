import React from "react";

import Logo from "../../assets/logo-rocketseat.svg";

import { Button } from "./styles";

export interface Props {
	selected?: boolean;
	home?: boolean;
	hasNotification?: boolean;
	mentions?: number;
}

const ServerButton: React.FC<Props> = ({
	selected,
	home,
	hasNotification,
	mentions,
}) => {
	return (
		<Button
			home={home}
			hasNotification={hasNotification}
			mentions={mentions}
			className={selected ? "active" : ""}
		>
			{home && <img src={Logo} alt="rocketseat" />}
		</Button>
	);
};

export default ServerButton;
