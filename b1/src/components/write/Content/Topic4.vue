<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Dear Jack,
                </p>
                <p class="col-md-12">
                    I’m happy to hear that you are going to visit my hometown with some friends. I am writing to give you some advice on your trip.
                </p>
                <p class="col-md-12">
                    At my hometown, Can Tho city, there are many interesting places such as Ninh Kieu quay, Walking bridge, Night market, Cai Rang floating market, My Khanh tourism area, Truc Lam pagoda.
                </p>
                <p class="col-md-12">
                    At Ninh kieu quay, you can walk along the river with your friends, enjoy fresh air and buy some street food. 
                </p>
                <p class="col-md-12">
                   You can take photos with the statue of President Ho Chi Minh. Besides that, walking across Walking bridge brings you a lot of fun
                </p>
                <p class="col-md-12">
                    When you come here, I will be your tour guide.  <br> 
                    We will have a lot of fun, I hope that you will have a nice trip,<br>
                    Best wishes Mai
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Gửi Jack,
                        </p>
                        <p class="col-md-12">
                            Tôi vui mừng khi biết rằng bạn sẽ đến thăm quê hương của tôi với một số người bạn. Tôi viết thư để cho bạn một số lời khuyên về chuyến đi của bạn.
                        </p>
                        <p class="col-md-12">
                            Ở quê tôi, thành phố Cần Thơ, có rất nhiều địa điểm thú vị như cầu quay Ninh Kiều, cầu đi bộ, chợ đêm, chợ nổi Cái Răng, khu du lịch Mỹ Khánh, chùa Trúc Lâm.
                        </p>
                        <p class="col-md-12">
                           Tại Ninh Kiều, bạn có thể đi bộ dọc bờ sông cùng bạn bè, tận hưởng không khí trong lành và mua một ít thức ăn đường phố.
                        </p>
                         <p class="col-md-12">
                            Bạn có thể chụp ảnh với bức tượng của Chủ tịch Hồ Chí Minh. Bên cạnh đó, đi bộ qua cầu đi bộ mang đến cho bạn rất nhiều niềm vui
                        </p>
                        <p class="col-md-12">
                           Khi bạn đến đây, tôi sẽ là hướng dẫn viên của bạn. <br>
                           Chúng ta sẽ rất vui, Tôi hy vọng rằng bạn sẽ có một chuyến đi tốt đẹp, <br>
                           lời chúc tốt nhất Mai
                        </p>
                    </div>
                </transition>
                
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: false
        }
    },
    methods: {
        goHome(){
            // this.$router.go(-1);
            this.$router.push({ path: '/write' })
        }
    },
}
</script>


<style scoped>
    p{
        text-align: justify;
        font-size: 20px;
    }
	a{
		text-decoration: none;
		color: #4b4b4b;
	}
	.card{
        height: 250px;
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
	}
	.card:hover{
		background: #4b4b4b;
		color: #fff;
		box-shadow: 0.5rem 1rem 1rem rgba(0, 0, 0, 0.15) !important;
	}

    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .5s ease;
    }
    .slide-fade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>