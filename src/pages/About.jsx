import headshot from '../assets/images/headshot.jpg';
import '../pages/About.css';


function About() {
    return (
        <div //style={{ display: 'flex', alignItems: 'center'}}
        >
            <img src={headshot} 
                alt="About image" 
                style={{ width: '150px', 
                height: 'auto',
                marginRight: '20px'}}
            />
            <p>
            <h1> My name is Fatema Sarwar. </h1>
            <h2> I have only two semesters left until I graduate. I go to centennial college.
                I enjoy to code and hope to have more projects on here soon. Below is my resume. 
            </h2>
            <div className='resume-container' style={{ width: '600px', height: '800px' }}>
        <object
        
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
        >
          <p>Your browser does not support PDFs. 
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Download the PDF</a>
            </p>
        </object>
      </div>
                
            </p>
        </div>
    
    );

}

export default About;