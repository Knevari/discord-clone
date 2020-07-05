import React from "react";

import {
	Container,
	Profile,
	Avatar,
	UserData,
	Icons,
	MicIcon,
	HeadphonesIcon,
	SettingsIcon,
} from "./styles";

const UserInfo: React.FC = () => {
	return (
		<Container>
			<Profile>
				<Avatar />
				<UserData />
			</Profile>

			<Icons>
				<MicIcon />
				<HeadphonesIcon />
				<SettingsIcon />
			</Icons>
		</Container>
	);
};

export default UserInfo;
