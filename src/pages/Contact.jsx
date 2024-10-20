function Contact() {
  return (
    <div className="text-center mt-32 mb-32">
      <h2 className="text-green-900">Looking to collaborate?</h2>
      <p className="emphasis text-green-900">
        You can find me on one of my social media links!
      </p>
      <div className="md:ml-10 md:mr-10 mt-0">
        <h4>Email:</h4>
        <p>
          <a
            href="mailto:chirutracy@gmail.com"
            className=" text-green-800 hover:text-blue-600 transition duration-300 ease-in-out underline"
          >
            chirutracy@gmail.com
          </a>
        </p>
      </div>
      <div className="md:ml-10 md:mr-10 mt-0">
        <h4>Github:</h4>
        <p>
          <a
            href="https://github.com/TracyK10"
            className="  text-green-800 hover:text-blue-600 transition duration-300 ease-in-out underline"
          >
            My Github
          </a>
        </p>
      </div>
      <div className="md:ml-10 md:mr-10 mt-0">
        <h4>LinkedIn:</h4>
        <p>
          <a
            href="https://www.linkedin.com/in/tracy-karanja-24a10027a/"
            className=" text-green-800 hover:text-blue-600 transition duration-300 ease-in-out underline"
          >
            My LinkedIn
          </a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
