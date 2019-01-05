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
            this.$store.commit('setLayout', item)
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
        noCache(){
            console.log(Array.from(this.$store.state.noCache))
            return this.$store.state.noCache
        },
        meta() {
            console.log(this.$store.state.meta)
            return this.$store.state.meta
        },

        menus() {

            return this.$store.state.api.navMenu
        }
    }
}
