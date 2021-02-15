<template>
    <div >
        <router-link to="/">
            <span class="go-home text-center pt-3 btn btn-default rounded-0 left">
                <h3><i class="fas fa-home"></i> Home</h3>
            </span>
        </router-link>
        <div class="menu">
            <router-link to="/speak/1"><div class="btn card p-3 rounded-0 left">TOPIC 1 - INTRODUCING YOURSELF</div></router-link>
            <router-link to="/speak/2"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 2 - EDUCATION</div></router-link>
            <router-link to="/speak/3"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 3 - LIFESTYLE</div></router-link>
            <router-link to="/speak/4"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 4 - CITY LIFE</div></router-link>
            <router-link to="/speak/5"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 5 - HEALTH</div></router-link>
            <router-link to="/speak/6"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 6 - BEAUTY AND PHYSICAL ATTRACTIVENESS</div></router-link>
            <router-link to="/speak/7"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 7 - ENVIRONMENT</div></router-link>
            <router-link to="/speak/8"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 8 - FRIENDS</div></router-link>
            <router-link to="/speak/9"><div class="btn card p-3 mt-3 rounded-0 left">TOPIC 9 - JOBS AND OCCUPATIONS</div></router-link>
        </div>
    </div>
</template>

<style scoped>
    a{
		text-decoration: none;
	}
    .menu{
        width: 100%;
        height: 71.7vh;
        overflow: scroll;
    }
    .go-home{
        width: 100%;
        height: 8.3vh;
        background: #4b4b4b;
		color: #fff;
    }
    .go-home:hover{
        background: #fff;
		color: #4b4b4b;
    }
    .card{
		box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
        font-weight: bold;
        letter-spacing: 1px;
	}
	.card:hover{
		background: #4b4b4b;
		color: #fff;
		box-shadow: 0.5rem 1rem 1rem rgba(0, 0, 0, 0.15) !important;
    }
    .router-link-active > div.btn{
        background: #4b4b4b;
		color: #fff;
    }
</style>