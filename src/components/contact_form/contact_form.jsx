import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './contact_form.module.css';

const ContactForm = () => {
    const [user, setUser] = useState({
        name: '',
        mail: '',
        message: ''
    });

    const onChange = event => {
        const { value, name } = event.target;
        setUser({
            ...user,
            [name]: value
        });
    };
    const { name, mail, message } = user;

    const onReset = () => {
        setUser({
            name: '',
            mail: '',
            message: ''
        });
    };
    

    // const [name, setName] = useState('');
    // const [mail, setMail] = useState('');
    // const [message, setMessage] = useState('');

    // const onChange = event => {
    //     setName(event.target.value);
    // }
    // const onChange2 = event => {
    //     setMail(event.target.value);
    // }
    // const onChange3 = event => {
    //     setMessage(event.target.value);
    // }

    // const onReset = () => {
    //     setName('');
    //     setMail('');
    //     setMessage('');
    // };

    function sendEmail(event) {
        event.preventDefault();

        emailjs.sendForm('service_r3xxn1a', 'template_0uo0w22', event.target, 'user_D6z421r4zHZohDueHvFoS')
        .then((result) => {
            alert('메일이 발송되었습니다!')
        }).then(() => {
            onReset();
        })
        .catch((error) => {
            console.log(error.text);
        });
    }

    return (
        <form className={styles.form} onSubmit={sendEmail}>
            <label htmlFor="name">
                <p className={styles.label}>name</p>
                <input id="name" className={styles.input} type="text" name="name" value={name} placeholder="Your Name" onChange={onChange} />
            </label>
            <label htmlFor="mail" className={styles.label}>
                <p className={styles.label}>Mail</p>
                <input id="mail" className={styles.input} type="mail" name="mail" value={mail} placeholder="Your Mail" onChange={onChange} />
            </label>
            <label htmlFor="message" className={styles.label}>
                <p className={styles.label}>Message</p>
                <textarea id="message" className={styles.text} name="message" value={message} placeholder="Your Message" onChange={onChange} />
            </label>
            <button className={styles.button} type="submit">
                Send Message
            </button>
        </form>
    )};

export default ContactForm;