export default function Contact() {
    return(
        <div>
            <h2>Let's Get In Touch!</h2>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="John Smith" required></input>
                <label htmlFor="email">Enter your email</label>
                <input type="email" placeholder="example@email.com" required></input>
                <label htmlFor="message">Message</label>
                <input type="text" placeholder="What's on your mind?" required></input>
                <button>Send</button>
            </form>
        </div>
    )
}