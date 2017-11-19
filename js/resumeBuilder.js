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
        github: 'kritoke',
        twitter: 'kritoke',
        blog: 'http://matthewrhone.com',
        location: 'Lake Charles'
    },
    welcomeMessage: 'Lorem Ipsum',
    skills: ['Linux', 'JavaScript', 'Ruby', 'Server/Desktop Support', 'Graphics Design'],
    biopic: 'images/fry.jpg',
    display: function() {
        bioView.init();
    }
}

var bioView = {
    init: function() {
        bioName = HTMLheaderName.replace('%data%', bio.name);
        bioRole = HTMLheaderRole.replace('%data%', bio.role);
        bioPhoto = HTMLbioPic.replace('%data%', bio.biopic);
        bioMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        bioEmail = HTMLemail.replace('%data%', bio.contacts.email);
        bioGithub = HTMLgithub.replace('%data%', bio.contacts.github);
        bioTwitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
        bioBlog = HTMLblog.replace('%data%', bio.contacts.blog);
        bioLocation = HTMLlocation.replace('%data%', bio.contacts.location);
        bioWelcomeMessage = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

        $headerID = $('#header');
        $topContacts = $('#topContacts');

        this.render();
    },

    render: function() {
        $headerID.prepend(bioName + bioRole);
        $headerID.append(bioPhoto + bioWelcomeMessage + HTMLskillsStart);
        $topContacts.append(bioMobile + bioEmail + bioGithub + bioTwitter + bioBlog + bioLocation);

        if (bio.skills.length > 0) {
            bio.skills.forEach(function(skill) {
                bioSkill = HTMLskills.replace('%data%', skill);
                $('#skills').append(bioSkill);
            });
        }
    }
}

var education = {
    schools: [{
        name: 'Lamar University',
        location: 'Beaumont, Texas',
        degree: 'Bachelors of Business Admimistration',
        majors: 'MIS, Finance',
        dates: '2001-2006',
        url: 'http://lamar.edu',
        onlineCourses: [{
            title: '',
            school: '',
            dates: '',
            url: ''
        }]
    }],
    display: function() {
        educationView.init();
    }
}

var educationView = {
    init: function() {
        this.render();
    },

    render: function() {

    }
}

var controller = {
    init: function() {
        bioView.init();
    }
}

controller.init();