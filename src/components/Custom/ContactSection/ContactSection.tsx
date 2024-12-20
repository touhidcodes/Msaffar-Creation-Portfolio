const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("Thank you! Your message has been sent.");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <div>
      <h2>Welcome to the ContactSection page</h2>
    </div>
  );
};

export default ContactSection;
