/*
This is empty on purpose! Your code to build the resume will go here.
 */

// bio model
var bio = {
    name: 'Matthew Rhone',
    role: 'IT Professional',
    contacts: {
        mobile: '867-5301',
        email: 'notarealemail@somewhere.com',
        github: 'https://github.com/kritoke',
        twitter: 'kritoke',
        location: 'Lake Charles'
    },
    welcomeMessage: '',
    skills: ['Linux', 'JavaScript', 'Ruby', 'Windows Server Support', 'Desktop Support', 'Graphics Design'],
    biopic: 'images/fry.jpg',
    display: function() {
        bioView.init();
    }
}

var bioView = {
    init: function() {
        bioName = HTMLheaderName.replace("%data%", bio.name);
        $headerID = $('#header');

        this.render();
    },

    render: function() {
        $headerID.append(bioName);
    }
}

bioView.init();