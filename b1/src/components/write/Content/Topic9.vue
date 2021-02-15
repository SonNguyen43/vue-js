<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Dear Lộc,
                </p>
                <p class="col-md-12">
                   How are you?. I am writing to tell you about my vacation last summer. Last summer, I went to Đà Lạt with my family. I stayed there in about three days. I went there by coach
                </p>
                <p class="col-md-12">
                    On the first day, we started at 1 am and came there at 7 pm. Then, we had breakfast and took a rest. In the afternoon, we visited Đà Lạt Flower garden and Love valley
                </p>
                <p class="col-md-12">
                   The scenery was very beautiful. There were many kinds of beautiful flowers. We took a lot of photos here. In the evening, we went to Đà Lạt market to buy some souvenirs. 
                </p>
                <p class="col-md-12">
                  This is one of the most memorable experience. I’m sure that I will go back to Đà Lạt 
                </p>
                <p class="col-md-12">
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
                            Gửi Lộc
                        </p>
                        <p class="col-md-12">
                           Bạn khỏe không?. Tôi đang viết để kể cho bạn về kỳ nghỉ của tôi vào mùa hè năm ngoái. Mùa hè năm ngoái, tôi đã đến Đà Lạt cùng gia đình. Tôi ở đó trong khoảng ba ngày. Tôi đến đó bằng xe khách
                        </p>
                        <p class="col-md-12">
                            Vào ngày đầu tiên, chúng tôi bắt đầu lúc 1 giờ sáng và đến đó lúc 7 giờ tối. Sau đó, chúng tôi ăn sáng và nghỉ ngơi. Vào buổi chiều, chúng tôi đến thăm vườn hoa Đà Lạt và thung lũng tình yêu
                        </p>
                        <p class="col-md-12">
                           Phong cảnh rất đẹp. Có nhiều loại hoa đẹp. Chúng tôi đã chụp rất nhiều ảnh ở đây. Vào buổi tối, chúng tôi đã đến chợ Đà Lạt để mua một số đồ lưu niệm.
                        </p>
                         <p class="col-md-12">
                            Đây là một trong những trải nghiệm đáng nhớ nhất. Tôi chắc chắn rằng tôi sẽ quay trở lại Đà Lạt
                        </p>
                        <p class="col-md-12">
                            Lời chúc tốt nhất, Mai
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