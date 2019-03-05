import '../styles/transition.less';
export default {
    name: 'ui-alert',
    props: {
        bgcolor: {
            type: String,
            default: '#2196f3'
        },
        close: {
            type: Boolean,
            default: false
        },
        transition: String,
        mode: String
    },
    methods: {
        handleRemove(e) {
            e.stopPropagation();
            this.$emit('close');
        }
    },
    render(h) {
        const close = h('span', {
            staticClass: 'ui-close',
            on: {
                click: this.handleRemove
            }
        }, '×');
        const alert = h('div', {
            staticClass: 'ui-alert',
            style: {
                'background-color': this.bgcolor
            }
        }, [this.$slots.default, this.close ? close : undefined]);

        return this.transition ? h('transition', {
            props: {
                mode: this.mode,
                name: this.transition
            }
        }, [alert]) : alert;
    }
}