$(document).ready(function() {
    const auth = firebase.auth();

    // Get elements
    const btnEnter_raffle = document.getElementById('enter_raffle');
    
    // Click event - Enter Raffle
    btnEnter_raffle.addEventListener('click', e => {
        auth.signInAnonymously();
        console.log('Loggin in anonymously');
    });
    
    
    
//    auth.signOut();
    
    auth.onAuthStateChanged(firebaseUser => {
        
        if (firebaseUser) {
            // User is signed in.
            console.log('Already logged in: ' + firebaseUser.isAnonymous);
        } else {
            // No user is signed in.
            auth.signInAnonymously();
            console.log('Not logged in before: ' + firebaseUser.isAnonymous);
        }
        
    });
});


