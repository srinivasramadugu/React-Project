import React, { Component } from 'react'

class productlist extends Component {
    render() {
        return (
            <div>
               <div className="maincontent">
               <div className="shopping_cart_pg_content">
                    <div className="container-fluid">
                        <div className="row">
                                <div className="col-xl-2 col-lg-3 col-md-3">
                                    <div className="shopping_cart_leftbar wow fadeIn" data-wow-duration="1s">
                                        <div className="shop_category">
                                            <h3 className="subtitle">Shop by Category</h3>
                                            <ul className="list_shop_category list-unstyled">
                                                <li>
                                                    <span className="icon_plus">+ </span> 
                                                    <span className="txt">Dapibus etiam non</span>
                                                </li>
                                                <li>
                                                    <span className="icon_plus">+ </span> 
                                                    <span className="txt">Pellentesque imperdiet</span>
                                                </li>
                                                <li>
                                                    <span className="icon_plus">+ </span> 
                                                    <span className="txt">Imperdiet mattis</span>
                                                </li>
                                                <li>
                                                    <span className="icon_plus">+ </span> 
                                                    <span className="txt">Dapibus augue</span>
                                                </li>
                                                <li>
                                                    <span className="icon_plus">+ </span> 
                                                    <span className="txt">Vivamus tempor nunc</span>
                                                </li>
                                                <li>
                                                    <span className="icon_plus">+ </span> 
                                                    <span className="txt">Lobortis eget</span>
                                                </li>
                                                <li>
                                                    <span className="icon_plus">+ </span> 
                                                    <span className="txt">Tellus convallis</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="sort_block">
                                            <h3 className="subtitle">Sort By</h3>
                                            <ul className="list_sort list-unstyled">
                                                <li>
                                                    <span className="icon">
                                                        <img src="assets/images/icons/heat_gray_color.svg" alt="" className="img-fluid"/>
                                                    </span>
                                                    <span className="txt_sort">Popularity</span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="assets/images/icons/star_gray_color.svg" alt="" className="img-fluid"/>
                                                    </span>
                                                    <span className="txt_sort">Latest</span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="assets/images/icons/discount_gray_color.svg" alt="" className="img-fluid"/>
                                                    </span>
                                                    <span className="txt_sort">Discount</span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="assets/images/icons/low_gray_color.svg" alt="" className="img-fluid"/>
                                                    </span>
                                                    <span className="txt_sort">Price: High to Low</span>
                                                </li>
                                                <li>
                                                    <span className="icon">
                                                        <img src="assets/images/icons/high_gray_color.svg" alt="" className="img-fluid"/>
                                                    </span>
                                                    <span className="txt_sort">Price: Low to High</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-9 col-md-12">
                                    <div className="shopping_cart_rightbar wow fadeIn" data-wow-duration="1.1s">
                                        <div className="row">
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/madhur.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/natural.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata_sa.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/vedka.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/dark_fantasy.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/maggi.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-3 col-lg-4 col-md-4">
                                                <div className="box_shopping_cart">
                                                    <a href="javascript:void(0)" className="link_offer">
                                                        -58%
                                                    </a>
                                                    <a href="javascript:void(0)" className="link_wishlist">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                                            <defs>
                                                                <clipPath id="a">
                                                                    <rect className="a" width="20" height="20" transform="translate(1458 38)"></rect>
                                                                </clipPath>
                                                            </defs>
                                                            <g className="b" transform="translate(-1458 -38)">
                                                                <path className="c" d="M20.25,21.75l-7-5-7,5v-16a2,2,0,0,1,2-2h10a2,2,0,0,1,2,2Z" transform="translate(1454.75 35.25)"></path>
                                                            </g>
                                                        </svg>
                                                    </a>
                                                    <div className="thumb">
                                                        <img src="assets/images/tata.png" alt="" className="img-fluid"/>
                                                    </div>
                                                    <div className="caption">
                                                        <h4 className="subtitle">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</h4>
                                                        <div className="rating_block">
                                                            <div className="starRating starRated">
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span className="active">
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                                <span>
                                                                    <i className="fa fa-star-o fa-2x"></i>
                                                                    <i className="fa fa-star fa-2x"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="value_add_block">
                                                            <div className="value_block">
                                                                <span className="txt_new_value">₹ 7186</span>
                                                                <span className="txt_old_value">₹550/-</span>
                                                            </div>
                                                            <a href="javascript:void(0)" className="link_add">
                                                                Add <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid"/>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                    </div>
               </div>
            </div>
        )
    }
}
export default productlist;