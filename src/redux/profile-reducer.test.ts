import {addPost, deletePost, initialState, profileReducer} from "./profile-reducer";

let inState = initialState
let countPostsInState = inState.posts.length

test('count of posts should be increased', () => {
    let updateProfileReducer = profileReducer(inState, addPost('new post'))

    expect(updateProfileReducer.posts.length).toBe(countPostsInState + 1)
})

test('new post text should be added', () => {
    let updateProfileReducer = profileReducer(inState, addPost('new post'))

    expect(updateProfileReducer.posts[updateProfileReducer.posts.length - 1].message).toBe('new post')
})

test('after deleting length of messages should be decrement', () => {
    let updateProfileReducer = profileReducer(inState, deletePost(1))

    expect(updateProfileReducer.posts.length).toBe(3)
})

test('after deleting length of messages shouldn\'t be decrement if id is incorrect', () => {
    let updateProfileReducer = profileReducer(inState, deletePost(123))

    expect(updateProfileReducer.posts.length).toBe(4)
})