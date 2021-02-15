<template>
    <div class="topic pr-3 pl-3">
        <h3 class="text-center mt-3">TOPIC 9 - JOBS AND OCCUPATIONS</h3>
        <hr>
        <p class="position-relative">

            I would like to talk about jobs and occupations. <br>
            In my country, people usually begin to work when they are 18 years old or after they <b data-toggle="tooltip" data-placement="top" title="tốt nghiệp" class="text-danger">graduate</b> from high school or university. <br>
            Men usually <b data-toggle="tooltip" data-placement="top" title="nghĩ hưu" class="text-danger">retire</b> at the age of 60 and 55 is for women. Normally, Women have to work after getting married because they need money for their families. <br>
            After graduating from the university, I want to work in a big company. <br>
            In my opinion, having a job is important because it helps us to earn money for our life and our family.<br>
            I think that choosing a right job is very important because If we like that job, we will work very <b data-toggle="tooltip" data-placement="top" title="hiệu quả" class="text-danger">effectively</b>.<br>
            To find a good job, we need to have good knowledge, good skills. <b data-toggle="tooltip" data-placement="top" title="ngoài ra" class="text-danger">Besides</b>, we need to be <b data-toggle="tooltip" data-placement="top" title="chủ động và linh hoạt" class="text-danger">active and flexible</b>.<br>
            I think to keep the job, we need to be <b data-toggle="tooltip" data-placement="top" title="trung thực" class="text-danger">honest</b> and hard working<br>
            That’s all! Thank you for your listening!
            
            <span class="position-absolute" style="bottom: -20px; right: 0" @dblclick="Speak()"><i class="fas fa-volume-up"></i></span>
        </p>
        <hr>
        <div class="question text-primary d-inline">1. At what age do people usually begin to work in your country?</div><span class="text-success d-inline"> (tại độ tuổi nào thì người ta thường bắt đầu làm việc tại quê hương của bạn?)</span>
            <div class="mb-3 answer text-dark">In my country, people usually begin to work when they are 18 years old/ after they graduate from high school or university.</div>

        <div class="question text-primary d-inline">2. At what age do people usually retire in your country? </div><span class="text-success d-inline"> (độ tuổi nào thì nghĩ hưu?)</span>
            <div class="mb-3 answer text-dark">Men usually retire at the age of 60 and 55 is for women</div>

        <div class="question text-primary d-inline">3. Do women usually work after they get married in your country?</div><span class="text-success d-inline"> (tại sao phụ nữ thường làm việc sau khi kết hôn?)</span>
            <div class="mb-3 answer text-dark">Women have to work after getting married because they need money for their families.</div>

        <div class="question text-primary d-inline">4. What do you want to do after graduating from the university? </div><span class="text-success d-inline"> (bạn muốn làm gì khi tốt nghiệp đại học?)</span>
            <div class="mb-3 answer text-dark">(After graduating from the university), I want to become a / lawyer/ a tour guide/ pharmacist/ banker/ an engineer …and I want to work in a big company.</div>

        <div class="question text-primary d-inline">5. Do you have a part-time job? If so, what do you do?</div><span class="text-success d-inline"> (bạn có làm việc bán thời gian không? Nếu có, tại sao bạn lại làm vậy ?)</span>
            <div class="mb-3 answer text-dark">
                Yes, I have a part-time job. I work as a tour guide/ waiter/ waitress <br>
                No, I don’t have a part time job because I am very busy.
            </div>

        <div class="question text-primary d-inline">6. WDo you think it is more important to make a lot of money or to enjoy your job?</div><span class="text-success d-inline"> (bạn nghĩ giữa kiếm được nhiều tiền và tận hưởng công việc thì nào quan trọng hơn ?)</span>
            <div class="mb-3 answer text-dark">I think it’s important to enjoy our job, because job passion can bring us happiness and money</div>

        <div class="question text-primary d-inline">7. In your opinion, which jobs are easy to do? </div><span class="text-success d-inline"> (theo bạn, có công việc nào là dễ dàng không ?)</span>
            <div class="mb-3 answer text-dark">I think no jobs are easy to do</div>

        <div class="question text-primary d-inline">8. In your opinion, which jobs are difficult to do? </div><span class="text-success d-inline"> ((theo bạn, có công việc nào là khó không ?)</span>
            <div class="mb-3 answer text-dark">I think they are jobs that need to have <b data-toggle="tooltip" data-placement="top" title="kiến thức chuyên môn" class="text-danger">professional knowledge</b> and skills such as doctors, tour guides, teachers….</div>

        <div class="question text-primary d-inline">9.  What should we do to find a good job? </div><span class="text-success d-inline"> (chúng ta nên làm gì để tìm được một công việc tốt ?)</span>
            <div class="mb-3 answer text-dark">To find a good job, we need to have good knowledge, good skills. Besides, we need to be active and flexible.</div>
            
        <div class="question text-primary d-inline">10.  What should we do to keep the job?</div><span class="text-success d-inline"> (chúng ta phải làm gì để giữ được công việc ?)</span>
           <div class="mb-3 answer text-dark">I think to keep the job, we need to be honest, hard-working, patient and loyal </div>

    </div>
</template>

<script>
export default {
    data(){
        return{
            textToSpeak: 'I would like to talk about jobs and occupations. In my country, people usually begin to work when they are 18 years old or after they graduate from high school or university.  Men usually retire at the age of 60 and 55 is for women. Normally, Women have to work after getting married because they need money for their families.  After graduating from the university, I want to work in a big company. In my opinion, having a job is important because it helps us to earn money for our life and our family. I think that choosing a right job is very important because If we like that job, we will work very effectively. To find a good job, we need to have good knowledge, good skills. Besides, we need to be active and flexible. I think to keep the job, we need to be honest and hard working That’s all! Thank you for your listening!'
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



