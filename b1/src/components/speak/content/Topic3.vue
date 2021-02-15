<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 3 - LIFESTYLE</h3>
        <hr>
        <p class="position-relative">
            In my opinion, a <b data-toggle="tooltip" data-placement="top" title="lối sống lành mạnh" class="text-danger">healthy lifestyle</b> is to eat fresh fruit and vegetables, drink a lot of water, not to drink <b data-toggle="tooltip" data-placement="top" title="rượu" class="text-danger">alcohol</b> and smoke, <b data-toggle="tooltip" data-placement="top" title="tập thể dục" class="text-danger">do exercise</b> and sleep well. <br>
            It is important to have a healthy lifestyle because it helps people live longer and <b data-toggle="tooltip" data-placement="top" title="ngăn ngừa" class="text-danger">prevent</b><b data-toggle="tooltip" data-placement="top" title="bệnh tật" class="text-danger"> sicknesses</b>. <br> 
            I have 3 meals and eat a lot of fruits, vegetables. I drink 2 litter of water every day. I usually sleep 8 hours a day and I often do exercise 3 times a week. <br>
            -	Every day I wear <b data-toggle="tooltip" data-placement="top" title="đồng phục" class="text-danger">uniform</b> to go to school. <br>
            -	When I go out with friends or family I like to wear shorts and a T-shirt. <br>
            -	I like <b data-toggle="tooltip" data-placement="top" title="nhạc nặng" class="text-danger">heavy music</b> <br>
            -	I like to enjoy fish, vegetables and fruit. <br>
            I don’t like to change my lifestyle because I am <b data-toggle="tooltip" data-placement="top" title="hài lòng" class="text-danger">satisfied</b> with it. I don’t want to change anymore. That’s all!!

            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. What kind of clothes/ music/ food… do you like?</div><span class="text-success d-inline"> (loại quần áo/nhạc/t.ăn mà bạn thích?)</span>
            <div class="mb-3 answer text-dark text-primary">
                -	I like to wear a T shirt and jeans <br>
                -	I like heavy music <br>
                -	I like to enjoy fish, vegetables and fruit. <br>
            </div>

        <div class="question text-primary d-inline">2. What do you usually wear to work every day? What do you usually wear when you go out with friends or family? </div><span class="text-success d-inline"> (mỗi ngày bạn mặc gì để đi làm? Mặc gì khi ra ngoài với bạn hoặc gia đình ?)</span>
            <div class="mb-3 answer text-dark text-primary">
                -	Every day I wear uniform to go to school. <br>
                -	When I go out with friends or family, I wear shorts and a T-shirt. <br>
            </div>

        <div class="question text-primary d-inline">3. Are you a fashionable person? </div><span class="text-success d-inline"> (bạn có phải một người thời trang ?)</span>
            <div class="mb-3 answer text-dark text-primary">I think I am a fashionable person because I often wear beautiful clothes every day. </div>

        <div class="question text-primary d-inline">4. Do you want your partner to be a stylish person? </div><span class="text-success d-inline"> (bạn muốn cộng sự của mình là một người thời trang ?)</span>
            <div class="mb-3 answer text-dark text-primary">No, I don’t. I think  the most important <b data-toggle="tooltip" data-placement="top" title="yếu tố" class="text-danger">factor</b> of a partner is his or her <b data-toggle="tooltip" data-placement="top" title="nhân cách" class="text-danger">personality</b>.</div>

        <div class="question text-primary d-inline">5. Adults usually disapprove of teenagers’ fashion. Do you think so? </div><span class="text-success d-inline"> (người lớn thường không tán thành thời trang thiếu niên, bạn nghĩ như thế nào ?)</span>
            <div class="mb-3 answer text-dark text-primary">I don’t agree with this saying. I think it <b data-toggle="tooltip" data-placement="top" title="phụ thuộc" class="text-danger">depends</b> on what and how they wear. </div>

        <div class="question text-primary d-inline">6. Do you like to change your lifestyle? Why/ why not? </div><span class="text-success d-inline"> (bạn có muốn thay đổi cách sống của mình? Tại sao/tại sao không ?)</span>
            <div class="mb-3 answer text-dark text-primary">I don’t like to change my lifestyle because I am satisfied with it.</div>

        <div class="question text-primary d-inline">7. “Lifestyle is how you live, and it reflects who you are” Do you agree? </div><span class="text-success d-inline"> (cách sống của bạn ảnh ánh bạn là ai. Có đúng không?)</span>
            <div class="mb-3 answer text-dark text-primary">I agree with this saying because <b data-toggle="tooltip" data-placement="top" title="cách chúng ta sống" class="text-danger">the ways we live</b> and <b data-toggle="tooltip" data-placement="top" title="cư xử" class="text-danger">behave</b> with other people <b data-toggle="tooltip" data-placement="top" title="phản ánh" class="text-danger">reflect</b> our <b data-toggle="tooltip" data-placement="top" title="cách sống" class="text-danger">personality</b>.</div>

        <div class="question text-primary d-inline">8. What do you think of people who dye their hair green and have  tattoos?</div><span class="text-success d-inline"> (bạn nghĩ gì về những người có tóc màu và hình xăm?)</span>
            <div class="mb-3 answer text-dark text-primary">I think they want to show their styles. We are not sure they are bad or not. We need time to know their personality.</div>

        <div class="question text-primary d-inline">9. What is a healthy lifestyle? </div><span class="text-success d-inline"> (thế nào là một lối sống lành mạnh?)</span>
            <div class="mb-3 answer text-dark text-primary">A healthy lifestyle is to eat fresh fruit and vegetables, drink a lot of water, not to drink alcohol or smoke, do exercise and sleep well.</div>

        <div class="question text-primary d-inline">10. Why is it important to have a healthy lifestyle? </div><span class="text-success d-inline"> (tại sao nó lại quan trọng để có một lối sống lành mạnh?)</span>
           <div class="mb-3 answer text-dark text-primary">It is important to have a healthy lifestyle because it helps people live longer and prevent sicknesses. </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: 'In my opinion, a healthy lifestyle is to eat fresh fruit and vegetables, drink a lot of water, not to drink alcohol and smoke, do exercise and sleep well. It is important to have a healthy lifestyle because it helps people live longer and prevent sicknesses. I have 3 meals and eat a lot of fruits, vegetables. I drink 2 litter of water every day. I usually sleep 8 hours a day and I often do exercise 3 times a week. Every day I wear uniform to go to school. When I go out with friends or family I like to wear shorts and a T-shirt. I like heavy music. I like to enjoy fish, vegetables and fruit. I don’t like to change my lifestyle because I am satisfied with it.I don’t want to change anymore. That’s all!'
        }
    },
    methods: {
      Speak(){
            var tts = window.speechSynthesis;
            var voices = [];
            var toSpeek = new SpeechSynthesisUtterance(this.textToSpeak);
            var selectedVoiceName = "Microsoft Zira Desktop - English (United States)";
            
            voices.forEach((voice)=>{
                if(voice.name === selectedVoiceName){
                    toSpeek.voice = voice;
                }
            });

            tts.speak(toSpeek);
      },
    },
}
</script>

<style scoped>
    .topic{
        width: 100%;
        height: 80vh;
        font-size: 20px;
        overflow: scroll;
    }
    p{
        text-align: justify;
    }
    .question {
        font-weight: bold;
        text-decoration: underline;
        opacity: 0.6;
    }
    .answer{
        font-weight: bold;
    }
    span{
        font-style: italic;
        text-decoration: none;
        opacity: 0.9;
    }
</style>