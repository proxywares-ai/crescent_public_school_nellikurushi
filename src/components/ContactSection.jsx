import { Link } from "react-router-dom"

function ContactSection() {
    return (
        <>
            <div className="md:py-30 py-20 bg-gray-100   h-full">
                <h2 className="md:text-3xl text-2xl font-bold md:mb-7  text-center"   >Contact Us</h2>
                <div className="text-center pt-5">
                    <p className="md:px-70 px-10 md:text-lg">We value open communication and are always here to support our students, parents, and community. For any inquiries, admissions-related questions, or general information, please feel free to reach out to us. You can contact our office during working hours by phone, email, or by visiting the school campus. We look forward to connecting with you and assisting in every way possible.</p>
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