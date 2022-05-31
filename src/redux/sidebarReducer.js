let initialState = {
    friends: [
        { id: 1, 
          firstName: 'Антон', 
          lastName: 'Романов', 
          img: 'https://i.imgur.com/Jn4n3xc.jpeg', 
          url: '/friends' },
        { id: 2, firstName: 'Евгений', lastName: 'Смирнов', img: 'https://i.imgur.com/KpuyBAf.jpeg', url: '/friends' },
        { id: 3, firstName: 'Алекстандра', lastName: 'Варнава', img: 'https://i.imgur.com/6Jkce9C.jpeg', url: '/friends' },
        { id: 4, firstName: 'Михаил', lastName: 'Иванов', img: 'https://i.imgur.com/Jn4n3xc.jpeg', url: '/friends' }
    ]
}

const sidebarReducer = (state = initialState, action) => {
    
    return state;
}

export default sidebarReducer;