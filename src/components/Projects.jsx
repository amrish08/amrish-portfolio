import React from 'react';
import websiteImg1 from '../assets/tenantcube.png';
import websiteImg2 from '../assets/qmall.png';
import websiteImg3 from '../assets/Qadex.png';


const Projects = () => {
    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A Real-Estate app build with Ember.js and Ruby on Rails.',
                link: ''
            },
            {
                image: websiteImg2,
                description: 'A Candidate test Application known as QMALL build with Ruby on Rails and jQuery.',
                link: ''
            },
            {
                image: websiteImg3,
                description: 'A food management and expense tracker application build with React.js and Ruby on Rails.',
                link: ''
            }
        ]
    }
  return (
    <section className='flex flex-col py-20 px-5 justify-center bg-primary text-white' id='projects'>
        <div className='w-full'>
            <div className='flex flex-col px-10 py-5'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[137px] font-bold'>Projects</h1>
                <p className='flex flex-col'>These are some of my best projects. I have built this using React.js, Ruby On Rails, Jquery and CSS3. Check them out.  </p>
            </div>
        </div>
        <div className='w-full'>
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                {config.projects.map((project) => (
                <div className='relative'>
                    <img className='h-[200px] w-[500px]' src={project.image}/>
                    <div className='project-desc'>
                        <p className='text-center px-5 py-5'>{project.description}</p>
                    </div>
                </div>
                ))}
            </div>
            
        </div>
    </section>
    )
}

export default Projects;