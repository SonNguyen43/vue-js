<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Dear Manager,
                </p>
                <p class="col-md-12">
                  I am Mai, in the reception department.
                </p>
                <p class="col-md-12">
                    This year I still have 10 days off annual holiday. I would like to ask for permission of taking a week leave from 10 to 16 Dcember to visit my family and attend my sister’s wedding.
                </p>
                <p class="col-md-12">
                   When I amabsent, miss Minh takes my duty, I send all my reports and related work to her immediaely after your agreement. In addition, we still keep contact by email and phone to keep our work go smoothly.
                </p>
                <p class="col-md-12">
                  I hope that you will send me a favor.
                </p>
                <p class="col-md-12">
                  Yours sincerely, Mai
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Gửi quản lí
                        </p>
                        <p class="col-md-12">
                          Tôi là Mai, ở bộ phận lễ tân
                        </p>
                        <p class="col-md-12">
                            Năm nay tôi vẫn được nghỉ 10 ngày. Tôi muốn xin phép được nghỉ phép một tuần từ 10 đến 16 tháng 9 để thăm gia đình tôi và tham dự đám cưới chị gái của tôi.
                        </p>
                        <p class="col-md-12">
                           Khi tôi thất vọng, nhớ Minh nhận nhiệm vụ của mình, tôi gửi tất cả các báo cáo và công việc liên quan của mình cho cô ấy ngay sau khi bạn đồng ý. Ngoài ra, chúng tôi vẫn giữ liên lạc qua email và điện thoại để giữ cho công việc của chúng tôi diễn ra suôn sẻ.
                        </p>
                         <p class="col-md-12">
                            Tôi hy vọng rằng bạn sẽ gửi cho tôi một đặc ân.
                        </p>
                        <p class="col-md-12">
                            Trân trọng, Mai
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