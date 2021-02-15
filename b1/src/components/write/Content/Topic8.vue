<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                   Hi Minh,
                </p>
                <p class="col-md-12">
                   Stutyding and working at the same time makes you busier and easy to get stress. In addition, your girlfriend is unhappy beacause you do not have enough time to beside her and take her around as usual. I know how your feeling now is.
                </p>
                <p class="col-md-12">
                    Now, you should have a timetable for work and study then balance working and relaxing. To get more time with girlfriend, you should ask her to be with you sharing idea and doing exercise together as much as she can.
                </p>
                <p class="col-md-12">
                   Beside, keep calm, be postive, and sleep enough to avoid stress.
                </p>
                <p class="col-md-12">
                  I hope you and your girlfriend will be happy soon.
                </p>
                <p class="col-md-12">
                  Mai
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Chào Minh
                        </p>
                        <p class="col-md-12">
                           Học hành và làm việc cùng một lúc làm cho bạn bận rộn hơn và dễ bị căng thẳng. Ngoài ra, bạn gái của bạn không vui vì bạn không có đủ thời gian để ở bên cạnh và đưa cô ấy đi chơi như bình thường. Tôi biết cảm giác của bạn bây giờ là như thế nào.
                        </p>
                        <p class="col-md-12">
                            Bây giờ, bạn nên có thời gian biểu cho công việc và học tập sau đó cân bằng giữa làm việc và thư giãn. Để có thêm thời gian với bạn gái, bạn nên yêu cầu cô ấy cùng bạn chia sẻ ý tưởng và tập thể dục cùng nhau nhiều nhất có thể.
                        </p>
                        <p class="col-md-12">
                           Bên cạnh, giữ bình tĩnh, tư thế và ngủ đủ để tránh căng thẳng.
                        </p>
                         <p class="col-md-12">
                            Tôi hy vọng bạn và bạn gái của bạn sẽ sớm hạnh phúc.
                        </p>
                        <p class="col-md-12">
                            Mai
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