function BasicInfoSection() {
  return (
    <div className="general-container">
      <form className="general-form">
        <input type="text" placeholder="Name" className="name" />
        <input type="text" placeholder="Phone" className="phone" />
        <input type="text" placeholder="Email" className="email" />
        <input type="text" placeholder="LinkedIn" className="linked-in" />
        <input type="text" placeholder="Location" className="location" />
      </form>
    </div>
  );
}

export default BasicInfoSection;
