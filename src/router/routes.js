const HelloWorld = () => import(' .. /components/HelloWorld.vue')
const PhotoContents = () => import(' ../components/PhotoContents.vue')

const routes = [
    {
        path: '/',
        component: HelloWorld,
    },
    {
        name: 'HelloWorld', path: '/HelloWorld',
        component: HelloWorld
    },
    {
        name: 'PhotoContents', path: '/PhotoContents',
        component: PhotoContents
    }
]
export default routes