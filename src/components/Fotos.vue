<template>
    <div class="koMYYi">
        <div class="kZdCIz">
            <div class="bMmwdY">
                <div class="fZqon"><a class="trackable " href="https://www.camper.com/tr_TR/landings/teix">
                        <picture>
                            <img
                                src="https://www.camper.com/cms/api/assets/tiers-banners-homes/916bb380-d224-4ffd-a582-e0228d08cee9/T95-W46-TEIX-W-M_Desktop.jpg"
                                alt="Teix" width="2000px" height="1125px"
                                class="foto">
                        </picture>
                    </a></div>
                <div class="yazı-content-center">
                    <h1 class="yazı-h1">Teix</h1>
                    <h3 class="yazı-h3">Alışverişe Başla</h3>
                    <div class="sc-amiJK fLTzSD"><a href="https://www.camper.com/tr_TR/women/shoes/teix_women"
                            class="buton">Kadın</a><a
                            href="https://www.camper.com/tr_TR/men/shoes/teix_men"
                            class="buton">Erkek</a></div>
                </div>
            </div>
        </div>
    </div>
</template>
<style>

    .koMYY{
        position: relative;
        display: grid;
    }
    .bMmwdY{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        position: relative;
        width: 100%;
        height: 100%;
    }
    .fZqon{
        text-align: center;
    }
    .fZqon>a{
        height: 100%;
        display: block;
    }
    .foto{
        width: 100%;
        height: auto;
        display: block;
    }
    .yazı-content-center{
    z-index: 10;
    position: absolute;
    width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    pointer-events: none;
    text-align: center;
    }
.yazı-h1{
    line-height: 1;
    margin: 0px;
    padding: 0px;
    white-space: normal;
    font-weight: normal;
    font-family: ModerneMedium;
    pointer-events: none; 
}
@media screen and (min-width: 1440px) {
    .yazı-h1{
        text-shadow: unset;
        color:black;
        font-size: 3.5em;
    }
    }
.yazı-h3{
    line-height: 1;
    margin: 40px 0px 0px;
    padding: 0px;
    white-space: normal;
    font-weight: normal;
    font-family: ModerneMedium;
}
@media screen and (min-width: 1440px) {
    .yazı-h3{
        text-shadow: unset;
        color:black;
        font-size: 1em;
    }
    }
.buton{
    box-sizing: border-box;
    min-width: 140px;
    pointer-events: initial;
    font-family: ModerneLight;
    font-weight: normal;
    width: auto;
    text-decoration: none;
    white-space: normal;
    margin: 15px 4px 4px;
    appearance: none;
    border: none;
    display: inline-block;
    padding: 10px 20px;
    text-align: center;
}
@media screen and (min-width: 1440px) {
    .buton{
        text-shadow: unset;
        color: rgb(255, 255, 255);
        background-color:black;
        font-size: 1em;
    }
    }
.buton:hover {
        background: white;
        color: black;
      }
</style>

<style scoped>
img {
    vertical-align: middle;
    border-style: none;
}
h1 {
    display: block;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
h3 {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

</style>

<script>
    export default{
        name:"fotos-vue"
    }
</script>