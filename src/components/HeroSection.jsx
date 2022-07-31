function HeroSection() {
  return (
    <div className="d-flex mt-4 align-items-center p-2 text-warning">
      <div className="border border-dark">
        <img
          src="/download.png"
          width="450"
          height="240"
          className="d-inline-block align-top"
          // alt="React Bootstrap logo"
        />
      </div>
      <div className="d-flex flex-column px-5">
        <p className="text-justify">
          It has been claimed by practitioners and clinicians that electronic
          health records (e.g. personal health records) have the ability to
          enhance quality and safety of care besides improved management of
          health information and clinical data. Electronic health records also
          increase portability of clinical information including the better
          interaction between patient and health service provider. This has
          helped public health experts to understand disease trends and better
          diagnose diseases. Also, from the patients’ perspective, it enables
          improved services and has reduced the redundant clinical tests.
        </p>

        {/* <div className="d-flex mt-2">
          <button type="button" className="btn btn-outline-primary">
            Signup
          </button>
        </div> */}
      </div>
    </div>
  );
}

export default HeroSection;
