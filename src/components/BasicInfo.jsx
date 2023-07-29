function BasicInfoSection() {
  return (
    <div className="container">
      <form className="basic-info-form">
        <input type="text" placeholder="Name" className="name-input" />
        <input type="text" placeholder="Phone" className="phone-input" />
        <input type="text" placeholder="Email" className="email-input" />
        <input type="text" placeholder="LinkedIn" className="linkedin-input" />
        <input type="text" placeholder="Location" className="location-input" />
      </form>
    </div>
  );
}

export default BasicInfoSection;
