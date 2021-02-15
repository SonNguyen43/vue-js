<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row mt-3 position-relative">
                <p class="col-md-12">
                    Dear Thanh,
                </p>
                 <p class="col-md-12">
                    Do you indecisively choose studying abroad and do you need my advice?
                    Well, studying abroad offers you great opportunities to study the new technologies and most recent scientific achievements as well as elite professional teaching staffs. In addition, you will be equipped with the valuable and updated knowledge which may help you find jobs easily after graduation. <br>
                    However, studying abroad is often expensive. The school and the living cost are the biggest prolems. Moreover, when studying in a new country without any relatives the language barrier may also one of the most difficulties that you must consider carefully.
                </p>
                 <p class="col-md-12">
                    I look forward to hearing from you soon. <br>
                    Take care,
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
                            Gửi Thanh,
                        </p>
                        <p class="col-md-12">
                            Bạn thiếu quyết đoán chọn du học và bạn có cần lời khuyên của tôi không? Vâng, du học cung cấp cho bạn cơ hội tuyệt vời để nghiên cứu các công nghệ mới và thành tựu khoa học gần đây nhất cũng như đội ngũ giảng viên chuyên nghiệp ưu tú. Ngoài ra, bạn sẽ được trang bị những kiến thức có giá trị và cập nhật có thể giúp bạn tìm việc dễ dàng sau khi tốt nghiệp.
                        </p>
                        <p class="col-md-12">
                            Tuy nhiên, du học thường tốn kém. Trường học và chi phí sinh hoạt là những sinh sản lớn nhất. Hơn nữa, khi học tập ở một đất nước mới mà không có bất kỳ người thân nào, rào cản ngôn ngữ cũng có thể là một trong những khó khăn nhất mà bạn phải cân nhắc kỹ lưỡng.
                        </p>
                        <p class="col-md-12">
                            Tôi mong sớm nhận được hồi âm từ bạn. <br>
                            Bảo trọng nhé, Mai
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