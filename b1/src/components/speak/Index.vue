<template>
    <div class="content">
        <div class="row">
            <div class="col-md-4 p-0">
                <Menu />
            </div>
            <div class="col-md-8 pl-2 pr-2">
                <div v-if="$route.params.id == 1"><Topic1/></div>
                <div v-else-if="$route.params.id == 2"><Topic2/></div>
                <div v-else-if="$route.params.id == 3"><Topic3/></div>
                <div v-else-if="$route.params.id == 4"><Topic4/></div>
                <div v-else-if="$route.params.id == 5"><Topic5/></div>
                <div v-else-if="$route.params.id == 6"><Topic6/></div>
                <div v-else-if="$route.params.id == 7"><Topic7/></div>
                <div v-else-if="$route.params.id == 8"><Topic8/></div>
                <div v-else-if="$route.params.id == 9"><Topic9/></div>                    
                <div v-else>
                    <h3 class="text-center mt-3">CHOOSE A TOPIC TO GET STARTED</h3>
                </div>                    
            </div>
        </div>
    </div>
</template>

<script>
import Menu from './menu/Menu'

import Topic1 from './content/Topic1'
import Topic2 from './content/Topic2'
import Topic3 from './content/Topic3'
import Topic4 from './content/Topic4'
import Topic5 from './content/Topic5'
import Topic6 from './content/Topic6'
import Topic7 from './content/Topic7'
import Topic8 from './content/Topic8'
import Topic9 from './content/Topic9'

export default {
    components:{
        Menu,
        Topic1,
        Topic2,
        Topic3,
        Topic4,
        Topic5,
        Topic6,
        Topic7,
        Topic8,
        Topic9
    }
}
</script>
