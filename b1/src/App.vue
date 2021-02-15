<template>
    <div>
		<div class="screen">
			<transition :name="transitionName" mode="out-in" appear>
				<router-view></router-view>
			</transition>

			<div class="position-absolute text-white" style="bottom: 5px; right:10px">- Người Thích Đùa <i class="fas fa-smile-wink"></i></div>
		</div>
    </div>
</template>

<script>

export default {
	data(){
		return{
			transitionName: 'fade',
		}
	},
}
</script>

<style>
	.content{
		height: 80vh;
		width: 100%;
		margin-top: 10vh;
		background: #fff;
		overflow: scroll;
	}
	.screen{
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background: #4b4b4b;
	}

	.fade-enter-active {
        transition: all .3s ease;
    }
    .fade-leave-active{
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
</style>
