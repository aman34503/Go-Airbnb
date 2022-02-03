import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
import { Button } from "@material-ui/core";

function Header() {
	return (
		<div className="header">
			<img
				className="header__icon"
				src="https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png"
				alt=""
			/>

			<div className="header__center">
				<input type="text" placeholder="Start your search"/>
				<Button>
					<SearchIcon />
				</Button>
			</div>

			<div className="header__right">
				<p>Become a host</p>
			    <LanguageIcon />
				<div class="icon">
				<Avatar />
				</div>
			</div>
		</div>
	);
}

export default Header;
