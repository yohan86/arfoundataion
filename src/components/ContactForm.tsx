import Swal from 'sweetalert2';

const ContactForm = () => {
    const onSubmit = async (event:any) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "dbac55db-b855-454a-b6d8-eb2e0400287e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      Swal.fire({
        title: "Success!",
        text: "Your message sent successfully!",
        icon: "success"
      });
    }
  };


  return (
        <section className="contact-wrapper w-[85%] md:w-[650px] m-auto">
            <div className="contact-form px-4">
              <form onSubmit={onSubmit}>
                  <h3 className="mb-5">Get in Touch</h3>
                  <div className="input-box">
                      <label>Full Name <sup>*</sup></label>
                      <input type="text" className="field" name="name" placeholder="Enter Name" required />
                  </div>
                  <div className="input-box">
                      <label>Email<sup>*</sup></label>
                      <input type="email" className="field" name="email" placeholder="Enter Email" required />
                  </div>
                  <div className="input-box">
                      <label>Phone</label>
                      <input type="text" className="field" name="phone" placeholder="Enter Phone Number"  />
                  </div>
                  <div className="input-box">
                      <label>Message<sup>*</sup></label>
                      <textarea className="field messg" name="message" placeholder="Enter Message" required></textarea>
                  </div>
                  <div className="required-info text-[12px] float-right">* Fields are required</div>
                  <button type="submit">Send Message</button>
              </form>
            </div>
            <div className="contact-details">

            </div>
        </section>
  )
}

export default ContactForm