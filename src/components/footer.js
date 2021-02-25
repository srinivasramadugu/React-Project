import React, { Component } from 'react'
import 'popper.js';

// import '../node_modules/bootstrap/dist/js/bootstrap.min';
// import '../node_modules/jquery/dist/jquery.min';
// import '../node_modules/jquery/dist/jquery.slim.min';

 class footer extends Component {
    render() {
        return (
                <footer class="footer">
                    <div class="container-fluid">
                        <div class="inner_foot">
                            <ul class="list_foot list-unstyled">
                                <li>
                                    <a href="javascript:void(0)">Terms of Use</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)">Cookies</a>
                                </li>
                            </ul>
                            <div class="product_block">
                                <span class="txt_product">
                                    A Product by <a href="https://www.pikateck.com/" class="link_product" target="_blank">
                                        www.pikateck.com
                                    </a>
                                </span>
                            </div>
                            <ul class="list_socialmedia list-unstyled">
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <img src="assets/images/icons/instagram_outline_white_color.svg" alt="" class="img-fluid"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <img src="assets/images/icons/facebook_outline_white_color.svg" alt="" class="img-fluid"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <img src="assets/images/icons/linkedin_outline_white_color.svg" alt="" class="img-fluid"/>
                                    </a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" target="_blank">
                                        <img src="assets/images/icons/twitter_outline_white_color.svg" alt="" class="img-fluid"/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <a href="javascript:void(0)" className="backtop">
                        <span class="fa fa-arrow-up"></span>
                   </a>                    
                </footer>
                
        )
    }
}

export default footer;


