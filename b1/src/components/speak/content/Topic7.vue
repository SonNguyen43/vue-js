<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 7 - ENVIRONMENT</h3>
        <hr>
        <p class="position-relative">

            I would like to talk about enviroment. <br>
            The environment today has many <b data-toggle="tooltip" data-placement="top" title="những vấn đề" class="text-danger">problems such</b> as <b data-toggle="tooltip" data-placement="top" title="nóng lên toàn cầu" class="text-danger">global warming</b>, air pollution, water pollution, noise pollution. <br>
            Global warming is the <b data-toggle="tooltip" data-placement="top" title="gia tăng" class="text-danger">increase</b> in the earth’s <b data-toggle="tooltip" data-placement="top" title="nhiệt độ" class="text-danger">temperature</b>. This is a type of greenhouse effect. <br>
            <b data-toggle="tooltip" data-placement="top" class="text-danger" title="phá rừng">Deforestation </b> is the most <b data-toggle="tooltip" data-placement="top" class="text-danger" title="nghiêm trọng">serious </b>  problem. People have destroyed forests for woods. <b data-toggle="tooltip" data-placement="top" class="text-danger" title="đây là những điều ảnh hưởng đến môi trường">This <b data-toggle="tooltip" data-placement="top" class="text-danger" title="ảnh hưởng">affects</b>  the environment seriously</b> .<br>
            In my opinion, protecting the environment is more important, because we can’t live happily and healthily if our environment is <b data-toggle="tooltip" data-placement="top" class="text-danger" title="ô nhiễm nghiêm trọng">seriously polluted</b> .<br>
            Companies are more <b data-toggle="tooltip" data-placement="top" class="text-danger" title="chịu trách nhiệm">responsible</b>  for environmental pollution because their <b data-toggle="tooltip" data-placement="top" class="text-danger" title="chất thải">waste</b>  affects the environment <b data-toggle="tooltip" data-placement="top" class="text-danger" title="tệ">badly</b> .<br>
            I think <b data-toggle="tooltip" data-placement="top" class="text-danger" title="tất cả người dân">both individual people </b>  and  <b data-toggle="tooltip" data-placement="top" class="text-danger" title="chính phủ">the government</b> are  <b data-toggle="tooltip" data-placement="top" class="text-danger" title="có trách nhiệm">responsible</b> for  <b data-toggle="tooltip" data-placement="top" class="text-danger" title="bảo vệ môi trường sống của họ">environmental problems in order to protect their lives</b>. <br>
            To help prevent pollution I myself don’t  <b data-toggle="tooltip" data-placement="top" class="text-danger" title="xả rác">litter</b>, plant trees,  <b data-toggle="tooltip" data-placement="top" class="text-danger" title="nhặt rác">pick up garbage</b>, keep our environment clean, save energy and water.<br>
            In short, we should protect our environment to have a better life. <br>
            That’s all ! Thank you for your listening!

            
            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. What are some types of pollution ?</div><span class="text-success d-inline"> (một số loại ô nhiễm môi trường ?)</span>
            <div class="mb-3 answer text-dark">They are air pollution, soil pollution, water pollution and noise pollution.</div>

        <div class="question text-primary d-inline">2. Tell some examples of pollution in your country?</div><span class="text-success d-inline"> (cho một vài ví dụ về ô nhiễm môi trường ở quốc gia của bạn?)</span>
            <div class="mb-3 answer text-dark">Some types of pollution in Vietnam are water pollution, air pollution, soil polution and noise pollution.</div>

        <div class="question text-primary d-inline">3. What can you do to help prevent pollution?</div><span class="text-success d-inline"> (bạn có thể làm gì để ngăn chặn sự ô nhiễm ?)</span>
            <div class="mb-3 answer text-dark">To help prevent pollution I myself don’t litter, plant trees, pick up garbage, keep our environment clean, save energy and water</div>

        <div class="question text-primary d-inline">4. Which is more important, increasing people's standard of living, or protecting the environment?</div><span class="text-success d-inline"> (điều nào quan trọng hơn, tang mức sống ng dân và bảo vệ môi trường ?)</span>
            <div class="mb-3 answer text-dark">In my opinion, protecting the environment is more important, because we can’t live happily and healthily if our environment is seriously polluted.</div>

        <div class="question text-primary d-inline">5. Who do you think is more responsible for pollution, individual people or the government? Explain?</div><span class="text-success d-inline"> (bạn nghĩ ai là người sẽ chịu trách nhiệm nhiều hơn với ô nhiễm, cá nhân hay chính quyền, giải thích! )</span>
            <div class="mb-3 answer text-dark">I think both individual people and the government are responsible for environmental problems in order to protect their lives. </div>

        <div class="question text-primary d-inline">6. What is the most important issue facing the environment today? </div><span class="text-success d-inline"> (vấn đề nghiêm trọng nhất đối với môi trường hiện nay là gì ?)</span>
            <div class="mb-3 answer text-dark">It’s people’s <b data-toggle="tooltip" data-placement="top" class="text-danger" title="nhận thức">awareness</b>. Most people <b data-toggle="tooltip" data-placement="top" class="text-danger" title="thiếu nhận thức">lack of awareness</b> of <b data-toggle="tooltip" data-placement="top" class="text-danger" title="cứu lấy">saving</b> the earth, and some know but they don’t care.</div>

        <div class="question text-primary d-inline">7. Are companies more or less environmentally responsible for environmental pollution? Why ?</div><span class="text-success d-inline"> (các công ty ít nhiều phải chịu trách nhiệm cho việc ô nhiễm môi trường, tại sao ?)</span>
            <div class="mb-3 answer text-dark">I think Companies are more responsible for environmental pollution because their waste affects the environment badly</div>

        <div class="question text-primary d-inline">8.What is global warming? </div><span class="text-success d-inline"> (nóng lên toàn cầu là gì ?)</span>
            <div class="mb-3 answer text-dark">Global Warming is the increase of Earth's average surface temperature. This is a type of greenhouse effect.</div>

        <div class="question text-primary d-inline">9. What's happening to forests in the world?</div><span class="text-success d-inline">(có chuyện gì xảy ra với rừng trên thế giới ?)</span>
            <div class="mb-3 answer text-dark">Deforestation is the most serious problem. People have destroyed forests for woods. This affects the environment seriously.</div>
            
        <div class="question text-primary d-inline">10. Do you recycle? What? How? </div><span class="text-success d-inline">(bạn có tái chế thứ gì không, đó là gì, tại sao ?)</span>
           <div class="mb-3 answer text-dark">No, I don’t</div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: 'I would like to talk about enviroment.The environment today has many problems such as global warming, air pollution, water pollution, noise pollution.Global warming is the increase in the earth’s temperature. This is a type of greenhouse effect.Deforestation is the most serious problem. People have destroyed forests for woods. This affects the environment seriously.In my opinion, protecting the environment is more important, because we can’t live happily and healthily if our environment is seriously polluted.Companies are more responsible for environmental pollution because their waste affects the environment badly.I think both individual people and the government are responsible for environmental problems in order to protect their lives. To help prevent pollution I myself don’t litter, plant trees, pick up garbage, keep our environment clean, save energy and water.In short, we should protect our environment to have a better life. That’s all ! Thank you for your listening!'
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

