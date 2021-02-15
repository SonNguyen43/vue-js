<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 4 - CITY LIFE</h3>
        <hr>
        <p class="position-relative">
            I’d like to talk about the city life. <br>
            Can Tho city is a beautiful place to live. I like living here because there are many good schools, hospitals and working places. <br>
            <b data-toggle="tooltip" data-placement="top" title="bên cạnh đó" class="text-danger">Besides</b>, I have many <b data-toggle="tooltip" data-placement="top" title="hàng xóm tốt bụng" class="text-danger">kind neighbors</b>. They are very friendly and helpful. <br>
            However, <b data-toggle="tooltip" data-placement="top" title="chi phí" class="text-danger">the cost of</b> living in a big city is more <b data-toggle="tooltip" data-placement="top" title="đắt" class="text-danger">expensive</b> than in the <b data-toggle="tooltip" data-placement="top" title="nông thôn" class="text-danger">countryside</b>. <br>
            <b data-toggle="tooltip" data-placement="top" title="bên cạnh đó" class="text-danger">Also</b>, the air is really <b data-toggle="tooltip" data-placement="top" title="ô nhiễm" class="text-danger">polluted</b> and city life is too fast. <br>
            <b data-toggle="tooltip" data-placement="top" title="mặc dù" class="text-danger">Although</b> there are some problems for living in a big city, I <b data-toggle="tooltip" data-placement="top" title="vẫn" class="text-danger">still</b> like to live in Can Tho city because the <b data-toggle="tooltip" data-placement="top" title="mức sống" class="text-danger">standard</b> of living in Can Tho is good. <br>
            <b data-toggle="tooltip" data-placement="top" title="tóm lại" class="text-danger">In short</b>, city life is always good and modern. I love city life. <br>
            That’s all! Thanks for your listening!
            
            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. Did you grow up in the city or in the countryside?</div><span class="text-success d-inline"> (bạn lớn lên ở TP hay nông thôn ?)</span>
            <div class="mb-3 answer text-dark">I grew up in the city/in the countryside.</div>

        <div class="question text-primary d-inline">2. Where is your hometown? Please tell something about it</div><span class="text-success d-inline"> (quê của bạn ở đâu ?/ nói một ít về nó ?)</span>
            <div class="mb-3 answer text-dark">
                I am from Can Tho. <br> Can Tho is a good place to live because it has a lot of good universities, hospitals and supermarkets etc.
            </div>

        <div class="question text-primary d-inline">3. In your hometown, where can you see a film or go shopping?</div><span class="text-success d-inline"> (quê hương của bạn thì nơi nào có thể xem phim hoặc mua sắm ?)</span>
            <div class="mb-3 answer text-dark">
                In Can Tho I can see a film at Coop Mark <br>
                I can go shopping in Big C or Lotte Mark.
            </div>

        <div class="question text-primary d-inline">4. Where are you living now? What do you think about your neighborhood ?</div><span class="text-success d-inline"> (bạn đang sống ở đâu ? bạn nghĩ gì về những người hàng xóm của bạn ?)</span>
            <div class="mb-3 answer text-dark">
                I’m living in Nink Kieu district, Can Tho city. <br>
                My neighborhood is clean,  <b data-toggle="tooltip" data-placement="top" title="yên tĩnh và an toàn" class="text-danger">quiet and safe</b>
            </div>

        <div class="question text-primary d-inline">5. Do you want to move to another place to live? Why/Why not? </div><span class="text-success d-inline"> (bạn muốn đi nơi khác sống không ? tại sao ?)</span>
            <div class="mb-3 answer text-dark">No, I don’t want to leave Can Tho because it is a nice place to live</div>

        <div class="question text-primary d-inline">6. Do you prefer to live in a big city or a small town? Why? </div><span class="text-success d-inline"> (bạn thích sống ở nông thôn hay thành phố ? tại sao ?)</span>
            <div class="mb-3 answer text-dark">I prefer to live in a big city because of good living conditions with good schools, good hospitals and good job  <b data-toggle="tooltip" data-placement="top" title="những cơ hội" class="text-danger">opportunities…</b></div>

        <div class="question text-primary d-inline">7. Which part of our country would you like to live in? Why? </div><span class="text-success d-inline"> (bạn thích sống nơi nào ở đây ‘VN’ ? tại sao ?)</span>
            <div class="mb-3 answer text-dark">I would like to live in the South of Vietnam, special Can Tho because the weather is  <b data-toggle="tooltip" data-placement="top" title="thoải mái" class="text-danger">comfortable</b>, the people are friendly….</div>

        <div class="question text-primary d-inline">8. What are some good things and bad things about Can Tho city and your hometown? </div><span class="text-success d-inline"> (những điều tốt và không tốt ở cần thơ và quê hương bạn là gì ?)</span>
            <div class="mb-3 answer text-dark">I think Cantho city is a nice place to live with good schools, hospitals and jobs. However, sometimes, many streets are <b data-toggle="tooltip" data-placement="top" title="bị ngập" class="text-danger">flooded</b> in the  <b data-toggle="tooltip" data-placement="top" title="mùa mưa" class="text-danger">rainy season</b></div>

        <div class="question text-primary d-inline">9. Why do many people want to live in big cities?</div><span class="text-success d-inline"> (tại sao nhiều người muốn sống ở TP lớn ?)</span>
            <div class="mb-3 answer text-dark">Because in big cities there are many good schools, good hospitals, good services and good job opportunities.</div>
            
        <div class="question text-primary d-inline">10. In your opinion, which city in Vietnam …………………?</div>
           <div class="mb-3 answer text-dark">
                -	is the biggest one		- it’s Ho Chi Minh city <br>
                -	is the most expensive one	- It’s Hanoi capital <br>
                -	is the most  <b data-toggle="tooltip" data-placement="top" title="bình yên nhất" class="text-danger">peaceful</b> one	- It’s Da Nang city <br>
                -	is the most beautiful one	- It’s Nha Trang/ Da Lat <br>
           </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: 'I’d like to talk about the city life. Can Tho city is a beautiful place to live. I like living here because there are many good schools, hospitals and working places. Besides, I have many kind neighbors. They are very friendly and helpful. However, the cost of living in a big city is more expensive than in the countryside. Also, the air is really polluted and city life is too fast. Although there are some problems for living in a big city, I still like to live in Can Tho city because the standard of living in Can Tho is good. In short, city life is always good and modern. I love city life. That’s all! Thanks for your listening!'
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



