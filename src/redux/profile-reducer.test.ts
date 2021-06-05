import {addPost, initialState, updateNewPostText, profileReducer} from "./profile-reducer";

let inState = initialState

test('profile-reducer should update post text', () => {
    let updateProfileReducer = profileReducer(inState, updateNewPostText('New post message'))

    expect(updateProfileReducer.newPostText).toBe('New post message')
})

test('dialogs-reducer should add new message text', () => {
    let updateProfileReducer = profileReducer(inState, addPost())
    let countPostsInState = inState.posts.length

    expect(updateProfileReducer.posts.length).toBe(countPostsInState + 1)
})