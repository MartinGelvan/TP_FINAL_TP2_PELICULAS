import nodemailer from "nodemailer"

const sendEMail = async (mail) => {
    try{
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            auth: {
                user: 'tp2trabajopractico@gmail.com',
                pass: 'vnmo xyrq ynaj shod'
            }
        });
        const mailOptions = {
            from: 'tp2trabajopractico@gmail.com',
            to: mail,
            subject: 'Registración exitosa',
            text: "Usted se ha registrado exitosamente"
        };
        transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error: Something went wrong. Please try again.');

        }
}

export default sendEMail