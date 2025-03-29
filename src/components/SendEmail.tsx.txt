import axios from "axios";


type EmailData = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const sendEmail = async ({ firstName, lastName, phone, email, message }: EmailData) => {
  const serviceID = "service_n58j6pi"; // Your EmailJS Service ID
  const templateID = "template_uhdge7p"; // Your EmailJS Template ID
  const publicKey = "cSFYRidCpUYkuslUe"; // Your EmailJS Public Key

  const emailData = {
    service_id: serviceID,
    template_id: templateID,
    user_id: publicKey,
    template_params: {
      first_name: firstName,
      last_name: lastName,
      phone: phone,
      email: email,
      message: message,
    },
  };

  try {
    const response = await axios.post("https://api.emailjs.com/api/v1.0/email/send", emailData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log("Email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
};

export default sendEmail;
