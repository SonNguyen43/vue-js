<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Hi Mom,
                </p>
                <p class="col-md-12">
                    I am happy to receive your email. I am writing to tell you about my best friend. 
                </p>
                <p class="col-md-12">
                    My best friend is Hoa. She is 20 years old. We have known each other for 3 years. Now, we are studying at the same school, Tay Do university. About her appearance, she is short and slim. 
                </p>
                <p class="col-md-12">
                   She has long black hair. Her eyes are wide. She has a straight nose and an oval face. About her personality, she is helpful. She usually helps me with my homework. If there is anything I don’t understand, she will explain it to me again.
                </p>
                <p class="col-md-12">
                   She is sympathetic. Whenever I have problems, she usually stands by me and listens to my problems. She can understand what I say, so she can help me and give the best advice.
                </p>
                <p class="col-md-12">
                   I hope that we will be best friends forever. Best wishes, Mai
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Gửi Mom,
                        </p>
                        <p class="col-md-12">
                           Tôi rất vui khi nhận được email của bạn. Tôi đang viết để nói với bạn về người bạn thân nhất của tôi.
                        </p>
                        <p class="col-md-12">
                            Bạn thân của tôi là Hoa. Cô ấy 20 tuổi. Chúng tôi quen nhau được 3 năm. Bây giờ, chúng tôi đang học cùng trường, đại học Tây Đô. Về ngoại hình, cô ấy thấp và thon.
                        </p>
                        <p class="col-md-12">
                           Cô ấy có mái tóc đen dài. Đôi mắt cô mở to. Cô có chiếc mũi thẳng và khuôn mặt trái xoan. Về tính cách của cô ấy, cô ấy rất hữu ích. Cô thường giúp mình làm bài tập. Nếu có bất cứ điều gì tôi không thể hiểu, cô ấy sẽ giải thích lại cho tôi.
                        </p>
                         <p class="col-md-12">
                            Cô ấy thông cảm. Bất cứ khi nào tôi gặp vấn đề, cô ấy thường đứng cạnh tôi và lắng nghe những vấn đề của tôi. Cô ấy có thể hiểu những gì tôi nói, vì vậy cô ấy có thể giúp tôi và đưa ra lời khuyên tốt nhất.
                        </p>
                        <p class="col-md-12">
                           Tôi hy vọng rằng chúng ta sẽ là bạn tốt nhất mãi mãi. Lời chúc tốt đẹp nhất, Mai
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