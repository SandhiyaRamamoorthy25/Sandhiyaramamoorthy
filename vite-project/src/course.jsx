const course1 = "HTML"

function Course(){

 
    return(
        <div className="card">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuyS1G-GCaHlO9VKgdPNVkeO6tQdCawoFnGg&s" alt="" />
        <h1>{course1}</h1>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating and structuring web pages and content for display in a web browser. It uses "markup" to annotate text, images, and other content with special "elements" that tell the browser how to display the content.</p>
        </div>
    )
}
export default Course