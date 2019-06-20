const github = new Github;

const ui = new UI;

const searchUser = document.getElementById('searchUser');

searchUser.addEventListener('keyup', (e) => {
    const user = e.target.value;

    if(user !== ''){
        
        github.getUser(user).then(data => {
            if(data.profile.message === 'Not Found'){
                //Show alert
                ui.showAlert('Not Found', 'alert alert-danger');
            } else {
                // show profile
                ui.showProfile(data.profile);
            }
        })
         
    } else {
            //Clear Profile
            ui.clearProfile();
        }
         

 });