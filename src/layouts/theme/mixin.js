export default {
    data() {
        return {
            isCollapsed:true,
            sideMenus:{}
        };
    },
    async created() {
        let self = this;
        // menu().then(res => {
        //     self.list = res;
        // });
    },
    beforeRouteEnter(to,from,next){
        console.log(to)
        // console.log(this.$route.meta.side=false)
        // to.meta.side=false
        next()
    },
    methods:{
        onTheme(item) {
            this.$store.commit('setTheme', item)
        },
        navClick(item){
            console.log(item)
            this.sideMenus=item
        }
    },
    mounted() {

    },
    computed: {
        menuActive(){
            return this.$route.name
        },
        sidMenu(){
            return {}
        },
        meta() {
            return this.$route.meta
        },
        theme(){
            return this.$route.theme
        },
        menus() {

            return this.$store.state.api.navMenu
        }
    }
}