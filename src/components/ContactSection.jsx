import { Link } from "react-router-dom"

function ContactSection() {
    return (
        <>
            <div className="md:py-30 py-20 bg-gray-100   h-full">
                <h2 className="md:text-3xl text-2xl font-bold md:mb-7  text-center"   >Contact Us</h2>
                <div className="sm:text-center pt-5">
                    <p className="md:px-80 px-10 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio officiis consequatur, in magnam saepe itaque alias. Tempore alias voluptates eum, placeat dignissimos itaque eligendi, debitis quaerat minima non adipisci est.</p>
                    <div className="mt-3 text-center">
                        <Link to="/contact">
                            <button className="mt-4 px-4 py-2  text-white rounded hover:bg-blue-900 cursor-pointer" style={{ backgroundColor: '#273359' }}>
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactSection