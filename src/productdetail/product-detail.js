
import React, { Component } from 'react'

class productdetail extends Component {
    render() {
        return (
        <div>
            <div className="maincontent">
                <div className="product_details_pg_content">
                    <div className="container-fluid">
                        <div className="row_one_products_details">
                            <div className="row">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="product_details_leftbar wow fadeIn" data-wow-duration="1s">
                                        <div className="product_image_zoom_roll_mouse_block">
                                            <div className="show" href="../assets/images/product-details/bg_product_details_01.jpg">
                                                <img src="assets/images/product-details/bg_product_details_01.jpg" id="show-img" />
                                            </div>
                                            <div className="small-img">
                                                <img src="assets/images/product-details/online_icon_right@2x.png" className="icon-left" alt="" id="prev-img" />
                                                <div className="small-container">
                                                    <div id="small-img-roll">
                                                        <img src="assets/images/product-details/bg_product_details_01.jpg" className="show-small-img" alt=""/>
                                                        <img src="assets/images/product-details/bg_product_details_02.jpg" className="show-small-img" alt=""/>
                                                        <img src="assets/images/product-details/bg_product_details_03.jpg" className="show-small-img" alt=""/>
                                                        <img src="assets/images/product-details/bg_product_details_04.jpg" className="show-small-img" alt=""/>
                                                        <img src="assets/images/product-details/bg_product_details_05.jpg" className="show-small-img" alt=""/>
                                                        <img src="assets/images/product-details/bg_product_details_06.jpg" className="show-small-img" alt=""/>
                                                    </div>
                                                </div>
                                                <img src="assets/images/product-details/online_icon_right@2x.png" className="icon-right" alt="" id="next-img"/>
                                            </div>
                                        </div>

                                        <div className="product_img_slider" id="product_img_slider">
                                            <div>
                                                <img src="assets/images/product-details/bg_product_details_01.jpg" alt="" className="img-fluid"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/product-details/bg_product_details_02.jpg" alt="" className="img-fluid"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/product-details/bg_product_details_03.jpg" alt="" className="img-fluid"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/product-details/bg_product_details_04.jpg" alt="" className="img-fluid"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/product-details/bg_product_details_05.jpg" alt="" className="img-fluid"/>
                                            </div>
                                            <div>
                                                <img src="assets/images/product-details/bg_product_details_06.jpg" alt="" className="img-fluid"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-6">
                                    <div className="product_details_middlebar wow fadeIn" data-wow-duration="1.1s">
                                        <div className="description_box">
                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod 
                                            tempor invidunt ut labore et dolore</p>
                                            <p className="txt_store">By The Pet store</p>
                                            <div className="review_rating_block">
                                            <div className="review_rating_left">
                                                <div className="starRating starRated">
                                                    <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                    <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                    <span className=""><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                    <span className="active"><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                    <span className=""><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                </div>
                                            </div>
                                            <span className="txt_review">25 Reviews</span>
                                            </div>
                                        </div>
                                        <div className="quantity_box">
                                            <p className="txt_qty">Select Quantity</p>
                                            <div className="button_quantity">
                                                <button className="btn btn_minus" field='quantity'>
                                                    <img src="assets/images/icons/minus_blue_color.svg" alt="" className="img-fluid" />
                                                </button>
                                                <input name="quantity" type="text" className="btn btn_num" className="qty" value="0"/>
                                                <button className="btn btn_plus" field='quantity'>
                                                    <img src="assets/images/icons/plus_blue_color.svg" alt="" className="img-fluid" />
                                                </button>
                                            </div>
                                        </div>
                                        <div className="size_block">
                                            <p className="txt_size">Select Size</p>
                                            <ul className="list_size">
                                                <li>
                                                    <a href="javascript:void(0)">S</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">M</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)">L</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="value_block">
                                            <span className="txt_value">₹ 2,500</span>
                                            <span className="txt_old_value">₹ 3000</span>
                                            <span className="txt_offer">(25% off)</span>
                                        </div>
                                        <div className="productdetail_desc">
                                            <h4 className="title">Product Details</h4>
                                            <div className="vegetarian_block">
                                                <span className="dot_veg_green">
                                                    <span className="circle"></span>
                                                </span>
                                                <p className="txt_desc">
                                                    This is a <strong>Vegetarian</strong> product
                                                </p>
                                            </div>
                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.</p>
                                            <p className="desc">Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                        </div>
                                        <div className="customer_rating_review_content">
                                            <h4 className="head_title">Customer Ratings and Reviews</h4>
                                            <div className="review_filter_block">
                                                <div className="review_left">
                                                    <a href="javascript:void()" className="link link_review">Write a Review</a>
                                                    {/* <a href="javascript:void()" className="link link_submit" style='display:none;'>Submit</a> */}
                                                    <a href="javascript:void()" className="link link_submit">Submit</a>
                                                </div>
                                                <div className="filter_right">
                                                    <select name="" id="" className="custom_selectreview">
                                                        <option value="Top Reviews">Top Reviews</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="scrollbar_content" id="rating_scrollbar">
                                                <div className="inner_ratingsfeedback">
                                                    <ul className="list_review">
                                                        <li className="item_review odd">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review even">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review odd">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review even">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review odd">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review even">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid" />
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review odd">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review even">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review odd">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review even">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review odd">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                        <li className="item_review even">
                                                            <div className="thumb_rating_block">
                                                                <div className="thumb_left">
                                                                    <div className="thumb">
                                                                        <img src="assets/images/userprofile.jpg" alt="" className="img-fluid"/>
                                                                    </div>
                                                                    <div className="caption">
                                                                        <h3 className="title">Janice Bailey</h3>
                                                                        <span className="txt_date">20th Apr 20</span>
                                                                    </div>
                                                                </div>
                                                                <div className="rating_right">
                                                                    <div className="starRating">
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                        <span><i className="fa fa-star-o fa-2x"></i><i className="fa fa-star fa-2x"></i></span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <p className="desc">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                                                            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. 
                                                            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, 
                                                            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3 col-md-12">
                                    <div className="product_details_rightbar wow fadeIn" data-wow-duration="1.2s">
                                        <div className="buynow_addcart_block">
                                            <a href="javascript:void(0)" className="btn btn_buynow">Buy Now</a>
                                            <a href="javascript:void(0)" className="btn btn_addcart">
                                                <img src="assets/images/icons/cart_blue_color.svg" alt="" className="img-fluid"/>
                                                Add to cart
                                            </a>
                                        </div>
                                        <div className="hr_divide">
                                            <span className="txt_or">OR</span>
                                        </div>
                                        <a href="javascript:void(0)" className="btn btn_addwishlist">
                                            <img src="assets/images/icons/wishlist_blue_color.svg" alt="" className="img-fluid"/>
                                            Add to Wishlist
                                        </a>
                                        <div className="delivery_option_block">
                                            <h4 className="txt_delivery">Check for delivery options</h4>
                                            <div className="enter_box">
                                                <input type="text" className="form-control field_input" placeholder="Enter Area Pin Code"/>
                                                <button className="btn_check">Check</button>
                                            </div>
                                        </div>
                                        <div className="coupon_code_select_apply_block">
                                            <div className="couponcode_block">
                                                <h3 className="title">Coupon code</h3>
                                                <p className="desc">Apply coupon code if you have any</p>
                                                <div className="field_block">
                                                    <input type="text" className="form-control field_input"/>
                                                    <button className="btn_code">
                                                    {/* <span className="fa fa-tag"></span>  */}
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="select_apply_block">
                                                <p className="txt">Or select any one</p>
                                                <ul className="list_apply">
                                                    <li>
                                                        <div className="apply_left">
                                                            <h4 className="title">ABCD40</h4>
                                                            <p className="desc">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                        <a href="javascript:void(0)" className="link_apply">Apply</a>
                                                    </li>
                                                    <li>
                                                        <div className="apply_left">
                                                            <h4 className="title">ABCD40</h4>
                                                            <p className="desc">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                        <a href="javascript:void(0)" className="link_apply">Apply</a>
                                                    </li>
                                                    <li>
                                                        <div className="apply_left">
                                                            <h4 className="title">ABCD40</h4>
                                                            <p className="desc">Lorem ipsum dolor sit amet</p>
                                                        </div>
                                                        <a href="javascript:void(0)" className="link_apply">Apply</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="special_offers_block wow fadeIn" data-wow-duration="1.4s">
                            <h3 className="subtitle">Special Offers</h3>
                            <ul className="list_offers list-unstyled">
                                <li>• <strong>10% Instant Discount</strong> with Federal Debit Cards on purchase of Rs.1,500 or more from Amazon Pantry or Amazon Fresh. <a href="javascript:void(0)" className="link_here">Here's how</a> </li>
                                <li>
                                    • <strong>10% Instant Discount</strong> with Bank of Baroda Credit Cards on purchase of Rs.1,500 or more from Amazon Pantry or Amazon Fresh. <a href="javascript:void(0)" className="link_here">Here's how</a>
                                </li>
                                <li>
                                    • <strong>10% Instant Discount</strong> with Citibank Cards on purchase of Rs.2,000 or more from Amazon Pantry or Amazon Fresh. <a href="javascript:void(0)" className="link_here">Here's how</a>
                                </li>
                                <li>
                                    • <strong>5% Instant discount</strong> with HSBC Cashback card. <a href="javascript:void(0)" className="link_here">Here's how</a>
                                </li>
                                <li>
                                    • <strong>Get FLAT 5% BACK</strong> with Amazon Pay ICICI Bank Credit card for Prime members. Flat 3% BACK for non-Prime members. <a href="javascript:void(0)" className="link_here">Here's how</a>
                                </li>
                                <li>
                                    • Buy now & pay next month at <strong>0% interest</strong> or pay in EMIs with Amazon Pay Later. Instant credit upto ₹20,000. Check eligibility here. <a href="javascript:void(0)" className="link_here">Here's how</a>
                                </li>
                                <li>
                                    • Get GST invoice and save up to <strong>28% on business</strong> purchases. Sign up for free <a href="javascript:void(0)" className="link_here">Here's how</a>
                                </li>
                                <li>
                                    • Get <strong>₹50 cashback</strong> as Amazon Pay Balance on paying with Amazon Pay UPI. Valid once per customer on 1st ever Amazon Pay UPI transaction on Mobile App. <a href="javascript:void(0)" className="link_here">Here's how</a>
                                </li>
                            </ul>
                        </div>
                        <div className="similar_products wow fadeIn" data-wow-duration="1.5s">
                            <h3 className="subtitle">Similar Products</h3>
                            <div className="inner_similar_products">
                            <div className="row">
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
                                    <div className="box_shopping_cart">
                                        <a href="javascript:void(0)" className="link_offer">
                                            -58%
                                        </a>
                                        <a href="javascript:void(0)" className="link_wishlist">
                                            <svg xmlns="http://www.w3.org/2000/svg"  width="20" height="20" viewBox="0 0 20 20">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
                                <div className="col-xl-2 col-lg-3 col-md-4">
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
        )
    }
}

export default productdetail;