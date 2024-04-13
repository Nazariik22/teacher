
const initialState=[
    {text:"Головна",link:'/'},
    {text:"Новини",link:'/news'},
    {text:"Документація",link:'/doc'},
    {text:"Модулі",link:'/modal'},
    {text:"Публічна інформація",link:'/publick'},
]

const headerReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
          break
        default:
            return state;
    }
}
export {
    headerReduser
}