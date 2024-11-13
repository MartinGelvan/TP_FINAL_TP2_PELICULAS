import nodemailer from "nodemailer"

const sendEMail = async () => {
    try{
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'tp2trabajopractico@gmail.com',
                pass: 'gdft dcbc cncm kurw'
            }
        });
        const mailOptions = {
            from: 'tp2trabajopractico@gmail.com',
            to: 'aleben5188@gmail.com',
            subject: 'Registración exitosa',
            text: "Usted se ha registrado exitosamente"
        };
        const tr = await transporter.sendMail(mailOptions);
        console.log("transporter: ", tr)
        res.send('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).send('Error: Something went wrong. Please try again.');

        }
}

export default sendEMail