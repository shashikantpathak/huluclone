import React from "react";
import "../css/Header.css";
import HomeIcon from "@material-ui/icons/Home";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";

function Header() {
    return (
        <div className="header">
            <div className="header-icons">
                <div className="header-icon header-icon--active">
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className="header-icon">
                    <FlashOnIcon />
                    <p>Trending</p>
                </div>
                <div className="header-icon">
                    <LiveTvIcon />
                    <p>Verified</p>
                </div>
                <div className="header-icon">
                    <VideoLibraryIcon />
                    <p>Collections</p>
                </div>
                <div className="header-icon">
                    <SearchIcon />
                    <p>Search</p>
                </div>
                <div className="header-icon">
                    <PersonOutlineIcon />
                    <p>Account</p>
                </div>
            </div>
            <img
                src="https://www.freeiconspng.com/thumbs/hulu-icon/hulu-icon-5.png"
                alt="Holo Icon"
            />
        </div>
    );
}

export default Header;
