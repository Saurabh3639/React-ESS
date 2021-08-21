import Service from './Service';

function Header(){

    const services=[
        {
            title:"HTML5",
            subtitle: "Front-End Development",
            desc:"The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.",
            image:"https://sisgain.com/hire-images/hire-html-css-top.png"
        },
        {
            title:"CSS3",
            subtitle: "Front-End Development",
            desc:"Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
            image:"https://ucarecdn.com/cfbe17fd-807e-40ab-9a4e-0f465ed82a21/"
        },
        {
            title:"JavaScript",
            subtitle: "Front-End & Back-End Development",
            desc:"JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.",
            image:"https://www.creative-tim.com/blog/content/images/wordpress/2019/10/The-Top-10-Javascript-Frameworks.jpg"
        },
        {
            title:"PHP",
            subtitle: "Back-End Development",
            desc:"PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group.",
            image:"https://semidotinfotech.com/blog/wp-content/uploads/2020/10/Tips-to-Hire-PHP-Developer.jpg"
        },
        {
            title:"Python",
            subtitle: "Back-End Development",
            desc:"Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects.",
            image:"https://media.onlinecoursebay.com/2019/03/28005011/1079198_9fbb_8.jpg"
        }
    ]


    return (
        <div>
            
            <h1 style={{marginLeft:"15%"}}>Web Development</h1>
            <div className="container">
                {
                    services.map((service,index)=>(

                        <Service key={index} title={service.title} subtitle={service.subtitle} desc={service.desc} image={service.image} />

                    ))
                }
            </div>

        </div>

        
    )

}


export default Header;