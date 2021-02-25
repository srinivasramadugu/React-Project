import React, { Component } from 'react'
        

class header extends Component {
    render() {
        return (
            <header className="header">
                 <div className="container-fluid">
                    <div className="inner_header">
                        <a href="javascript:void(0)" className="logo">
                            <img src="assets/images/logo.png" alt="Groceries" className="img-fluid"/>
                            <img src="./logo.png" alt="Groceries" className="img-fluid"/>
                        </a>
                        <div className="searchbar_box">
                            <div className="field_input_box">
                            <div className="icon_search">
                                <img src="../src/assets/images/icons/search_blue_color.svg" alt="" className="img-fluid"/>
                            </div>
                            <input type="text" className="field_input" value="Search from more than 10000 products"/>
                            </div>
                            <div className="location_block">
                            <div className="icon_map">
                                <img src="assets/images/icons/map_blue_color.svg" alt="" className="img-fluid"/>
                            </div>
                            <select name="" id="" className="field_select">
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Hyderabad">Hyderabad</option>
                                <option value="Chennai">Chennai</option>
                            </select>
                            </div>
                        </div>
                        <div className="toolbar_topnav_block">
                            <ul className="list_toolbar list-unstyled">
                                <li>
                                <a href="javascript:void(0)" className="link_toolbar">
                                    <img src="assets/images/icons/cart_blue_color.svg" alt="" className="img-fluid"/>
                                </a>
                                </li>
                                <li>
                                <a href="javascript:void(0)" className="link_toolbar">
                                    <img src="assets/images/icons/wishlist_blue_color.svg" alt="" className="img-fluid"/>
                                    <span className="txt_num">3</span>
                                </a>
                                </li>
                                <li>
                                <a href="javascript:void(0)" className="link_toolbar">
                                    <img src="assets/images/icons/user_blue_color.svg" alt="" className="img-fluid"/>
                                </a>
                                </li>
                            </ul>
                            <div className="top_nav">
                                <button className="btn_hamburger btn_desk" id="btn_desk_hamburger">
                                <img src="assets/images/icons/hamburger_blue_color.svg" alt="" className="img-fluid"/> 
                                </button>
                                <button className="btn_hamburger btn_mob toggle" id="btn_mob_hamburger">
                                <img src="assets/images/icons/hamburger_blue_color.svg" alt="" className="img-fluid"/> 
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        )
    }
}

export default header;