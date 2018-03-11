const first = r => require.ensure([], () => r(require('components/first')), 'first');
const sec = r => require.ensure([], () => r(require('components/sec')), 'sec');
const third = r => require.ensure([], () => r(require('components/third')), 'third');
const four = r => require.ensure([], () => r(require('components/four')), 'four');

const route = [{
        path: '/',
        name: 'activate',
        component: first,
        meta: {
            title: '营销活动页'
        }
    },
    {
        path: 'festival',
        name: 'festival',
        component: sec,
        meta: {
            title: ' 节假日壁纸'
        }
    },
    {
        path: 'other',
        name: 'other',
        component: third,
        meta: {
            title: '其他 UI'
        }
    },
    {
        path: 'daily',
        name: 'daily',
        component: four,
        meta: {
            title: '蜜汁日常'
        }
    },
    {
        path: '*',
        redirect: {
            name: 'activate'
        }
    }
]
export default route