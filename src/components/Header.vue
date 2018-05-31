<template>
    <div class="header">
        <ul class="topnav" id="myTopnav">

            <h2>歐萌國際有限公司管理系統</h2>
            <li id="signout"><a @click="signOut()">登出</a></li>
            <li class="nisuma">123</li>
            <li class="nav-item">
                <router-link to="/ordersearch" active-class="active"><a>訂單紀錄</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/order" active-class="active"><a>訂單</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/export" active-class="active"><a>出貨</a></router-link>

            </li>
            <li class="nav-item">
                <router-link to="/import" active-class="active"><a>進貨</a></router-link>

            </li>

            <li class="nav-item">
                <router-link to="/inventory" active-class="active"><a>庫存</a></router-link>
            </li>

            <li class="icon">
                <a @click="openNav()">&#9776;</a>
            </li>

        </ul>
        <div id="mySidenav" class="sidenav">
            <span class="closebtn" @click="closeNav()">&times;</span>
            <span @click="closeNav()"> <router-link to="/inventory" active-class="active"><a>庫存</a></router-link></span>
            <span @click="closeNav()"><router-link to="/import" active-class="active"><a>進貨</a></router-link></span>
            <span @click="closeNav()"><router-link to="/export" active-class="active"><a>出貨</a></router-link></span>

            <span @click="closeNav()"><router-link to="/order" active-class="active"><a>訂單</a></router-link></span>
            <span @click="closeNav()"> <router-link to="/ordersearch" active-class="active"><a>訂單紀錄</a></router-link></span>
        </div>

    </div>
</template>

<script>
export  default {
    methods:{
        check(){
            firebase.auth().onAuthStateChanged(user => {
                if (user) {
                    document.getElementById("signout").style.display = "block";
                } else {
                    // No user is signed in.
                    this.$router.push('/')
                    document.getElementById("signout").style.display = "none";

                    document.getElementById("signout2").style.display = "none";
                }
            });
        },
        signOut(){
            if(confirm("確定要登出嗎？")) {
                firebase.auth().signOut().then(function () {
                    // Sign-out successful.
                    window.alert("登出成功")
                }).catch(function (error) {
                    // An error happened.
                });
            }
        },
        myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }
        },

        openNav() {
            document.getElementById("mySidenav").style.width = "100%";
        },

        /* Close/hide the sidenav */
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
        },

    },
    created:function(){
        this.check();
    },

}
</script>

<style>
    .nisuma{
        display: none;
    }
    #signout{
        display: none;
        cursor: pointer;
    }

    ul h2{
        position: absolute;
        line-height: 80px;
        color:#FF3300;
        padding-left:50px
    }

    .active{
        color:#FF3300 ;
        border-radius: 5px;
    }

    .header{
        box-shadow:4px 4px 12px -2px rgba(20%,20%,40%,0.5);
        background-color: white;
    }

    /* Remove margins and padding from the list, and add a black background color */
    ul.topnav {
        list-style-type: none;
        box-shadow:4px 4px 12px -2px rgba(20%,20%,40%,0.5);
        overflow: hidden;
        margin: 0;
        height: 80px;
        background-color: white;
        position: fixed;
        width: 100%;
        padding-right: 50px;
        z-index: 500;
    }

    .topnav img{
        position: absolute;
        padding:0;
        margin-top: 10px;
        padding-right: 50px;
    }

    /* Float the list items side by side */
    ul.topnav li {
        float:right;
        line-height: 80px;
        margin-right: 50px;

    }



    /* Style the links inside the list items */
    ul.topnav li a{
        display: inline-block;
        color: black;
        text-align: center;
        text-decoration: none;
        transition: 0.3s;
        font-size: 18px;
    }

    /* Change background color of links on hover */
    ul.topnav li a:hover {
        color:#FF3300;
    }

    ul.topnav li a:active, .active{
        color:#ED152B;
    }

    /* Hide the list item that contains the link that should open and close the topnav on small screens */
    ul.topnav li.icon {display: none;}

    /* When the screen is less than 680 pixels wide, hide all list items, except for the first one ("Home"). Show the list item that contains the link to open and close the topnav (li.icon) */
    @media screen and (max-width:1150px) {

        ul h2{
            display:none;
        }
        ul.topnav li {display: none;}
        ul.topnav li{
            margin-right: 0;
        }

        ul.topnav img {}
        ul.topnav {

            background-repeat: no-repeat;
            margin:0;
            height: 80px;
        }
        ul.topnav li {
            float:right;
        }
        ul.topnav li.icon {
            float:left;
            display: inline-block;
            margin-top: 0px;
        }
        ul.topnav li a {
            color: white;
            font-size: 30px;
        }
        #signout a{
            font-size: 25px;
        }
    }

    /* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens */
    @media screen and (max-width:1150px) {
        ul.topnav.responsive {position: relative;}
        ul.topnav.responsive li.icon {
            position: absolute;
            right: 0;
            top: 0;

        }
        ul.topnav.responsive li {
            float: none;
            display: inline;
        }
        ul.topnav.responsive li a {
            display: block;
            text-align: left;

        }


    }

    /* The side navigation menu */
    .sidenav {
        height: 100%; /* 100% Full-height */
        width: 0; /* 0 width - change this with JavaScript */
        position: fixed; /* Stay in place */
        z-index: 5; /* Stay on top */
        top: 0;
        left: 0;
        background-color: #FF3300 ; /* Black*/
        overflow-x: hidden; /* Disable horizontal scroll */
        padding-top: 60px; /* Place content 60px from the top */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
        text-align: center;
        z-index: 999

    }

    /* The navigation menu links */
    .sidenav a{
        padding: 8px 8px 8px 0px;
        text-decoration: none;
        font-size: 25px;
        color:white;
        display: block;
        transition: 0.3s
    }

    /* When you mouse over the navigation links, change their color */
    .sidenav a:hover, .offcanvas a:focus{
        color:white;
    }

    /* Position and style the close button (top right corner) */
    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
        cursor: pointer;
        color:white;
    }

    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    @media screen and (max-height: 450px) {
        .sidenav {padding-top: 15px;}
        .sidenav a {font-size: 18px;}

    }

    @media screen and (max-width: 480px) {
        ul.topnav{
            padding-left: 20px;
        }

        ul.topnav li.icon {
            margin-right: 30px;

        }

    }

</style>