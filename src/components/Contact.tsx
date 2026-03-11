export default function Contact() {
    return(
        <section className="flex justify-center gap-72">
            <div>
                <h2>Let's Get In Touch!</h2>
                <p>Feel free to email me about anything!</p>
            </div>
            <form className="flex flex-col bg-amber-600">
                <label htmlFor="name">Name</label>
                <input type="text" placeholder="John Smith" required></input>
                <label htmlFor="email">Enter your email</label>
                <input type="email" placeholder="example@email.com" required></input>
                <label htmlFor="message">Message</label>
                <input type="text" placeholder="What's on your mind?" required></input>
                <button>Send</button>
            </form>
        </section>
    )
}