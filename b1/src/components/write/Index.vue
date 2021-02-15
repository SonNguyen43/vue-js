<template>
    <div class="content" @click.ctrl="goHome()" @dblclick="goHome()">
        <div class="container-sm">
            <div class="row">
               <div class="col-md-6">
                    <router-link to="/write/1">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                            Your friend, Thanh, is in indecision about his studying abroad. He asked you to give him some advice. Write an email (about 100 words) to him. In this email, you should mention: <br>
                            - advantages of studying abroad <br>
                            - Disadvantages of studying abroad <br>
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/2">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                                Your friend is going to attend his new manager’s birthday party.  <br>
                                However, he doesn’t know what to wear to the party, what to give her, a 40-year-old woman, and where to buy the gifts. <br>
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/3">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                                A friend who hasn’t had any contact with you for a long time asked you to tell him about your life. <br>
                                Write an email (about 100 words) to him. In this email, you should mention: <br>
                                - Where you are living <br>
                                - Your family <br>
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/4">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                               You have received an email from English-speaking friend, Jack, who is coming to visit your country with some friends. <br>
                               They would like to visit your hometown in 2 days.  <br>
                               He asked you about where to stay, where to go and which means of transport is suitable. Write an email (100 words) to him
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/5">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                                You have received an email from your friend in which he asked you about your plan for the next weekend. <br>
                                Write an email (about 100 words) to him. In this email, you should mention <br>
                                - What you are doing <br>
                                - Who you enjoy these activities with <br>
                                - How you prepare for it 
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/6">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                                You have received an email from your Mom in which she asked you about your best friend. <br>
                                Write an email (about 100 words) to her. In this email, you should mention: <br>
                                - Your friend’s appearance <br>
                                - Your friend’s personality <br>

                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/7">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                                Write a letter (about 100 words) to local offical about an environmental problem in your community. <br>
                                In this letter, you should mention: <br> 
                                - What the problem is <br>
                                - Who or what the problem affect <br>
                                - Who or what is causing it

                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/8">
                        <div class="card p-5 mt-3">
                            <p><i class="fas fa-feather-alt"></i>  
                              Your friend has some problems with his girlfriend because of getting stressful from work.  <br>
                              Write an email (about 100 words) to him to share your sympathy, give advice about his work and how to solve problems with his girlfriend.
                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/9">
                        <div class="card p-5 mt-3 mb-3">
                            <p><i class="fas fa-feather-alt"></i>  
                                Write an email (about 100 words) to your friend to tell him about your last vacation. <br>
                                In this email, you should mention: <br>
                                - Where you spent your vacation <br>
                                - What you did <br>
                                - How you felt

                            </p>
                        </div>
                    </router-link>
                </div>
                <div class="col-md-6">
                    <router-link to="/write/10">
                        <div class="card p-5 mt-3 mb-3">
                            <p><i class="fas fa-feather-alt"></i>  
                                Write an email (about 100 words) to your manager to ask for some days off. In this email, you should mention: <br>
                                - How many days off you want <br>
                                - Why you want some days off <br>
                                -Who will be in charge of your work
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Swal from 'sweetalert2'

export default {
    components:{

    },
    created(){
        // Swal.fire({
        //     position: 'top-end',
        //     icon: 'info',
        //     title: 'Ctrl + Click để về trang chủ',
        //     showConfirmButton: false,
        //     timer: 1500
        // })
    },
    methods: {
        goHome(){
            // this.$router.go(-1);
            this.$router.push({ path: '/' })
        }
    },
}
</script>


<style scoped>
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
</style>