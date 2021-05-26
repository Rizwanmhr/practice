import React, {useState} from 'react'

export const Contact = () => {
  const [data, setData] = useState({
     fullname: '',
     phone: '',
     email: '',
     message: '',
  });
  const InputEvent = (event) => {
    const {name, value} = event.target;
    setData((preval) => {
      return{
        ...preval,
        [name]: value,
        
      };
      
    });
    
  };
  const formSubmit = (e) => {
e.preventDefault();
alert(`Mt name is ${data.fullname}. My phone number is ${data.phone}. My email is ${data.email}. Here is what i want to say ${data.message}`);
  }
    return (
        <>
          <div className='my-5'>
        <h1 className='text-center'> Contact Us </h1>
        <div className='container contact-div'>
        <div className='row'> 
        <div className='col-md-6 col-10 mx-auto'>
      <form onSubmit={formSubmit}>
<div className='mb-3'>
<label for='exampleFormControlInout1' className='form_label'> Enter Your Name </label>
<input ty='text' className='form-control' id='exampleFormControlInout1' name='fullname' value={data.fullname} onChange={InputEvent} placeholder='Enter your name' />
</div>

<div className='mb-3'>
<label for='exampleFormControlInout1' className='form_label'> Phone </label>
<input ty='text' className='form-control' id='exampleFormControlInout1' name='phone' value={data.phone} onChange={InputEvent} placeholder='Phone' />
</div>

<div className='mb-3'>
<label for='exampleFormControlInout1' className='form_label'> Emai Address </label>
<input ty='text' className='form-control' id='exampleFormControlInout1' name='email' value={data.email} onChange={InputEvent} placeholder='Email Address' />
</div>

<div className="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='message' value={data.message} onChange={InputEvent}></textarea>
</div>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">Submit form</button>
  </div>


      </form>
      
  
        </div>
        </div>

        </div>

          </div> 
        </>
    )
}
export default Contact;
