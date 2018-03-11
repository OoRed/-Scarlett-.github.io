const first = r => require.ensure([], () => r(require('components/first')), 'first');
const sec = r => require.ensure([], () => r(require('components/sec')), 'sec');
const third = r => require.ensure([], () => r(require('components/third')), 'third');
const four = r => require.ensure([], () => r(require('components/four')), 'four');

const route = [{
        path: '/',
        name: 'activate',
        component: first
    },
    {
        path: 'festival',
        name: 'festival',
        component: sec
    },
    {
        path: 'other',
        name: 'other',
        component: third
    },
    {
        path: 'daily',
        name: 'daily',
        component: four
    },
    {
        path: '*',
        redirect: {
            name: 'activate'
        }
    }
]
export default route
