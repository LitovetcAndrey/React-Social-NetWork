let initialState= {
    friends: [
        {
            id: 1,
            name: "Dima",
            photo: "http://www.smileexpo.ru/public/upload/news/tn_10_faktov_ob_eynshteyne_kotorih_vi_ne_znali_14458667137751_image.jpg"
        },
        {
            id: 2,
            name: "Pety",
            photo: "https://kpfu.ru/portal/docs/F481714198/20160208_learned_cat_blog_Einstein.jpg"
        }
    ]
}

const sideBarReducer = (state=initialState, action) => {

    return state;
}
export default sideBarReducer