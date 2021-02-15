<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 5 - HEALTH</h3>
        <hr>
        <p class="position-relative">
            I’d like to talk about my health! Health is very important to us. <br>
            We can’t do anything without health even <b data-toggle="tooltip" data-placement="top" title="mặc dù" class="text-danger">though</b> we have a lot of money. I am very <b data-toggle="tooltip" data-placement="top" title="sức khỏe tốt" class="text-danger">healthy</b> because I do exercise every day. <br>
            To have good health we should eat much vegetable, fish, fruit. <br>
            We shouldn’t eat much <b data-toggle="tooltip" data-placement="top" title="đường và chất béo" class="text-danger">sugar and fat</b>, stay up late, eat late, drink a lot of  beer and wine. Because they are not good for our health.<br>
            Sometimes, I have <b data-toggle="tooltip" data-placement="top" title="đau đầu" class="text-danger">headache</b> because I have a lot of things to do! <br>
            I sleep 8 hours a day! I do exercises 3 days a week. <br>
            I think we should protect our health because health is very important in life.<br>
            That’s all! Thank for your listening!

            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. Do you think you are healthy? Why do you think so? </div><span class="text-success d-inline"> (bạn nghĩ gì về sức khỏe của mình/ tại sao bạn lại nghĩ vậy ?)</span>
            <div class="mb-3 answer text-dark">Yes, I think I’m healthy because I do exercise every day</div>

        <div class="question text-primary d-inline">2. What food do you eat to be healthy?</div><span class="text-success d-inline"> (ăn gì để có 1 sức khỏe tốt  ?)</span>
            <div class="mb-3 answer text-dark">To be healthy, I eat vegetables, meat, and fish</div>

        <div class="question text-primary d-inline">3. What food shouldn’t we eat much? </div><span class="text-success d-inline"> (loại thực phẩm không nên ăn ?)</span>
            <div class="mb-3 answer text-dark">I think We shouldn’t eat fast food, sugar and fat because they are not good for our health.</div>

        <div class="question text-primary d-inline">4. What do you do to keep fit?</div><span class="text-success d-inline"> (bạn làm gì để giữ dáng ?)</span>
            <div class="mb-3 answer text-dark">To keep fit, I think I should eat a lot of fruits and vegetables, drink a lot of water and do exercise every day.</div>

        <div class="question text-primary d-inline">5. Are you a member of a health spa or gym? </div><span class="text-success d-inline"> (bạn có phải thành viên của spa hay gym ?)</span>
            <div class="mb-3 answer text-dark">No, I’m not a member of a health spa or gym because I don’t have much time.</div>

        <div class="question text-primary d-inline">6. What habits are bad for your health?</div><span class="text-success d-inline"> (những thói quen có hại cho sức khỏe của bạn ?)</span>
            <div class="mb-3 answer text-dark">They are staying up late, eating late, drinking a lot of soft drink, beer  and wine. </div>

        <div class="question text-primary d-inline">7. Do you want to live to be 100 years old? Why/ why not?</div><span class="text-success d-inline"> (bạn có muốn sống tới 100 tuổi không ? tại sao ?)</span>
            <div class="mb-3 answer text-dark">
                No, I don’t. I don’t want to be very old and <b data-toggle="tooltip" data-placement="top" title="xấu xí" class="text-danger">ugly</b>. <br>
                Yes, of course. I want to see how our society changes.
            </div>

        <div class="question text-primary d-inline">8. Do you agree that health is the most valuable thing in life? Explain your ideas?</div><span class="text-success d-inline"> (bạn có đồng ý với sức khỏe là quan trọng nhất trong cuộc sống? Giải thích ý kiến của bạn ?)</span>
            <div class="mb-3 answer text-dark">
                Yes, I agree with this saying. I think health is gold. Health is very important to us. <br>
                We can’t do anything without health even though we have a lot of money.
            </div>

        <div class="question text-primary d-inline">9. Do you go for regular medical check-ups? Why? </div><span class="text-success d-inline"> (bạn có đi kiểm tra y tế thường xuyên không ?)</span>
            <div class="mb-3 answer text-dark">Yes, of course. It’s really <b data-toggle="tooltip" data-placement="top" title="cần thiết" class="text-danger">necessary </b>.</div>
            
        <div class="question text-primary d-inline">10. Do you usually get enough sleep? How many hours of sleep do you get a night? </div><span class="text-success d-inline"> (bạn có thường ngủ đủ giấc ? bạn ngủ bao lâu cho 1 đêm ?)</span>
           <div class="mb-3 answer text-dark">
                Yes, I usually get enough sleep, but sometimes I stay up late for studying. <br>
                I think I sleep about 7 or 8 hours a night. 
           </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: 'I’d like to talk about my health! Health is very important to us. We can’t do anything without health even though we have a lot of money. I am very healthy because I do exercise every day. To have good health we should eat much vegetable, fish, fruit. We shouldn’t eat much sugar and fat, stay up late, eat late, drink a lot of  beer and wine. Because they are not good for our health. Sometimes, I have headache because I have a lot of things to do! I sleep 8 hours a day! I do exercises 3 days a week. I think we should protect our health because health is very important in life. That’s all! Thank for your listening!'
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


