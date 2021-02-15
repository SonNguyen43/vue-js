<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Dear Dung,
                </p>
                <p class="col-md-12">
                    Oh, long time no see! 10 years ago, you and I went to the same tay Do university. I was very happy when I received your email.
                </p>
                <p class="col-md-12">
                    Since we graduated, I have ived and worked in Can Tho city. At the time, I thought hi would work in ho Chi Minh city with you. But, I got married earlier than planned so I couldn’t go with you.
                </p>
                <p class="col-md-12">
                    Currently, I have a son. He is 4 years old and loves me so much. Every day, I take him to school and then I go to work. I work as an accountant at Can Tho state treasury.
                </p>
                <p class="col-md-12">
                    On weekend, I go to school to improve my knowledge. Please teel me some news about you? It’s late, I have to take care of my son to sleep. I will be very happy to receive your reply soon
                </p>
                <p class="col-md-12">
                   Love,
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Gửi Dung,
                        </p>
                        <p class="col-md-12">
                            Ôi, lâu rồi không gặp! 10 năm trước, tôi và bạn học cùng trường đại học Do Do. Tôi đã rất hạnh phúc khi nhận được email của bạn.
                        </p>
                        <p class="col-md-12">
                            Kể từ khi chúng tôi tốt nghiệp, tôi đã ived và làm việc tại thành phố Cần Thơ. Lúc đó, tôi nghĩ hi sẽ làm việc ở thành phố Hồ Chí Minh với bạn. Nhưng, tôi kết hôn sớm hơn dự định nên tôi không thể đi với bạn.
                        </p>
                        <p class="col-md-12">
                           Hiện tại, tôi có một đứa con trai. Anh ấy 4 tuổi và yêu tôi rất nhiều. Mỗi ngày, tôi đưa anh đến trường và sau đó tôi đi làm. Tôi làm kế toán tại kho bạc nhà nước Cần Thơ.
                        </p>
                         <p class="col-md-12">
                            Cuối tuần, tôi đi học để nâng cao kiến thức. Xin vui lòng cho tôi một số tin tức về bạn? Trời muộn, tôi phải chăm sóc con trai đi ngủ. Tôi sẽ rất vui khi nhận được trả lời của bạn sớm
                        </p>
                        <p class="col-md-12">
                           Love,
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