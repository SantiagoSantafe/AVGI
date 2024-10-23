import "../styles/WorkingOn.css"

function WorkinkgOn() {
    return (
        <div className="working-on">
            <h1 className="workingon-title">Page Under Construction</h1>
            <img src="/workingOn.svg" alt="working_on" className="workingon-logo"/>
            <h2 className="workingon-desc">
                We are creating something big. Please check back shortly. We apologize if you are looking for information on AVGI Group.
                If you need to get in touch with us,{' '}
                <a className="gradient-developed" href="https://webelopers.io" target="_blank" rel="noopener noreferrer">
                    Webelopers
                </a>{' '}
                is making this possible. Go and get in touch with them.
            </h2>
            <section className="info">
                <h3 className="workingon-desc2">AVGI Group</h3>
            </section>
            <section className="contact">
                <h3>Contact Us</h3>
                <p className="workingon-text">
                    For any inquiries, please reach out to us at{' '}
                    <a className="workingon-decorated-text" href="mailto:Global@Avgi.Group">Global@Avgi.Group</a>.
                </p>
            </section>
        </div>
    );
}

export default WorkinkgOn