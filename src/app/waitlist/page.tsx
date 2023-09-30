export default function Page() {
    return (
        <>
            {/*<NavBar tab="waitlist" />*/}

            <div className="bg-bg px-6 min-w-[400px] max-w-4xl mx-auto m-12 sm:px-16 md:px-24">
                <div className="text-left">
                    <h2 className="text-3xl font-merriweather font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Join waitlist
                    </h2>
                    <p className="mt-4 font-poppins font-medium text-lg leading-8 text-gray-600 mb-8">
                        We are extending access to businesses. We are initially prioritizing
                        a small number of businesses and plan to roll out larger-scale
                        access over time.
                    </p>
                    <iframe
                        className="airtable-embed airtable-dynamic-height"
                        src="https://airtable.com/embed/shrHuBJX9mBEwBOBf?backgroundColor=orangeLight"
                        width="100%"
                        height="1000"
                        style={{ background: "transparent", border: "1px solid #ccc" }}
                    ></iframe>
                </div>
            </div>
        </>
    );
}