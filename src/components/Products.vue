<template>
        
    <div class="product">
        <a href="/tr_TR/men/shoes/twins/camper-twins-K100743-025">
            <div class="gridPhoto">
                <div class="grid-images">
                    <picture class="style-image" 
                        v-if="show_default" @mouseover="show_default=false" @mouseleave="show_default=true" >

                        <img src="https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_CF.jpg"
                            class="style-image" width="326" height="489">
                    </picture>


                    <picture class="style-image_hover" 
                        v-if="!show_default" 
                        @mouseleave="show_default=true">

                        <img src="https://cloud.camper.com/is/image/JGxvY2F0b3IzJA==/K100743-025_LF.jpg"
                            class="style-image_hover" loading="eager">
                    </picture>
                </div>
                <div class="sizes">
                    <span class="size_number">39</span>
                    <span class="size_number">40</span>
                    <span class="size_number">41</span>
                    <span class="size_number">42</span>
                    <span class="size_number">43</span>
                    <span class="size_number">44</span>
                    <span class="size_number">45</span>
                    <span class="size_number size_number_not_available">46</span>
                </div>
            </div>
            <div class="grid-content">
                <p class="name">Twins</p>
                <p class="price">₺2.499</p>
                <p class="item-info">4 RENK</p>
            </div>
        </a>
    </div>
</template>
<style scoped>
.product {
    display: block;
    flex: 0 0 50%;
    max-width: 50%;
    position: relative;
}

@media screen and (min-width: 768px) {
    .product {
        flex: 0 0 33.33333%;
        max-width: 33.33333%;
    }
}

@media screen and (min-width: 1200px) {
    .product {
        flex: 0 0 25%;
        max-width: 25%;
    }
}
.sizes{
    align-self: end;
    display: grid;
    font-size: .875em;
    grid-gap: 8px 18px;
    grid-template-columns: repeat(auto-fill,minmax(20px,1fr));
    margin: 24px;
    grid-column: 1;
    grid-row: 1;
    z-index: -1;
    visibility: hidden;
}
.product:hover .sizes{
    visibility: visible;
    z-index: 2;
}
.size_number{
    padding: 2% 5%;
}
.size_number_not_available{
    color: #919191;
    background: url(@/assets/del-line-2.svg) 50% no-repeat;
}
.gridPhoto {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
}

.grid-images {
    display: grid;
    grid-column: 1;
    grid-row: 1;
    overflow: hidden;
    background-color: #e8e7ea;
    padding-bottom: 150%;
}

.grid-images>picture {
    position: absolute;
    overflow: hidden;
}

.style-image {
    height: auto;
    min-height: auto;
    width: 100%;
    opacity: 1;
    transition: opacity .3s ease-in;
}


.style-image_hover {
    min-width: 100%;
}

.grid-content {
    width: 100%;
    padding: 16px 16px 40px;
    position: relative;
}

.name,
.price {
    color: black;
    font-weight: 400;
    font-size: .875em;
}

.item-info {
    color: black;
    font-size: .5em;
    margin-top: 14px;
    text-transform: uppercase;
}
</style>

<script>
export default {
    name: "product-vue",
    data(){
        return{
            show_default:true,
        }
    },
}
</script>