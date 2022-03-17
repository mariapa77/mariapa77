const functions = require("firebase-functions");
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-htlm-to-text').htmlToText;

const {email, password} = require("./config");

const mailtransport =nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user:email,
        pass:password
    }
});

mailtransport.use("compile", htmlToText());

const APP_NAME = 'Sliceline';


exports.sendUserEmail = functions.database
.ref("/orders/{pushId")
.onCreate(order =>{
    sendOrderEmail(order.val());
});

function sendOrderEmail(order){
    const mailOptions = {
        from: `${APP_NAME} <noreplay@sliceline.com`,
        to: email, 
        subject:`Your order from ${APP_NAME}.`,
        htlm: 
        <table Style = "width:500px: margin: auto">
            <tr>
            <th>${order.displayName}</th>
            <th>Your order some food,here's confirmation of the order.</th>
            </tr>
            ${order.order.map(({name,quantity,price}) =>
            <tr>
                <td>
                    ${quantity}
                </td>
                <td>
                    ${name}
                </td>
                <td>
                    ${price}
                </td>
            </tr>
            ).join("")}
            
        </table>
    
        

    };
    mailtransport.sendMail(mailOptions);
}