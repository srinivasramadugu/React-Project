import React, { Component } from 'react'

 class menu extends Component {
    render() {
        return (
            <div>
                {/* Desktop Menu START */}
                <div id="menu_desktop" className="menu_desktop">
                <div className="container-fluid">
                    <div className="inner_menu">
                        <ul className="list_menu list-unstyled">
                            <li className="dropdown">
                                <a href="javascript:void(0)">
                                    Shop by Category 
                                    <span className="icon_dropdown">
                                        <img src="images/icons/downarrow_lightblue_color.svg" alt="" className="img-fluid" />
                                    </span>
                                </a>
                                <ul className="megamenu list-unstyled">
                                    <li>
                                        <div className="box_grid">
                                            <h4 className="subtitle">
                                                <a href="javascript:void(0)" className="link_subtitle">
                                                    <span className="icon">
                                                        <img src="images/icons/icon_small_apple_blue_color.png" alt="" className="img-fluid"/>
                                                    </span>
                                                    Fruit & Vegetables <span className="icon_arrow_right">&#8594;</span>
                                                </a>
                                            </h4>
                                            <ul className="list_details list-unstyled">
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/grains_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Food grains, Oil & Masala
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/bakery_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Bakery, Cake & Dairy
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/beverages_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Beverages
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/snacks_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Snacks & Branded Foods
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/hygiene_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Beauty & Hygiene
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/cleaning_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Cleaning & Household
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/kitchen_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Kitchen, Garden & Pets
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/meat_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Eggs, Meat & Fish
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/gourmet_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Gourmet & World Food
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            <img src="images/icons/baby_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>
                                                        Baby Care
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        <span className="icon">
                                                            {/* <img src="images/icons/baby_blue_color.png" alt="" className="img-fluid"/>  */}
                                                        </span>
                                                        View All
                                                    </a>
                                                </li>
                                            </ul>
                                            {/* <a href="javascript:void(0)" className="view_link_all">View All</a> */}
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box_grid">
                                            <h4 className="subtitle">
                                                <a href="javascript:void(0)" className="link_subtitle">
                                                    {/* <span className="icon">
                                                        <img src="images/icons/icon_small_apple_blue_color.png" alt="" className="img-fluid"/>
                                                    </span>  */}
                                                    Fresh Vegetables <span className="icon_arrow_right">&#8594;</span>
                                                </a>
                                            </h4>
                                            <ul className="list_details list-unstyled">
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/grains_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>  */}
                                                        Fresh Fruits
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    {/* <span className="icon">
                                                            <img src="images/icons/bakery_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Herbs and Seasonings
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/beverages_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Cuts &amp; Sprouts
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/snacks_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Exotic Fruits and Veggies
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/hygiene_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> 
                                                        Organic Fruits &amp; Vegetables */}
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/cleaning_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Flower Bouquets, Bunches
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="box_grid">
                                            <ul className="list_details list-unstyled">
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/grains_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>  */}
                                                        Potato, Onion, Tomato 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/bakery_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Cucumber & Capsicum 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/beverages_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Root Vegetables 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/snacks_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Beans, Brinjals, Okra 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/hygiene_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>  */}
                                                        Cabbage & Cauliflower 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/cleaning_blue_color.png" alt="" className="img-fluid"/>
                                                        </span> */}
                                                        Gourd, Pumpkin, Drumstick 
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                        {/* <span className="icon">
                                                            <img src="images/icons/cleaning_blue_color.png" alt="" className="img-fluid"/>
                                                        </span>  */}
                                                        Leafy Vegetavbles
                                                    </a>
                                                </li>
                                                
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="javascript:void(0)">
                                    Offers 
                                    <span className="icon_dropdown">
                                        <img src="images/icons/downarrow_lightblue_color.svg" alt="" className="img-fluid"/>
                                    </span>
                                </a>
                                <ul className="megamenu list-unstyled">
                                    <li>
                                        <div className="box_grid">
                                            <h4 className="subtitle">
                                                <a href="javascript:void(0)" className="link_subtitle">
                                                    Offers <span className="icon_arrow_right">&#8594;</span>
                                                </a>
                                            </h4>
                                            <ul className="list_details list-unstyled">
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    Offers 1
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    Offers 2
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    Offers 3
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    Offers 4
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    Offers 5
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    Offers 6
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="javascript:void(0)" className="link_item">
                                                    Offers 7
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    Signup
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    Sell on Groceries
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    24x7 Customer Service
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    Advertise
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    Download App
                                </a>
                            </li>
                            <li>
                                <a href="javascript:void(0)">
                                    Log Out
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>
                {/* Desktop Menu END */}

                {/* Mobile Menu  START */}
                <div class="menu_mobile" id="menu_mobile">
                	<nav id="main-nav">
            <ul class="second-nav">
              <li class="devices">
                <span>Shop by category</span>
                <ul>
                  <li class="mobile">
                    <a href="javascript:void(0)">Fruits and vegetables</a>
                    <ul>
                      <li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/grains_blue_color.png" alt="" class="img-fluid" />
							</span>
							Food grains, Oil & Masala
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/bakery_blue_color.png" alt="" class="img-fluid" />
							</span>
							Bakery, Cake & Dairy
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/beverages_blue_color.png" alt="" class="img-fluid" />
							</span>
							Beverages
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/snacks_blue_color.png" alt="" class="img-fluid" />
							</span>
							Snacks & Branded Foods
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/hygiene_blue_color.png" alt="" class="img-fluid" />
							</span>
							Beauty & Hygiene
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/cleaning_blue_color.png" alt="" class="img-fluid" />
							</span>
							Cleaning & Household
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/kitchen_blue_color.png" alt="" class="img-fluid" />
							</span>
							Kitchen, Garden & Pets
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/meat_blue_color.png" alt="" class="img-fluid" />
							</span>
							Eggs, Meat & Fish
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/gourmet_blue_color.png" alt="" class="img-fluid" />
							</span>
							Gourmet & World Food
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								<img src="images/icons/baby_blue_color.png" alt="" class="img-fluid" />
							</span>
							Baby Care
						</a>
					</li>
					<li>
						<a href="javascript:void(0)" class="link_item">
							<span class="icon">
								 {/* <img src="images/icons/baby_blue_color.png" alt="" class="img-fluid"> */}
							</span>
							View All
						</a>
					</li>
                    </ul>
                  </li>
                  <li class="television">
                    <a href="javascript:void(0)">Fresh vegetables</a>
                    <div class="subnav-container">
                      <ul>
                        <li><a href="javascript:void(0)">Fresh Fruits</a></li>
                      <li><a href="javascript:void(0)">Herbs and Seasonings</a></li>
                      <li><a href="javascript:void(0)">Cuts and Sprouts</a></li>
                      <li><a href="javascript:void(0)">Exotic Fruits &amp; Vegetables</a></li>
                      <li><a href="javascript:void(0)">Organic Fruits &amp; Vegetables</a></li>
                      <li><a href="javascript:void(0)">Flower Bouquets, Bunches</a></li>
                      </ul>
                    </div>
                  </li>
                  <li>
                  	<div class="nav-item-wrapper">
	                  	<a href="javascript:void(0)" class="nav-item" tabindex="0" role="menuitem">
	                  		Potato, Onion, Tomato 
	                  	</a>
	                  </div>
	              </li>
	              <li>
                  	<div class="nav-item-wrapper">
	                  	<a href="javascript:void(0)" class="nav-item" tabindex="0" role="menuitem">
	                  		Cucumber & Capsicum
	                  	</a>
	                  </div>
	              </li>
	              <li>
                  	<div class="nav-item-wrapper">
	                  	<a href="javascript:void(0)" class="nav-item" tabindex="0" role="menuitem">
	                  		Root Vegetables
	                  	</a>
	                  </div>
	              </li>
	              <li>
                  	<div class="nav-item-wrapper">
	                  	<a href="javascript:void(0)" class="nav-item" tabindex="0" role="menuitem">
	                  		Beans, Brinjals, Okra
	                  	</a>
	                  </div>
	              </li>
	              <li>
                  	<div class="nav-item-wrapper">
	                  	<a href="javascript:void(0)" class="nav-item" tabindex="0" role="menuitem">
	                  		Cabbage & Cauliflower 
	                  	</a>
	                  </div>
	              </li>
	              <li>
                  	<div class="nav-item-wrapper">
	                  	<a href="javascript:void(0)" class="nav-item" tabindex="0" role="menuitem">
	                  		Gourd, Pumpkin, Drumstick
	                  	</a>
	                  </div>
	              </li>
	              <li>
                  	<div class="nav-item-wrapper">
	                  	<a href="javascript:void(0)" class="nav-item" tabindex="0" role="menuitem">
	                  		Leafy Vegetavbles
	                  	</a>
	                  </div>
	              </li>
                   {/* <li class="camera">
                    <a href="javascript:void(0)">Cameras</a>
                    <ul>
                      <li><a href="javascript:void(0)">POtato</a></li>
                      <li><a href="javascript:void(0)">POtato</a></li>
                      <li><a href="javascript:void(0)">POtato</a></li>
                      <li><a href="javascript:void(0)">POtato</a></li>
                      <li><a href="javascript:void(0)">POtato</a></li>
                    </ul>
                  </li>  */}
                 {/* <li data-nav-custom-content>
                    <div class="custom-message">
                      You can add any custom content to your navigation items. This text is just an example.
                    </div>
                  </li> */}
                </ul>
              </li>
              <li class="magazines">
                <a href="javascript:void(0)">Offers</a>
                <ul>
                  <li><a href="javascript:void(0)">Offers 1</a></li>
                  <li><a href="javascript:void(0)">Offers 2</a></li>
                  <li><a href="javascript:void(0)">Offers 3</a></li>
                  <li><a href="javascript:void(0)">Offers 4</a></li>
                  <li><a href="javascript:void(0)">Offers 5</a></li>
                  <li><a href="javascript:void(0)">Offers 6</a></li>
                  <li><a href="javascript:void(0)">Offers 7</a></li>
                  <li><a href="javascript:void(0)">Offers 8</a></li>
                  <li><a href="javascript:void(0)">Offers 9</a></li>
                  <li><a href="javascript:void(0)">Offers 10</a></li>
                  <li><a href="javascript:void(0)">Offers 11</a></li>
                  <li><a href="javascript:void(0)">Offers 12</a></li>
                </ul>
              </li>
               {/* <li class="store">
                <a href="javascript:void(0)">Store</a>
                <ul>
                  <li>
                    <a href="javascript:void(0)">Clothes</a>
                    <ul>
                      <li>
                        <a href="javascript:void(0)">Women's Clothing</a>
                        <ul>
                          <li><a href="javascript:void(0)">Tops</a></li>
                          <li><a href="javascript:void(0)">Dresses</a></li>
                          <li><a href="javascript:void(0)">Trousers</a></li>
                          <li><a href="javascript:void(0)">Shoes</a></li>
                          <li><a href="javascript:void(0)">Sale</a></li>
                        </ul>
                      </li>
                      <li>
                        <a href="javascript:void(0)">Men's Clothing</a>
                        <ul>
                          <li><a href="javascript:void(0)">Shirts</a></li>
                          <li><a href="javascript:void(0)">Trousers</a></li>
                          <li><a href="javascript:void(0)">Shoes</a></li>
                          <li><a href="javascript:void(0)">Sale</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li><a href="javascript:void(0)">Jewelry</a></li>
                  <li><a href="javascript:void(0)">Music</a></li>
                  <li><a href="javascript:void(0)">Grocery</a></li>
                </ul>
              </li> */}
              <li class=""><a href="javascript:void(0)">Signup</a></li>
              <li class=""><a href="javascript:void(0)">Sell on Groceries</a></li>
              <li class=""><a href="javascript:void(0)">24x7 Customer Service</a></li>
              <li class=""><a href="javascript:void(0)">Advertise</a></li>
              <li class=""><a href="javascript:void(0)">Download App</a></li>
              <li class=""><a href="logout.html">Log Out</a></li>
              {/*  <li class="collections"><a href="javascript:void(0)">Collections</a></li> */}
               {/* <li class="nolink">No Link</li>  */}
              {/* <li class="disabled"><a href="#" disabled>Disabled Link</a></li> */}
             <li class="add">
                <a href="#" data-nav-close="false" data-add="['Charts', 'Logs', 'Tests', 'Profile']">Add Item</a>
              </li>
            </ul>
            <ul class="bottom-nav">
              <li class="github">
                <a href="https://github.com/somewebmedia" target="_blank">
                	<span class="icon_socialmedia">
                  		<i class="fa fa-facebook"></i>
                  	</span>
                </a>
              </li>
              <li class="email">
                <a href="mailto:somewebmedia@gmail.com" target="_blank">
                  <span class="icon_socialmedia">
                  		<i class="fa fa-linkedin"></i>
                  	</span>
                </a>
              </li>
              <li class="ko-fi">
                <a href="https://ko-fi.com/somewebguy" target="_blank">
                  <span class="icon_socialmedia">
                  		<i class="fa fa-instagram"></i>
                  	</span>
                </a>
              </li>
            </ul>
          </nav>
    </div>
                {/* Mobile Menu  END */}
            </div>
        )
    }
}

export default menu;