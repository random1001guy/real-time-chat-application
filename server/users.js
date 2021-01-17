const users = [];

const addUser = ({ id, name, room }) => {
    name = name.trim().toLowerCase();
    room = room.trim().toLowerCase();

    const existingUser = users.find((user) => user.room === room && user.name === name);

    if(existingUser){
        return { error : 'Username is taken!' };
    }

    const user = { id, name, room };
    users.push(user);
    //logUsers();
    return { user };
};

const logUsers = () => {
    console.log(users);
};

const removeUser = (id) => {
    //console.log('Id reveived '+id);
    const index = users.findIndex((user) => user.id === id );
    //console.log('index is '+index);
    if(index !== -1){
        let ret = users.splice(index,1)[0];
        //logUsers();
        return ret;
    }
};

const getUser = (id) =>  users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = { addUser, removeUser, getUser, getUsersInRoom };