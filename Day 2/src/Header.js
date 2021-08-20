
import Card from "./Card";

function Header(){

    const card = [
        {
            title:"Web Development",
            subtitle:"From Basic to Advance",
            desc:"Javascript Programming Track will teach you the basics of javascript, fundamentals, datatypes,error handling, and Mern.",
            image:"https://th.bing.com/th/id/OIP.bEbnypmSiblgxz1au88DfAHaE7?w=224&h=180&c=7&o=5&dpr=1.71&pid=1.7",
            alt:"Web development"
        },
        {
            title:"Python Programming",
            subtitle:"From Basic to Advance",
            desc:"Become a Professional Python developer by learning one of the most demanded skills in the market of 2021,TODAY!! ",
            image:"https://tse2.mm.bing.net/th?id=OIP.gcm8olaItcHMk2vtP15DnQHaDt&pid=Api&P=0&w=362&h=182",
            alt:"Python programming"
        },
        {
            title:"Core Java",
            subtitle:"From Basic to Advance",
            desc:"Become a Professional Java programmer by learning one of the most demanded skills in the market of 2021,TODAY!!",
            image:"https://th.bing.com/th/id/OIP.T8OHE4Xz9s5CJjcISQ-EJAHaEK?w=289&h=180&c=7&o=5&dpr=1.71&pid=1.7",
            alt:"Java"
        },
        {
            title:"App Development",
            subtitle:"From Basic to Advance",
            desc:"you'll learn the basics of building Android apps with the Kotlin programming language. to start your journey as an Android developer.",
            image:"https://tse2.mm.bing.net/th?id=OIP.s6wpcC8jb2qzqS3_z6jW1QHaEo&pid=Api&P=0&w=311&h=195",
            alt:"App development"
        },
        {
            title:"AI & ML",
            subtitle:"From Basic to Advance",
            desc:"Become a Professional AIML Architect by learning one of the most demanded skills in the market of 2021,TODAY!!",
            image:"https://tse4.mm.bing.net/th?id=OIP.TfZcErqEQOZRJ3P57dxUxQHaD_&pid=Api&P=0&w=353&h=192",
            alt:"Artificial Intelligence Machine Learning"       
        },
        {
            title:"Cyber Security",
            subtitle:"From Basic to Advance",
            desc:"Introduction to Cyber Security course for beginners is designed to give you a foundational look at today's cybersecurity landscape.",
            image:"https://tse3.mm.bing.net/th?id=OIP.0a_pw0NMqLxmSYEggPqRbwHaEE&pid=Api&P=0&w=283&h=156",
            alt:"Cyber Security"       
        }

    ]
    return(
        <div>
            <h1 style={{marginLeft:"30px"}}>All Courses</h1>
            <div className="container">
            {
                card.map((card,index)=>(
                    <Card key={index} title={card.title} subtitle={card.subtitle} desc={card.desc} image={card.image} alt={card.alt}/>
                ))
            }
                
            </div>
        </div>
    )
}
export default Header;