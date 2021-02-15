<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 1 - INTRODUCING YOURSELF</h3>
        <hr>
        <p class="position-relative">
            Hello Teachers!
            I would like to talk about myself. My full name is Nguyen Binh Hong Son, 22 years old.
            I’m from Can Tho, I’m a developer, I’m Vietnamese, I’m single.<br> 
            There are 4 people in my family. They are my parents, me and my younger brother.  
            My father is a <b data-toggle="tooltip" data-placement="top" title="kinh doanh" class="text-danger">business man</b>. My mother is a housewife. Me and my younger brother are students. 
            My hobbies are watching TV and listening to music. That’s all about myself. Thanks for your listening !
            
            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. What’s your name?</div><span class="text-success d-inline"> (bạn tên gì ?)</span>
            <div class="mb-3 answer text-dark">My name’s Sơn</div>

        <div class="question text-primary d-inline">2. Where are you from?</div><span class="text-success d-inline"> (từ đâu tới ?)</span>
            <div class="mb-3 answer text-dark">I’m from Cần Thơ</div>

        <div class="question text-primary d-inline">3. What’s your nationality?</div><span class="text-success d-inline"> (quốc tịch là gì ?)</span>
            <div class="mb-3 answer text-dark">I’m Vietnamese</div>

        <div class="question text-primary d-inline">4. What’s your ( home ) address?/ Where do you live?</div><span class="text-success d-inline"> (địa chỉ nhà / sống ở đâu ?)</span>
            <div class="mb-3 answer text-dark">My address is 6 Tran Vinh Kiet street, Ninh Kieu district, Cantho city</div>

        <div class="question text-primary d-inline">5. How old are you?</div><span class="text-success d-inline"> (bạn mấy tuổi ?)</span>
            <div class="mb-3 answer text-dark">I’m 22 years old.</div>

        <div class="question text-primary d-inline">6. What’s your job? Where do you study or work?</div><span class="text-success d-inline"> (công việc của bạn là gì / nơi học hoặc làm việc ?)</span>
            <div class="mb-3 answer text-dark">I’m a/an …………. I work in …....... company.</div>

        <div class="question text-primary d-inline">7. What’s your hobby?/ What do you like to do in your free time?</div><span class="text-success d-inline"> (sở thích là gì ?)</span>
            <div class="mb-3 answer text-dark">In my free time, I like to watch TV and listen to music</div>

        <div class="question text-primary d-inline">8. Who do you live with?</div><span class="text-success d-inline"> (ai sống cùng bạn ?)</span>
            <div class="mb-3 answer text-dark">I’m living with my parents</div>

        <div class="question text-primary d-inline">9.  How many people are there in your family?</div><span class="text-success d-inline"> (có bao nhiêu người trong gia đình ?)</span>
            <div class="mb-3 answer text-dark">There are 4 people in my family. They are my parents, me and my border</div>
            
        <div class="question text-primary d-inline">10.  How old is your husband/wife? What does she or he do?</div>
           <div class="mb-3 answer text-dark">He/she is……years old. He/she is a/an …...........</div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: ' Hello Teachers! I would like to talk about myself. My full name is Nguyễn Bình Hồng Sơn, 22 years old. I’m from Can Tho, I’m a developer, I’m Vietnamese, I’m single.<br> There are 4 people in my family. They are my parents, me and my younger brother.   My father is a business man. My mother is a housewife. Me and my younger brother are students. My hobbies are watching TV and listening to music. That’s all about myself. Thanks for your listening !'
        }
    },
    created(){
        
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