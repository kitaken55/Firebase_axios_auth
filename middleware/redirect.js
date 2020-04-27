export default function ({ redirect, store, route }) {
    const user = store.state.user
    if (!user && route.path !== '/login') {
        redirect('/login')
    }
}