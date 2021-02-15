<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 8 - FRIENDS</h3>
        <hr>
        <p class="position-relative">

            I would like to talk about friends. <br>
            I have many friends. They are my classmates, my roommates and my neighbors. <br>
            I  <b data-toggle="tooltip" data-placement="top" title="thích" class="text-danger">prefer</b> to  <b data-toggle="tooltip" data-placement="top" title="dành" class="text-danger">spend</b> my time with my friends because I want to share experience, happiness and sadness with them.<br>
            When we are together, we usually playing game.<br>
            As a friend, we can help  <b data-toggle="tooltip" data-placement="top" title="lẫn nhau" class="text-danger">each other</b> in work and in lives.<br>
            To be a good friend, we   <b data-toggle="tooltip" data-placement="top" title="nên giúp đỡ họ khi họ cần" class="text-danger">should help our friends when they are in need</b>.<br>
            I think I’m a good friend, because I usually care for my friends’ needs and feelings. <br>
            That’s all ! Thank you for your listening!
            
            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. Do you have many friends? Who are they? </div><span class="text-success d-inline"> (bạn có nhiều bạn không? Họ là ai ?)</span>
            <div class="mb-3 answer text-dark">Yes, I have many friends. They are my classmates, roommates and neighbors. </div>

        <div class="question text-primary d-inline">2. Do you prefer to spend your time alone or with friends? Why? </div><span class="text-success d-inline"> (bạn thích dành thời gian cho bạn bè hay một mình? Tại sao ?)</span>
            <div class="mb-3 answer text-dark">I prefer to spend my time with my friends because I want to share experience, happiness and sadness with them.</div>

        <div class="question text-primary d-inline">3. What do you and your friends often do when you get together?</div><span class="text-success d-inline"> (bạn và các bạn của bạn thường làm gì khi gặp nhau ?)</span>
            <div class="mb-3 answer text-dark">When we are together, we usually playing game</div>

        <div class="question text-primary d-inline">4. What can you do for your friends? </div><span class="text-success d-inline"> (bạn có thể làm gì cho bạn bè của bạn ?)</span>
            <div class="mb-3 answer text-dark">I can make them laugh by funny jokes, and help them when they are in need.</div>

        <div class="question text-primary d-inline">5.What can your friends do for you? </div><span class="text-success d-inline"> (bạn của bạn đã làm gì cho bạn ?)</span>
            <div class="mb-3 answer text-dark">They also help me when I’m in need. For example, when I have some problems, they usually give me good <b data-toggle="tooltip" data-placement="top" title="lời khuyên" class="text-danger">advice</b> to <b data-toggle="tooltip" data-placement="top" title="vượt qua" class="text-danger">overcome</b> these problems.</div>

        <div class="question text-primary d-inline">6. Do you have many good friends? Could you please tell about your best friend?</div><span class="text-success d-inline"> (bạn có nhiều người bạn tốt không? Kể chúng tôi nghe người bạn tốt nhất của bạn?)</span>
            <div class="mb-3 answer text-dark">I have many good friends but my best friend is A. She is my classmate. She is very friendly, lovely. She usually helped me a lot when I’m in need.</div>

        <div class="question text-primary d-inline">7. What do you want most in a friend?</div><span class="text-success d-inline"> (bạn muốn gì ở người bạn tốt nhất đó? )</span>
            <div class="mb-3 answer text-dark">I just want my friend to be <b data-toggle="tooltip" data-placement="top" title="trung thực" class="text-danger">honest</b> </div>

        <div class="question text-primary d-inline">8. How to be a good friend? </div><span class="text-success d-inline"> (thế nào là 1 người bạn tốt)</span>
            <div class="mb-3 answer text-dark">To be a good friend, we should help our friends when they are in need.</div>

        <div class="question text-primary d-inline">9. Are you a good friend? Why do you think so? </div><span class="text-success d-inline"> (bạn có phải một người bạn tốt không ? tại sao bạn lại nghĩ vậy ?)</span>
            <div class="mb-3 answer text-dark">I think I’m a good friend, because I usually care for my friends’ needs and feelings</div>
            
        <div class="question text-primary d-inline">10. Are you interested in making new friends? Why? </div><span class="text-success d-inline">bạn có muốn kết bạn thêm nhiều bạn mới không ? tại sao ?</span>
           <div class="mb-3 answer text-dark">Yes, of course, because we will have more joys and more people to share many things with if we have more friends.</div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: "I would like to talk about friends. I have many friends. They are my classmates, my roommates and my neighbors. I prefer to spend my time with my friends because I want to share experience, happiness and sadness with them. When we are together, we usually playing game. As a friend, we can help each other in work and in lives. To be a good friend, we  should help our friends when they are in need. I think I’m a good friend, because I usually care for my friends’ needs and feelings. That’s all ! Thank you for your listening!"
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

