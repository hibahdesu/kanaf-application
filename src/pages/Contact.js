import React, { useRef } from 'react';
import '../styles/Contact.css';
import Title from '../components/Title'; 
import Text from '../components/Text';
import ButtonTwo from '../components/ButtonTwo';
import emailjs from 'emailjs-com';

export default function Contact() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_lxrk2zm', 'template_96if7rd', formRef.current, 'P6vWcIhFZmetgaU93')
            .then((result) => {
                alert('Message sent successfully!');
                console.log('Success:', result.text);
            })
            .catch((error) => {
                alert('Failed to send message, please try again.');
                console.error('Error:', error);
            });
    };

    return (
        <div className="">
            <div className='contact-text'>
                <Title title="تواصل معنا" />
                <Text text="إذا كان لديك أي استفسارات أو تعليقات، يرجى ملء النموذج أدناه وسنكون سعداء للرد عليك." />
            </div>
            <div className="contact-wrapper">
                <div className="contact-container">
                    <form className="contact-form" ref={formRef} onSubmit={sendEmail}>
                        <label htmlFor="name">الإسم</label>
                        <input type="text" id="name" name="user_name" required />

                        <label htmlFor="email">البريد الإلكتروني</label>
                        <input type="email" id="email" name="user_email" required />

                        <label htmlFor="message">الرسالة</label>
                        <textarea id="message" name="message" required></textarea>

                        {/* Updated ButtonTwo usage */}
                        <ButtonTwo type="submit">
                            إرسال
                        </ButtonTwo>
                    </form>
                </div>
            </div>
        </div>
    );
}