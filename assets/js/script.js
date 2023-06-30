const arrayReviewers = [
    {
        picture : 'assets/images/profile-001.JPG',
        name : 'Bruno K.',
        position : 'Software Developer at Amazon',
        description : 'JavaScript developer with 5+ years of experience in the field.\
                Proven ability to design, develop, and deploy JavaScript-based\
                web applications.'
    },
    {
        picture : 'assets/images/profile-01.png',
        name : 'Wilfried M.',
        position : 'Fullstack Developer at Microsoft',
        description : 'Full-stack developer with 5+ years of experience in designing,\
                developing, and deploying web applications. Proven ability to\
                work independently and as part of a team.'
    },
    {
        picture : 'assets/images/profile-02.png',
        name : 'Justin F.',
        position : 'Backend Developer at Google',
        description : 'Skilled Java developer with 5+ years of experience in the\
                software industry. Expertise in a variety of Java frameworks and\
                libraries, including Spring Boot, Hibernate, and JUnit.'
    },
    {
        picture : 'assets/images/profile-03.png',
        name : 'Joseph K.',
        position : 'Ruby Developer at Facebook',
        description : 'Experienced Ruby developer with 5+ years of experience in the\
                development of web applications. Strong problem-solving and\
                communication skills.'
    },
    {
        picture : 'assets/images/profile-04.png',
        name : 'Peter M.',
        position : 'React Developer at Meta',
        description : 'Experienced React developer with 5+ years of experience in the\
                tech industry. Proficient in a variety of JavaScript frameworks\
                and libraries, such as Redux and Axios.'
    },
    {
        picture : 'assets/images/profile-05.png',
        name : 'Pablo E.',
        position : 'Front-end Developer at Microsoft',
        description : 'Skilled front-end developer with 5+ years of experience in\
                designing web applications. Proven ability to work independently\
                and as part of a team to deliver high-quality web experiences.'
    },
];

function buildReviewerDetails(data, section) {
    data.forEach((element, index) => {

        let divItems = document.createElement('div');
        index > 3 ? divItems.classList.add('reviewer-items', 'hide-items') : divItems.classList.add('reviewer-items');
        
        //this condition helps to clear : both in the desktop css style
        if (index === (data.length - 2)) {
            divItems.classList.add('reviewer-items-last');
        }
        
        let divImage = document.createElement('div');
        divImage.className = 'reviewer-image';

        let img = document.createElement('img');
        img.src = element.picture;
        img.alt = 'profile picture';
        divImage.appendChild(img);

        let divDetails = document.createElement('div');
        divDetails.className = 'reviewer-details';

        let h4 = document.createElement('h4');
        h4.className = 'reviewer-name';
        h4.innerText = element.name;

        let span = document.createElement('span');
        span.className = 'reviewer-position';
        span.innerText = element.position;

        let divLine = document.createElement('div');
        divLine.className = 'reviewer-position-line';

        let hr = document.createElement('hr');
        let paragraphDescription = document.createElement('p');
        paragraphDescription.classList.add('reviewer-description', 'reviewer-description-position');
        paragraphDescription.innerText = element.description;
        divLine.appendChild(hr);
        divDetails.appendChild(h4);
        divDetails.appendChild(span);
        divDetails.appendChild(divLine);
        divDetails.appendChild(paragraphDescription);
        divItems.appendChild(divImage);
        divItems.appendChild(divDetails);
        section.appendChild(divItems);

    });

    //build more button
    let moreReviewersDiv = document.createElement('div');
    moreReviewersDiv.className = 'reviewer-items-more-button';

    let linkMore = document.createElement('a');
    linkMore.innerText = 'MORE';
    linkMore.addEventListener('click', function(){
        document.querySelectorAll('.hide-items').forEach(element => {
            element.classList.toggle("hide-items");
        });
    });

    let imgExpand = document.createElement('img');
    imgExpand.src = 'assets/icons/expand_arrow.png';
    imgExpand.alt = 'expand icon';

    moreReviewersDiv.appendChild(linkMore);
    moreReviewersDiv.appendChild(imgExpand);

    section.appendChild(moreReviewersDiv);

    return section;
}

let reviewerSection = document.getElementById('reviewers-section');
buildReviewerDetails(arrayReviewers, reviewerSection);
