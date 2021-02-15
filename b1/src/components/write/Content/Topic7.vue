<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                   Dear Local Official,
                </p>
                <p class="col-md-12">
                    I am writing to tell you about an environmental problem in my community.My neighbors usually throw garbage in front of my house. The bad smell of the garbage makes me feel uncomfortable
                </p>
                <p class="col-md-12">
                    Sometimes, I feel sick with this terrible smell. Besides that, the garbage makes my house look dirty. I have told them about this problem many times, but they don’t want to listen to me. They suppose that in front of my house is a garbage dump
                </p>
                <p class="col-md-12">
                   They are not aware that they are polluting the air and disturbing people around them. I hope that you can find the solutions to these problems
                </p>
                <p class="col-md-12">
                   I look forward to hearing from you.
                </p>
                <p class="col-md-12">
                  Sincerely, Mai
                </p>

                  <button class="btn btn-warning position-absolute" style="right: 0; bottom: 0" v-if="show" @click="show = !show">Hidden the translation</button>
                  <button class="btn btn-success text-white position-absolute" style="right: 0; bottom: 0" v-else @click="show = !show">Show the translation</button>
            </div>
            <hr>
          
            <div class="row">
                <transition name="slide-fade">
                   <div v-if="show" class="">
                        <p class="col-md-12">
                            Gửi Local Official,
                        </p>
                        <p class="col-md-12">
                           Tôi viết thư để kể cho bạn về một vấn đề môi trường trong cộng đồng của tôi. Hàng xóm của tôi thường vứt rác trước nhà tôi. Mùi hôi của rác khiến tôi cảm thấy khó chịu.
                        </p>
                        <p class="col-md-12">
                            Đôi khi, tôi cảm thấy phát ốm với mùi kinh khủng này. Bên cạnh đó, rác làm cho nhà tôi trông bẩn. Tôi đã nói với họ về vấn đề này nhiều lần, nhưng họ không muốn lắng nghe tôi. Họ cho rằng trước nhà tôi là bãi rác
                        </p>
                        <p class="col-md-12">
                           Họ không nhận thức được rằng họ đang làm ô nhiễm không khí và làm phiền mọi người xung quanh. Tôi hy vọng rằng bạn có thể tìm thấy giải pháp cho những vấn đề này
                        </p>
                         <p class="col-md-12">
                            Tôi mong muốn được nghe từ bạn
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