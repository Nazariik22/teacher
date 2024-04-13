
const initialState=[
    {link:'tel:0954670150'},
    {link:'https://www.instagram.com/nazarii_k_/'},
    {link:'https://www.facebook.com/nazarii20k/'},
    {link:'mailto:nazariik20@gmail.com'},
]
const footerReduser = (state = initialState, action) => {
    switch (action.type) {
        case ' ':
          break
        default:
            return state;
    }
}
export {
    footerReduser
}