<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Hi Thanh,
                </p>
                <p class="col-md-12">
                    My family will visit grandparents in the countryside on next weekend. We are going to have a chance to enjoy the fresh fruits and breathe the clear air in my grandparentsgarden
                </p>
                <p class="col-md-12">
                    We will also have a joyful time together when going fishing and havingthe simple but very tasty dish with what we catch. Moreover, flying kites on the fields after the crop with my cousins will be wonderful.
                </p>
                <p class="col-md-12">
                   Now, I am finding some special gifts for my grandparents and my counsins. I feel very exctied that I can meet them in a short time.
                </p>
                <p class="col-md-12">
                   What is your plan for weekend holidays?
                </p>
                <p class="col-md-12">
                   Huyen
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Chào Thanh,
                        </p>
                        <p class="col-md-12">
                            Gia đình tôi sẽ về thăm ông bà ở quê vào cuối tuần tới. Chúng tôi sẽ có cơ hội thưởng thức những trái cây tươi và hít thở không khí trong lành ở ông bà tôi
                        </p>
                        <p class="col-md-12">
                            Chúng tôi cũng sẽ có khoảng thời gian vui vẻ bên nhau khi đi câu cá và có món ăn đơn giản nhưng rất ngon với những gì chúng tôi bắt được. Hơn nữa, thả diều trên các cánh đồng sau vụ mùa với anh em họ của tôi sẽ rất tuyệt vời.
                        </p>
                        <p class="col-md-12">
                           Bây giờ, tôi đang tìm một số quà tặng đặc biệt cho ông bà và những người bạn của tôi. Tôi cảm thấy rất phấn khích vì tôi có thể gặp họ trong một thời gian ngắn.
                        </p>
                         <p class="col-md-12">
                            Kế hoạch của bạn cho kỳ nghỉ cuối tuần là gì?
                        </p>
                        <p class="col-md-12">
                           Huyen
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