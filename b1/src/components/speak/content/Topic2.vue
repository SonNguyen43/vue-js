<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 2 - EDUCATION</h3>
        <hr>
        <p  class="position-relative">
            I would like to talk about education. <br>
            In my <b data-toggle="tooltip" data-placement="top" title="theo tôi" class="text-danger">opinion</b>, 
            education is important and <b data-toggle="tooltip" data-placement="top" title="cần thiết" class="text-danger">necessary</b> to the <b data-toggle="tooltip" data-placement="top" title="xã hội" class="text-danger">society</b>. <br>
            I think <b data-toggle="tooltip" data-placement="top" title="vai trò" class="text-danger">the roles</b> of schools are to <b data-toggle="tooltip" data-placement="top" title="đào tạo" class="text-danger">train</b> human <b data-toggle="tooltip" data-placement="top" title="nguồn nhân lực" class="text-danger">resources</b> to respond to the social needs, 
            and to develop human <b data-toggle="tooltip" data-placement="top" title="tính cách" class="text-danger">personalities</b> and <b data-toggle="tooltip" data-placement="top" title="kinh doanh" class="text-danger">awareness</b>. <br>
            I think learning at school is not enough because many schools <b data-toggle="tooltip" data-placement="top" title="cung cấp" class="text-danger">provide</b> a lot of <b data-toggle="tooltip" data-placement="top" title="lí thuyết" class="text-danger">theory</b> but not enough <b data-toggle="tooltip" data-placement="top" title="thực hành" class="text-danger">practice</b> which can be learned from real life.<br>
            At the moment, I’m studying IT in Tay Do University. <br>
            I think my school is nice and large, the learning <b data-toggle="tooltip" data-placement="top" title="cơ sở vật chất" class="text-danger">facilities</b> are <b data-toggle="tooltip" data-placement="top" title="hiện đại" class="text-danger">modern</b>, our teachers and friends are very friendly.<br>
            I like English because I want to be good at English to prepare for my future job.<br>
            In short, education is very important and we should study to have a better life.<br>
            Thank you for your listening!

             <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. What are you studying at the moment?</div><span class="text-success d-inline"> (hiện tại bạn đang học tại đâu ?)</span>
            <div class="mb-3 answer text-dark text-primary">At the moment, I’m studying IT in Tay Do University</div>

        <div class="question text-primary d-inline">2. What do you think about your school, teachers and friends</div><span class="text-success d-inline"> (bạn nghĩ về trường, thầy cô, bạn bè thế nào ?)</span>
            <div class="mb-3 answer text-dark text-primary">I think my school is nice and large, the learning facilities are modern, our teachers and friends are very friendly</div>

        <div class="question text-primary d-inline">3. What difficulties have you got when studying here? </div><span class="text-success d-inline"> (khó khan khi bạn học ở đó ?)</span>
            <div class="mb-3 answer text-dark text-primary">
                When studying here, I have some difficulties <br>
            -	The first, the <b data-toggle="tooltip" data-placement="top" title="khoảng cách" class="text-danger">distance</b> from my house to school is very far.<br>
            -	The Second, <b data-toggle="tooltip" data-placement="top" title="học phí" class="text-danger">the  school fee</b> is very high.<br>
            </div>

        <div class="question text-primary d-inline">4. What is your favorite subject? Are you learning anything interesting?</div><span class="text-success d-inline"> (môn học mà bạn thích ? bạn đã học được gì thú vị từ nó ?)</span>
            <div class="mb-3 answer text-dark text-primary">I like English because I want to be good at English to prepare for my future job.</div>

        <div class="question text-primary d-inline">5. Do you like to study English? </div><span class="text-success d-inline"> (bạn có thích học anh văn?)</span>
            <div class="mb-3 answer text-dark text-primary">Yes, I like English, but I think it’s <b data-toggle="tooltip" data-placement="top" title="có ích" class="text-danger">useful</b> for my job.</div>

        <div class="question text-primary d-inline">6. Why are you learning English? What do you hope to do in English classes?</div><span class="text-success d-inline"> (bạn có thích học av / bạn hi vọng sẽ làm gì trong lớp av ?)</span>
            <div class="mb-3 answer text-dark text-primary">
                -	I am learning English to prepare for my job. <br>
                -	I hope I can pass the B1 level and <b data-toggle="tooltip" data-placement="top" title="cải thiện giao tiếp" class="text-danger">improve communication</b> skills 
            </div>

        <div class="question text-primary d-inline">7. What is the role of schools in society?</div><span class="text-success d-inline"> (vai trò của trường học trong xã hội là gì ?)</span>
            <div class="mb-3 answer text-dark text-primary">I think the roles of schools are to train human resources to respond to the social needs, and to develop human personalities and awareness. </div>

        <div class="question text-primary d-inline">8. Why is learning at school not enough? </div><span class="text-success d-inline"> (tại sao học ở trường là chưa đủ ?)</span>
            <div class="mb-3 answer text-dark text-danger">I think learning at school is not enough because many schools provide a lot of theory but not enough practice which can be learned from real life.</div>

        <div class="question text-primary d-inline">9. What are the advantages of studying abroad? </div><span class="text-success d-inline"> (lợi thế của việc đi du học là gì ?)</span>
            <div class="mb-3 answer text-dark text-primary"><b data-toggle="tooltip" data-placement="top" title="học tập ở nước ngoài, sinh viên có thể cải thiện tiếng Anh, học các nền văn hóa mới và có cơ hội tiếp cận với nền giáo dục hiện đại và tiên tiến." class="text-danger">Studying abroad, students can improve English, learn new cultures and have a chance to reach modern and advanced education.</b></div>

        <div class="question text-primary d-inline">10 .What are the disadvantages of studying abroad?</div><span class="text-success d-inline"> (bất lợi của việc đi du học ?)</span>
           <div class="mb-3 answer text-dark text-primary"><b data-toggle="tooltip" data-placement="top" title="- du học đôi khi gây ra một số rắc rối như thức ăn, thời tiết và giao tiếp không quen thuộc nếu sinh viên không giỏi tiếng Anh.
                - du học cũng tốn kém.
" class="text-danger">
            -	Studying abroad sometimes cause some troubles such as unfamiliar food, weather and communication if students are not very good at English. <br>
            -	Studying abroad is also expensive. 
            </b>
           </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: 'I would like to talk about education. In my opinion, education is important and necessary to the society. I think the roles of schools are to train human resources to respond to the social needs, and to develop human personalities and awareness. I think learning at school is not enough because many schools provide a lot of theory but not enough practice which can be learned from real life. At the moment, I’m studying IT in Tay Do University. I think my school is nice and large, the learning facilities are modern, our teachers and friends are very friendly. I like English because I want to be good at English to prepare for my future job. In short, education is very important and we should study to have a better life. Thank you for your listening!'
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
        overflow: scroll;
        font-size: 20px;
    }
    p{
        text-align: justify;
    }
    .question{
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