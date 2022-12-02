<template>
    <div id="product_details_page">
        <Header />
        <div class="div-row">
            <div class="div_column images_column">
                <div class="div-row" style="row-gap: 0px;">
                    <div class="div_column images_grid">
                        <picture class="image_style">
                            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201438-003_DF.jpg"
                                class="image_style">
                        </picture>
                    </div>
                    <div class="div_column images_grid">
                        <picture class="image_style">
                            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201438-003_LF.jpg"
                                class="image_style">
                        </picture>
                    </div>
                    <div class="div_column images_grid">
                        <picture class="image_style">
                            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201438-003_TF.jpg"
                                class="image_style">
                        </picture>
                    </div>
                    <div class="div_column images_grid">
                        <picture class="image_style">
                            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201438-003_CF.jpg"
                                class="image_style">
                        </picture>
                    </div>
                    <div class="div_column images_grid">
                        <picture class="image_style">
                            <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNtYmlnZ3JleSQ=/K201438-003_SF.jpg"
                                class="image_style">
                        </picture>
                    </div>
                </div>
            </div>
            <div class="div_column product_info_style">
                <div>
                    <div class="title_wrapper">
                        <h1>Twins</h1>
                        <h2>₺2.699</h2>
                        <h3 class="style_codeDescription__3-gvr">Kadın için boyasız beyaz spor ayakakbı</h3>
                    </div>
                    <div class="brand_product_row_container">
                        <p class="brand_product_row_title">Colores<!-- -->:</p>
                        <div class="brand_product_row">
                            <div class="brand_product_column brand_product_column_active">
                                <a href="">
                                    <picture>
                                        <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/K300005-023_L.jpg"
                                            class="brand_thumbnail">
                                    </picture>
                                </a>
                            </div>
                            <div class="brand_product_column">
                                <a href="">
                                    <picture class="brand_thumbnail">
                                        <img src="https://cloud.camper.com/is/image/JGVzaG9wMDNiYWdncmV5JA==/K300005-024_L.jpg"
                                            class="brand_thumbnail">
                                    </picture>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
.title_wrapper>h1 {
    font-size: 1em;
    font-weight: 400;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.brand_product_column_active::after{
    content: "";
    display: block;
    
    height: 2px;
    width: 100%;
    border-top: 2px solid black;
    position: relative;
    bottom: 0;
}
.brand_product_row_container{
    margin-top: 22px;
}
.brand_product_row_container>p{
    font-size: 1rem;
    margin-bottom: .5rem;
    display: none;
}
.brand_product_row{
    display: grid;
    grid-gap: 3px;
    grid-template-columns: repeat(auto-fill,72px);
}
.brand_thumbnail{
    width: 60px;
    height: 60px;
    font-size: 10px;
    object-fit: cover;
    object-position: bottom;
    display: flex;
}
@media screen and ( min-width: 768px ){
    .brand_product_row{
        grid-template-columns: repeat(auto-fill,60px);
    }
}
.title_wrapper>h2 {
    font-weight: 300;
    font-size: inherit;
    margin: 16px 0 0;
}

.title_wrapper>h3 {
    font-size: .875em;
    margin: 16px 0 0;
    font-weight: 400;
}

.product_info_style>div {
    height: 100%;
}

.div-row {
    display: flex;
    flex-flow: row wrap;
}

.div_column {
    min-height: 1px;
    position: relative;
    max-width: 100%;
}

.images_column {
    display: flex;
    flex: 0 0 100%;
    max-width: 100%;
}

.image_style {
    height: auto;
    min-height: auto;
    width: 100%;
    vertical-align: top;
    opacity: 1;
    transition: opacity .3s ease-in;
}

.images_grid {
    display: grid;
    overflow: hidden;
    background: #e8e7ea;
}

.product_info_style {

    display: block;
    flex: 0 0 100%;
    max-width: 100%;
}

@media screen and (min-width: 768px) {
    .images_grid {
        flex: 0 0 100%;
        max-width: 100%;
    }

    .images_column {
        flex: 0 0 58.333333%;
        max-width: 58.333333%;
    }


    .product_info_style {
        flex: 0 0 41.6666667%;
        max-width: 41.6666667%;
    }
}

@media screen and (min-width: 1440px) {
    .images_grid {
        flex: 0 0 50%;
        max-width: 50%;
    }


}

@media screen and (min-width: 992px) {
    .images_column {
        flex: 0 0 66.66666667%;
        max-width: 66.6666667%;
    }

    .product_info_style {
        flex: 0 0 33.3333333%;
        max-width: 33.33333333%;
    }
}

@media screen and (min-width: 768px) {
    .product_info_style {


        padding: 35px 0;
        margin: 0 auto;
        max-width: 260px;
    }
}

.images_grid>picture {
    cursor: zoom-in;
}
</style>

<script>
import Header from '@/components/Header.vue';

export default {
    name: "product-details-vue",
    components: { Header }
}
</script>