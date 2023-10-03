export default function Page() {
  return (
    <>
      <div className="m-12 mx-auto min-w-[400px] max-w-4xl  px-6 sm:px-16 md:px-24">
        <div className="text-left">
          {/*<h2 className="font-merriweather text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">*/}
          {/*  Join waitlist*/}
          {/*</h2>*/}
          <p className="font-poppins mb-8 mt-4 text-lg font-medium leading-8 text-gray-600">
            Glad you want to sign up for early-access! Currently, we are working
            with a small group of pilot customers, but we will be rolling out
            general access soon!
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
