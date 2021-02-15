<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 6 - BEAUTY AND PHYSICAL ATTRACTIVENESS</h3>
        <hr>
        <p class="position-relative">

            I would like to talk about beauty and physical attractiveness. <br>
            I think beauty is <b data-toggle="tooltip" data-placement="top" title="cách bạn cảm nhận bên trong" class="text-danger">how you feel inside</b>, and it <b data-toggle="tooltip" data-placement="top" title="phản ánh" class="text-danger">reflects</b> in your eyes.<br>
            I think no one has the right to <b data-toggle="tooltip" data-placement="top" title="quyết định" class="text-danger">decide</b> who and what is beautiful, different people have different ideas about beauty.<br>
            I don’t think I’m very handsome, but I’m good looking, my true beauty is that.<br>
            I’m friendly, helpful and <b data-toggle="tooltip" data-placement="top" title="lạc quan" class="text-danger">optimistic</b>. <b data-toggle="tooltip" data-placement="top" title="thực ra" class="text-danger">Actually</b> I like to make new friends, help people, be optimistic in any <b data-toggle="tooltip" data-placement="top" title="tình huống" class="text-danger">situations</b>. <br>
            My friends think people are beautiful when they have an <b data-toggle="tooltip" data-placement="top" title="tâm hồn cởi mở" class="text-danger">open mind</b> and a <b data-toggle="tooltip" data-placement="top" title="trái tim nhân hậu" class="text-danger">kind heart</b>.<br>
            I agree with my friends and I think it is a good idea. <br>
            I  think <b data-toggle="tooltip" data-placement="top" title="vẻ đẹp bên ngoài" class="text-danger">Physical attractiveness</b> is only one of the most important <b data-toggle="tooltip" data-placement="top" title="yếu tố" class="text-danger">factors</b> <b data-toggle="tooltip" data-placement="top" title="dẫn đến" class="text-danger">leading</b> to success.<br>
            To be successful, we need to be hard working, <b data-toggle="tooltip" data-placement="top" title="kiên nhẫn" class="text-danger">patient</b>, <b data-toggle="tooltip" data-placement="top" title="linh hoạt và thông minh" class="text-danger">flexible and intelligent</b>.<br>
            That’s all ! Thank you for your listening!
            
            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. What is beauty? </div><span class="text-success d-inline"> (vẻ đẹp là gì?)</span>
            <div class="mb-3 answer text-dark">I think beauty is how you feel inside, and it reflects in your eyes. It’s not something physical.</div>

        <div class="question text-primary d-inline">2. Who decides who or what is beautiful?</div><span class="text-success d-inline"> (ai quyết định được ai or cái gì là đẹp ?)</span>
            <div class="mb-3 answer text-dark">I think no one has the right to decide who and what is beautiful, because different people have different ideas about beauty. </div>

        <div class="question text-primary d-inline">3. What do you think about your beauty?</div><span class="text-success d-inline"> (bạn gì về cái đẹp như thế nào ?)</span>
            <div class="mb-3 answer text-dark">I don’t think I’m very beautiful, but I’m good looking. My true beauty is that I’m friendly and helpful.</div>

        <div class="question text-primary d-inline">4. Do you think you have the same concept of beauty as your friends? Explain your idea?</div><span class="text-success d-inline"> (bạn có cùng suy nghĩ về cái đẹp như bạn bè của bạn, nêu ý kiến của bạn ?)</span>
            <div class="mb-3 answer text-dark">
                My friends think people are beautiful when they have an open mind and a kind heart. <br>
                I agree with my friends and I think it is a good idea. 
            </div>

        <div class="question text-primary d-inline">5. What is the most important feature when determining someone’s beauty? </div><span class="text-success d-inline"> (đặc trưng quan trọng nhất để xác định vẻ đẹp của 1 người là gì?)</span>
            <div class="mb-3 answer text-dark">
                I think the most important feature when determining someone’s beauty is his or her personality, because <b data-toggle="tooltip" data-placement="top" title="tính cách tồn tại lâu hơn ngoại hình" class="text-danger">personality lasts longer than physical beauty</b>
            </div>

        <div class="question text-primary d-inline">6. What do you think of beauty contests? </div><span class="text-success d-inline"> (bạn nghĩ gì về các cuộc thi sắc đẹp?)</span>
            <div class="mb-3 answer text-dark">	I think it’s a good <b data-toggle="tooltip" data-placement="top" title="cơ hội" class="text-danger">chance</b> for girls to show their beauty and for people to enjoy beauty. </div>

        <div class="question text-primary d-inline">7. What quality do you like most about yourself? Why? </div><span class="text-success d-inline"> (bạn thích gì nhất ở bản thân ?)</span>
            <div class="mb-3 answer text-dark">I think I’m always optimistic in life. That is the <b data-toggle="tooltip" data-placement="top" title="lí do" class="text-danger">reason</b> why I can <b data-toggle="tooltip" data-placement="top" title="vượt qua thử thách dễ dàng" class="text-danger">overcome many challenges easily</b>.</div>

        <div class="question text-primary d-inline">8.Name three words that describe you and explain how ?</div><span class="text-success d-inline"> (kể ra 3 từ để nói về bạn và giải thích nó !)</span>
            <div class="mb-3 answer text-dark">	I think they are friendly, helpful and optimistic. Actually I like to make new friends, help people in need and be optimistic in any situations. </div>

        <div class="question text-primary d-inline">9.  Do you think physical attractiveness is the most important factor leading to success?</div><span class="text-success d-inline"> (bạn có nghĩ rằng vẻ đẹp thể chất là yếu tố quan trọng nhất để dẫn đến thành công ?)</span>
            <div class="mb-3 answer text-dark">I don’t think so. Physical attractiveness is only one of the most important factors leading to success. To be successful, we need to be hard working, patient, flexible and intelligent.</div>
            
        <div class="question text-primary d-inline">10.  . Which one is more important, personality or appearance?</div><span class="text-success d-inline"> (cái nào quan trọng hơn giữa tính cách và ngoại hình?)</span>
           <div class="mb-3 answer text-dark">Of course, personality is more important than appearance because personality lasts longer than attractive appearance. It means that a good fame is better than a good face</div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: 'I would like to talk about beauty and physical attractiveness. I think beauty is how you feel inside, and it reflects in your eyes. I think no one has the right to decide who and what is beautiful, different people have different ideas about beauty. I don’t think I’m very handsome, but I’m good looking, my true beauty is that. I’m friendly, helpful and optimistic. Actually I like to make new friends, help people, be optimistic in any situations.  My friends think people are beautiful when they have an open mind and kind heart. I agree with my friends and I think it is a good idea.  I  think Physical attractiveness is only one of the most important factors leading to success. To be successful, we need to be hard working, patient, flexible and intelligent. That’s all ! Thank you for your listening!'
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