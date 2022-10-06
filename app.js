import axios from "axios";

const getUsers = (userId) => { // bu fonksiyon axios ile veri çekmemize yarıyor
    return new Promise(async (resolve, reject) => { // resolve olursa data dönücek
        const { data } = await axios("https://jsonplaceholder.typicode.com/users/"+userId); // userId girilecek sayıya göre usersı getirmeye yarar
        resolve(data);
    });
};

const getPost = (userId) => {
    return new Promise(async (resolve, reject) => { // resolve olursa data dönücek
        const { data } = await axios("https://jsonplaceholder.typicode.com/posts?userId="+userId);
        resolve(data);
    });
};

export async function getData(userId) {
    try {
        const users = await getUsers(userId);
        const post = await getPost(userId);

        const array = [users, posts];
        return array;
    } catch (e) {
        console.log(e);
    }
};
