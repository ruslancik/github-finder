const github = new Github;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const user = e.target.value;

    if(user !== ''){
        
        github.getUser(user).then(data => console.log(data));
    }
})