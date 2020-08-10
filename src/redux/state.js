let store = {

    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello !", likesCount: 3},
                {id: 2, message: "Hi my friend !!!", likesCount: 4},
                {id: 3, message: "Hi, it's my first post!!!", likesCount: 8},
                {id: 4, message: "Hi, it's my first post!!!", likesCount: 8},
                {id: 5, message: "Hi, it's my first post!!!", likesCount: 8},
                {id: 6, message: "Hi, it's my first post!!!", likesCount: 8},
                {id: 7, message: "Hi, it's my first post!!!", likesCount: 8},
                {id: 8, message: "Hi, it's my first post!!!", likesCount: 8},
                {id: 9, message: "Hi, it's my first post!!!", likesCount: 8},
                {id: 10, message: "Hi, it's my first post!!!", likesCount: 8},
            ],
            newPostText: ""
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Dima"},
                {id: 2, name: "Pety"},
                {id: 3, name: "Koly"},
                {id: 4, name: "Masha"}
            ],
            messages: [
                {id: 1, message: "Hello"},
                {id: 2, message: "How are your React"},
                {id: 3, message: "Weather id good"},
                {id: 4, message: "I am working right now"},
                {id: 5, message: "I have been working for an hour"},
                {id: 6, message: "I was work"},
                {id: 7, message: "I was working"},
            ]
        },
        aside: {
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
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log("state has been changing or state was change, state changed ")
    },

    subscribe(observer) {
        this._callSubscriber = observer; // pattern observer
    },

//
    _addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },

    _updateNewPostChange(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },


    dispatch(action){
        if (action.type===`ADD-POST`){
            this._addPost()
        }
        else if (action.type === `UPDATE-NEW-POST-CHANGE`){
          this._updateNewPostChange(action.newText)
        }

    }

}
export default store;
window.store = store;