const allCourses = document.querySelectorAll("#all");
const cseCourses = document.querySelector("#cse");
const wddCourses = document.querySelector("#wdd");

const modal = document.getElementById('courseDetails');



const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

//call function and pass in const courses see line 106 from filtered-temples.js
allCourses[0].addEventListener('click', () => {
    const allCourse = courses.filter(course => {
        const all = course.subject;
        return all;
    });

    createCourseCard(allCourse);

});

cseCourses.addEventListener('click', () => {
    const targetSubject = "CSE";
    const cseCourseFilter = [];

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].subject === targetSubject) {
            cseCourseFilter.push(courses[i]);
        }
    }

    createCourseCard(cseCourseFilter);
});

wddCourses.addEventListener('click', () => {
    const targetSubject = "WDD";
    const wddCourseFilter = [];

    for (let i = 0; i < courses.length; i++) {
        if (courses[i].subject === targetSubject) {
            wddCourseFilter.push(courses[i]);
        }
    }

    createCourseCard(wddCourseFilter);

    document.getElementById("WDD").innerHTML = numbers.reduce(totalCredits);
});



//create function for courses see line 176 from filtered-temples.js
function createCourseCard(filteredCourses) {
    document.querySelector(".courses-listed").innerHTML = "";
    const counts = filteredCourses.length;


    filteredCourses.forEach(course => {

        let card = document.createElement("section");
        let subject = document.createElement("p");
        // const bodyElement = subject.textContent;

        if (course.completed) {
            // then add check
            subject.textContent += "\u2713";
            card.style.backgroundColor += '#539987';
        }

        subject.textContent += course.subject + ` ` + course.number;
        card.style.backgroundColor += '#7E78D2';

        card.appendChild(subject);

        document.querySelector(".course-count").textContent = `The total number of courses listed below is ${counts}.`;

        document.querySelector(".courses-listed").appendChild(card);

        courseDiv.addEventListener('click', () => {
            displayCourseDetails(course);
        });

        // let total = course.reduce((course, index) => {
        //     if ([course.id]) {
        //         [course.id] = [course.id, [course.credits]];
        //     }
        // }, []);

        // for (var i = 0; i < course.length; i++) {
        //     var v = course.credits;
        // }

        // document.querySelector(".course-count").textContent = `The total number of credits listed below is ${total}.`;




        // document.querySelector('#all').textContent = `The total number of courses listed below is${counts.length} divs in document.`;
    });

    function displayCourseDetails(course) {
        courseDetails.innerHTML = '';
        courseDetails.innerHTML = `
        <button id="closeModal"❌</button>
        <h2>${course.subject} ${course.number}</h2>
        <h3>${course.title}</h3>
        <p><strong>Credits</strong>: ${course.credits}</p>
        <p><strong>Certificate</strong>: ${course.certificate}</p>
        <p>${course.description}</p>
        <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
        `;
        courseDetails.showModal();

        closeModal.addEventListener("click", () => {
            courseDetails.close()
        });
    }

}