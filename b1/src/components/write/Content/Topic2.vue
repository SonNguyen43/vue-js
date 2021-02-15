<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Dear Hau,
                </p>
                <p class="col-md-12">
                    How are you?. I am writing to give you some advice on preparing for your new manager’s birthday party
                </p>
                <p class="col-md-12">
                    Your manager’s birthday party is an informal party, so you should wear a T-shirt and jeans. They can make you feel comfortable. You should give her a handbag because she can bring it with her to work
                </p>
                <p class="col-md-12">
                    Your manager is a successful businesswoman. Therefore, you should choose a handbag which has a famous brand name. This handbag should be simple but fashionable. You should not choose a colorful handbag because she is middle-aged. 
                </p>
                <p class="col-md-12">
                    You can go to the supermarket to buy the gift . There are many kinds of handbags with high quality for you too choose there.
                </p>
                <p class="col-md-12">
                    I hope that my advice will be useful for you <br>
                    Best wishes, Mai
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Gửi Hau,
                        </p>
                        <p class="col-md-12">
                            Bạn khỏe không?. Tôi viết thư này để cho bạn một lời khuyên về việc chuẩn bị cho bữa tiệc sinh nhật của người quản lý mới của bạn
                        </p>
                        <p class="col-md-12">
                            Bữa tiệc sinh nhật của người quản lý của bạn là một bữa tiệc không chính thức, vì vậy bạn nên mặc áo phông và quần jean. Họ có thể làm cho bạn cảm thấy thoải mái. Bạn nên tặng cô ấy một chiếc túi xách vì cô ấy có thể mang nó đi làm
                        </p>
                        <p class="col-md-12">
                           Quản lý của bạn là một nữ doanh nhân thành đạt. Do đó, bạn nên chọn một chiếc túi xách có thương hiệu nổi tiếng. Túi xách này nên đơn giản nhưng thời trang. Bạn không nên chọn một chiếc túi xách nhiều màu sắc vì cô ấy đã ở tuổi trung niên.
                        </p>
                         <p class="col-md-12">
                             Bạn có thể đến siêu thị để mua quà tặng. Có nhiều loại túi xách với chất lượng cao cho bạn quá lựa chọn ở đó.
                        </p>
                        <p class="col-md-12">
                            Tôi hy vọng rằng lời khuyên của tôi sẽ hữu ích cho bạn.
                            <br> Lời chúc tốt nhất. Mai
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