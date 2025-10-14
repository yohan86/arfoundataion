import Swal from 'sweetalert2';

const ContactForm = () => {
    const onSubmit = async (event:any) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

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
      form.reset();
    }
  };


  return (
        <section className="contact-wrapper w-[85%] md:w-[650px] m-auto relative">
            <span className="bg-tree"></span>
            <div className="contact-form relative text-[#333]  px-6 py-6 mb-10 bg-[#fff]/30 backdrop-blur-sm border border-white/20 rounded-2xl shadow-[inset_3px_3px_4px_rgba(255,255,255,0.2),_inset_-5px_-5px_19px_rgba(255,255,255,0.4),_4px_4px_12px_rgba(137,129,129,0.6)]">
              <form onSubmit={onSubmit}>
                  <input type="hidden" name="replyto" value="email" />
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
                
                  <button className="my-3" type="submit">Send Message</button>
              </form>
            </div>
            <div className="contact-details">

            </div>
        </section>
  )
}

export default ContactForm