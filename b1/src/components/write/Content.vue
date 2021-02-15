<template>
    <div>
        <div v-if="$route.params.id == 1"><Topic1/></div>
        <div v-else-if="$route.params.id == 2"><Topic2/></div>
        <div v-else-if="$route.params.id == 3"><Topic3/></div>
        <div v-else-if="$route.params.id == 4"><Topic4/></div>
        <div v-else-if="$route.params.id == 5"><Topic5/></div>
        <div v-else-if="$route.params.id == 6"><Topic6/></div>
        <div v-else-if="$route.params.id == 7"><Topic7/></div>
        <div v-else-if="$route.params.id == 8"><Topic8/></div>
        <div v-else-if="$route.params.id == 9"><Topic9/></div> 
         <div v-else><Topic10/></div>
    </div>
</template>

<script>
import Topic1 from './Content/Topic1'
import Topic2 from './Content/Topic2'
import Topic3 from './Content/Topic3'
import Topic4 from './Content/Topic4'
import Topic5 from './Content/Topic5'
import Topic6 from './Content/Topic6'
import Topic7 from './Content/Topic7'
import Topic8 from './Content/Topic8'
import Topic9 from './Content/Topic9'
import Topic10 from './Content/Topic10'

export default {
    components:{
        Topic1,
        Topic2,
        Topic3,
        Topic4,
        Topic5,
        Topic6,
        Topic7,
        Topic8,
        Topic9,
        Topic10,
    }
}
</script>