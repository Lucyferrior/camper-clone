<template>
    <header class="style_headerNav__1B5VI">
        <div class="headroom-wrapper">
            <div
                class="headroom">
                <div class="tnm--desktop">
                    <a 
                        class="logo">
                        <router-link to="/">
                            <img alt="Camper"
                            src="https://www.camper.com/cms/api/assets/tiers-banners-homes/03158e4d-c9ae-4945-8a35-cb1362d17021/camper-logo.svg" 
                            width="64px" height="33px">
                        </router-link>
                        </a>
                        
                    <div class="alt_kategoriler"><span class="tnm__title ">
                        <a
                               
                                class="kategori-isim ">
                                <router-link to="/women">
                                    Kadın
                                </router-link>
                            </a>


                        </span></div>
                    <div class="alt_kategoriler"><span class="tnm__title "><a
                               
                                class="kategori-isim "> 
                                <router-link to="/women">
                                    Erkek
                                </router-link>
                            </a>
                            <div class="tnm-highlights"></div>
                        </span>
                    </div>

                    <div class="alt_kategoriler"><span class="tnm__title "><a
                                class="kategori-isim ">
                                <router-link to="/women">Çocuk
                                    
                                </router-link>
                            </a>
                           
                        </span></div>
                    <div class="alt_kategoriler"><span class="tnm__title "><a
                               
                                 class="kategori-isim ">
                                 <router-link to="/women">Camperlab</router-link>
                                </a>
                            
                        </span></div>

                    <div class="arama">
                        <a href="https://www.camper.com/tr_TR/search" class="sc-dSnXvR dzBcKB last-item">
                            <span class="searcherspan">
                                <input type="text"
                                    placeholder="ARAMA" class="searcher">
                                    <span class="searchericon">
                                        <img alt="Search"
                                        src="https://www.camper.com/cms/api/assets/tiers-banners-homes/33b5eba4-3c7e-4547-805c-8a94b80e73e6/search.svg"
                                        width="17px" height="17px">
                                    </span>
                                </span>

                        </a>
                        <a href="https://www.camper.com/tr_TR/shops" class="mağaza-bul">Mağaza bul</a>

                        <div class="hesap">
                            <div class="account-icon"><span class="label">Hesabım</span></div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<style>
.headroom{

        position: relative;
        top: 0px;
        left: 0px;
        right: 0px;
        transform: translate3d(0px, 0px, 0px);
        z-index: 99!important;

       
    }
    .tnm--desktop{
        display: flex;
        z-index: 1;
        align-items: center;
        position: relative;
        padding: 0px 24px;
        border-bottom: 1px solid rgb(223, 223, 223);
    }
    .logo{
        margin:5px 1.5em 0px 0px;
    }
    .logo img{
        vertical-align: middle;
        border-style: none;
    }
    .alt_kategoriler .tnm__title{
        display: block;
        padding-right: 2em;
    }
    .kategori-isim{
    position: relative;
    padding: 1em 0px;
    display: block;
    text-transform: uppercase;
    }

    @media screen and (min-width: 1440px) {
        .kategori-isim{
        font-size: 0.75em;
        }
     }

     .tnm__title>a::after {
        position: absolute;
        bottom: 0;
        left: 0;
        content: "";
        border-top: 4px solid red;
        -webkit-transition: 0.2s;
        transition: 0.2s;
        width: 0;
    }
     
    .tnm__title:hover>a::after {
        width: 100%;
    }
    .tnm-highlights{
    display: none;
    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    padding: 30px 0px 0px 32px;
    box-sizing: border-box;
    font-size: 0.875em;
    border-top: 1px solid rgb(218, 41, 2)
    }

    .arama{
    margin-left: auto;
    margin-right: 0px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    order: 100;
    }

    .arama a{
    color: inherit;
    text-decoration: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: color .3s;
    }
    
    .arama .searcherspan{
    width: 128px;
    margin-right: 1.3em;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: 1px solid rgb(202, 198, 198);
    padding: 3px;
    }

    .arama .searcher{
        padding: 0px;
        border: none;
        outline: none;
        font-size: 0.75em;
        cursor: pointer;
    }

    [role=button], a, area, button, input:not([type=range]), label, select, summary, textarea {
        touch-action: manipulation;
    }

    button, input {
        overflow: visible;
        margin: 0;
    }

    .arama .searchericon{
    vertical-align: middle;
    border-style: none;
    }
    
    .arama .mağaza-bul{
        
        color: rgb(0, 0, 0);
        text-decoration: none;
        font-size: 0.75em;
        margin-right: 1.3em;
        text-transform: uppercase;
        position: relative;
        padding: 1em 0px;
    }

    .hesap{
        margin-right: 1.3em;
    }


    .account-icon .label{
        position: relative;
        padding: 0.8em 0px;
        text-transform: uppercase;
    }
   
    

</style>

<script>

    export default {
    name: "header-vue",
}
</script>
