import websiteImg1 from '../assets/hotel_booking.webp';
import websiteImg2 from '../assets/library.png';
import websiteImg3 from '../assets/png-transparent-checkmark-done-exam-list-pencil-todo-xomo-basics-icon-thumbnail.png'

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'A Simple Hotel Booking Website Built with React and Bootstrap for frontend and Node and Express for backend and MongoDB for database.',
                link: 'https://hotelbooking-demo.netlify.app/',
                gitFe:'https://github.com/VenkateshP-K/Hotel_booking_FE',
                gitBe:'https://github.com/VenkateshP-K/Hotel_booking_be'
            },
            {
                image: websiteImg3,
                description: 'A Simple ToDo App Built with React and Bootstrap for frontend and Node and Express for backend and MongoDB for database',
                link: 'https://simple-todo-vp.netlify.app/',
                gitFe:'https://github.com/VenkateshP-K/todo_fe',
                gitBe:'https://github.com/VenkateshP-K/todo_be'
            },
            {
                image: websiteImg2,
                description: 'A simple Library Management System built with React and Bootstrap for frontend and Node and Express for backend and MongoDB for database.',
                link: 'https://library-management-pk.netlify.app/',
                gitFe:'https://github.com/VenkateshP-K/library_management_FE',
                gitBe:'https://github.com/VenkateshP-K/library_management_system_BE'
            }
        ]
    }

    return <section id='projects' className="flex  flex-col py-20 px-5 justify-center bg-primary text-white">
        <div className="w-full">
            <div className="flex flex-col px-10 py-5">
                <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
                <p>These are some of my best projects. I have built these with React, MERN and bootstrap CSS. Check them out.</p>
            </div>
        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                     <div className='relative'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn' target='_blank' href={project.link}>View Project</a>
                                <a className='btn' target='_blank' href={project.gitFe}>Github Frontend</a>
                                <a className='btn' target='_blank' href={project.gitBe}>Github Backend</a>
                            </div>
                        </div>
                    </div>
                ))}
               
               
            </div>
        </div>
    </section>
}