var home = new Vue ({
    el: '#home',
    data: {
        view: 'menu'
    },
    methods: {
        showProjects : function () {
            this.view = 'projects';
        },

        showSkills : function () {
            this.view = 'skills';
        },

        goBack : function () {
            this.view = 'menu';
        }
    }
});