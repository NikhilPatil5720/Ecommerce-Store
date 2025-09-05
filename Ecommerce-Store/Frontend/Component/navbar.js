
// navbar export function

function navbar(){
    return `<!-- header -> present above dropdown menu option -->

    <div class="header">
        <div id="sellList">
            <ul>
                <li>Download App</li>
                <li></li>
            </ul>
        </div>

        <!-- website logo -->

        <div id="logo">
            <a href="/index.html">
                <img src="./images/logo.png" alt="logo">
            </a>
        </div>

        <!-- search box -->

        <div id="searchBar">
            <span>
                <input type="text" placeholder="Only Mobile Products Available(Search mobiles)" id="getinput">
                <button class="srch_btn">Search</button>
            </span>
        </div>

        <!-- login - cart - wishlist - location options -->

        <div id="sellListbtm">
            <ul>
                <li>
                    <span id="pin">421005</span><i class="fal fa-map-marker-alt"></i>
                </li>
                <li>
                    <i class="far fa-bell"></i>
                </li>
                <li>
                    <i class="far fa-heart"></i>
                </li>
                <li>
                    <a href="/Pages/CartPage.html"><i class="fal fa-shopping-cart" id="showcart"><span id="qty">1</span></i></a>
                    <div class="hover_content1">
                        <div id="quickCart">
                            <div class="nItems">
                                
                            </div>
                            <div class="listItem">
                                
                            </div>
                            <div class="btnContainer">
                                <a href="">View Cart</a>
                                <a href="">Place Order</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li id="signin">
                    <a id="login_sucess">Sign In</a>
                    <div class="hover_content">
                        <div id="userHeading">
                            <i class="fal fa-user-circle"></i><span id="login_sucess1">Login/Register</span>
                            <p>Join VIP club</p>
                        </div>
                        <ul id="gotouserpage">
                            <li>
                                <i class="fal fa-clipboard-list"></i>
                                My Orders
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-dots"></i>
                                My Returns
                            </li>
                            <li>
                                <i class="far fa-heart"></i>
                                Wishlist
                            </li>
                            <li>
                                <i class="fas fa-user-circle"></i>
                                My Profile
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-dots"></i>
                                My Chat
                            </li>
                            <li>
                                <i class="fal fa-rupee-sign"></i>
                                My CluesBucks
                            </li>
                            <li>
                                <i class="fal fa-comment-alt-edit"></i>
                                My Feedback
                            </li>
                            <li>
                                <i class="fal fa-user-headset"></i>
                                Help & Support
                            </li>
                            <li>
                                <i class="fal fa-rupee-sign"></i>
                                My Favorite Stores
                            </li>
                            <li id="signout">
                                <i class="fal fa-sign-out"></i>
                                Sign Out
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <!-- end of header -->

    <!-- main navigation bar(dropdown options) -->

    <div class="main_navigation">
        <div id="wrapper">
            <ul>
                <!-- made in india logo -->

                <li id="madeIN">
                    <a href="">
                        <img src="https://images.shopclues.com/images/ui/madeinindia.png" alt="madeInIndia">
                    </a>
                </li>

                <!-- Mobiles & More dropdown options -->

                <li id="nav1">
                    <a href="/ProductListPage.html">Mobiles & More</a>
                </li>
                <!-- End of Mobiles & More dropdown options -->

                <!-- MEN dropdown options -->

                <li id="nav2">
                    <a href="">MEN</a>
                   
                </li>
                <!-- End of MEN dropdown options -->

                <!-- WOMEN dropdown options -->

                <li id="nav3">
                    <a href="">WOMEN</a>
                    
                </li>
                <!-- End of WOMEN dropdown options -->
                
                <!-- HOME & KITCHEN dropdown options -->

                <li id="nav4">
                    <a href="">HOME & KITCHEN</a>
                    
                </li>
                <!-- End of HOME & KITCHEN dropdown options -->

                <!-- APPLIANCES dropdown options -->

                <li id="nav5">
                    <a href="">APPLIANCES</a>
                    
                </li>
                <!-- End of APPLIANCES dropdown options -->

                <!-- SPORTS & MORE dropdown options -->

                <li id="nav6">
                    <a href="">SPORTS & MORE</a>
                    
                </li>
                <!-- End of SPORTS & MORE dropdown options -->

                <!-- ESSENTIALS dropdown options -->

                <li id="nav7">
                    <a href="">ESSENTIALS</a>
                   
                </li>
                <!-- End of ESSENTIALS dropdown options -->

                <!-- OFFERS dropdown options -->

                <li id="nav8">
                    <a href="">OFFERS</a>
                   
                </li>
                <!-- End of OFFERS dropdown options -->
                
                <!-- GLOBAL SHOPPING options -->

                <li id="nav9">
                    <a href="">GLOBAL SHOPPING</a>
                </li>
            </ul>
        </div>
    </div>


    <!-- popup Window signin and regiser page -->

    <div id="back">
        <div class="popup_signin">
            <div class="points">
                <ul>
                    <li>
                        <i class="fas fa-hand-holding-usd"></i>
                        <h6>Loyalty Points</h6>
                        <p>Earn CluesBucks on prepaid orders</p>
                    </li>
                    <li>
                        <i class="fas fa-cart-arrow-down"></i>
                        <h6>Instant Checkout</h6>
                        <p>Hassle-Free Payment Everytime</p>
                    </li>
                    <li>
                        <i class="fas fa-badge-percent"></i>
                        <h6>Exclusive Offers</h6>
                        <p>For special offers & value deals</p>
                    </li>
                </ul>
            </div>
            <div id="page_signin">
                <div id="select_op">
                    <h2 id="showin">LOGIN</h2>
                    <h2 id="showster">REGISTER</h2>
                    <button id="closetab"><i class="fal fa-times"></i></button>
                </div>
                <div class="signinShow">
                    <form>
                        <input type="text" placeholder="Enter your username" id="username2">
                        <br><br>
                        <input type="password" placeholder="Enter your password" id="password2">
                        <br><br>
                        <input type="submit" value="Login" id="checkdetail">
                    </form>
                    <h3>Social Login</h3>
                    <button>Continue with Facebook</button>
                </div>
                <div class="signup">
                    <form>
                        <input type="email" placeholder="Enter your email id" id="email">
                        <br>
                        <p id="emailError"></p>
                        <input type="number" placeholder="Enter your mobile number" id="number">
                        <br>
                        <p id="MobileError"></p>
                        <input type="text" placeholder="Enter your username" id="username1">
                        <br>
                        <p id="UsernameError"></p>
                        <input type="password" placeholder="Enter your password" id="password1">
                        <br>
                        <p id="PasswordError"></p>
                        <input type="submit" value="Register" id="storedetail">
                    </form>
                    <h3>Register With</h3>
                    <button>Continue with Facebook</button>
                </div>
            </div>
        </div>
    </div>`
}

export default navbar;